/**
 * Upload working packages from Excel: select → check → fix in place → import → done, plus upload history.
 * Ported from the CLM prototype: clm-shipments-demo/assets/js/views/upload.js
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ClmDatePipe } from '../../core/date/clm-date.pipe';
import { fmtDate } from '../../core/date/iso-date';
import { Toast } from '../../core/feedback/toast.service';
import { BackNavigation } from '../../core/layout/back-navigation';
import { Trade, UploadRecord, UploadStatus, WorkingPackage } from '../../data/clm.model';
import { ClmStore } from '../../data/clm-store';
import { BUILDINGS, FLOORS, TRADES, TRADE_NAMES, tradeColor } from '../../data/reference-data';
import { confirm } from '../../shared/dialogs/confirm.dialog';
import { CreateShipmentFlow } from '../create-shipment/create-shipment-flow';
import { HubPrefs } from '../hub/hub-prefs';
import {
  UPLOAD_COLUMNS,
  UploadField,
  UploadRow,
  parseCsv,
  rowErrors,
  simulatedRows,
} from './upload-rows';

type Stage = 'select' | 'checking' | 'review' | 'importing' | 'done';
const STEP_LABELS = ['Select file', 'Check data', 'Import', 'Done'];
const PER_PAGE = 6;

@Component({
  selector: 'clm-upload-page',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCheckboxModule, ClmDatePipe],
  templateUrl: './upload.page.html',
  styleUrl: './upload.page.scss',
  host: { '(dragover)': '$event.preventDefault()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadPage {
  private readonly store = inject(ClmStore);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly toast = inject(Toast);
  private readonly backNav = inject(BackNavigation);
  private readonly createFlow = inject(CreateShipmentFlow);
  private readonly hubPrefs = inject(HubPrefs);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly stepLabels = STEP_LABELS;
  protected readonly columns = UPLOAD_COLUMNS;
  protected readonly lists = { BUILDINGS, FLOORS, TRADES: TRADE_NAMES };

  protected readonly stage = signal<Stage>('select');
  protected readonly file = signal<{ name: string } | null>(null);
  protected readonly error = signal<{ title: string; text: string } | null>(null);
  protected readonly rows = signal<UploadRow[]>([]);
  protected readonly skip = signal(true);
  protected readonly progress = signal(0);
  protected readonly progressText = signal('');
  protected readonly result = signal<WorkingPackage[]>([]);
  protected readonly skipped = signal(0);
  protected readonly dragOver = signal(false);
  protected readonly page = signal(1);

  protected readonly stepIndex = computed(
    () => ({ select: 0, checking: 1, review: 1, importing: 2, done: 3 })[this.stage()],
  );
  protected readonly checked = computed(() =>
    this.rows().map((r) => ({ r, errors: rowErrors(r) })),
  );
  protected readonly bad = computed(() => this.checked().filter((x) => x.errors.length).length);
  protected readonly ok = computed(() => this.rows().length - this.bad());
  protected readonly importCount = computed(() =>
    this.skip() ? this.ok() : this.bad() ? 0 : this.ok(),
  );

  protected readonly uploads = this.store.uploads;
  protected readonly pages = computed(() =>
    Math.max(1, Math.ceil(this.uploads().length / PER_PAGE)),
  );
  protected readonly pageItems = computed(() => {
    const p = Math.min(this.page(), this.pages());
    return this.uploads().slice((p - 1) * PER_PAGE, p * PER_PAGE);
  });
  protected readonly pageLabel = computed(() => {
    const p = Math.min(this.page(), this.pages());
    return `${(p - 1) * PER_PAGE + 1} – ${Math.min(p * PER_PAGE, this.uploads().length)} of ${this.uploads().length}`;
  });
  protected readonly perPage = PER_PAGE;

  protected back(): void {
    this.backNav.back();
  }
  protected tradeColor = tradeColor;
  protected fmtDate = fmtDate;

  protected stepState(i: number): 'done' | 'cur' | '' {
    const idx = this.stepIndex();
    if (i < idx || this.stage() === 'done') return 'done';
    return i === idx ? 'cur' : '';
  }

  // ---------------------------------------------------------------- select
  protected onDrop(e: DragEvent): void {
    e.preventDefault();
    this.dragOver.set(false);
    const f = e.dataTransfer?.files[0];
    if (f) this.accept(f);
  }

  protected onPick(input: HTMLInputElement): void {
    const f = input.files?.[0];
    input.value = '';
    if (f) this.accept(f);
  }

  private accept(file: File): void {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!['xlsx', 'xls', 'csv'].includes(ext)) {
      this.error.set({
        title: 'This file type is not supported',
        text: `“${file.name}” is not an Excel file. Please upload .xlsx, .xls or .csv.`,
      });
      return;
    }
    if (file.size > 10e6) {
      this.error.set({ title: 'File is too large', text: 'The maximum size is 10 MB.' });
      return;
    }
    this.error.set(null);
    this.file.set({ name: file.name });
    this.stage.set('checking');
    const finish = (rows: UploadRow[]) =>
      this.animate(
        1100,
        (p) => this.progressText.set(p < 0.4 ? 'Reading file…' : `Checking ${rows.length} rows…`),
        () => {
          if (!rows.length) {
            this.stage.set('select');
            this.error.set({
              title: 'No rows found',
              text: 'The file is empty or the header row is missing. Use the sample file as a template.',
            });
            return;
          }
          this.rows.set(rows);
          this.skip.set(true);
          this.stage.set('review');
          if (this.bad())
            this.toast.show(`${this.bad()} row${this.bad() > 1 ? 's need' : ' needs'} attention`);
        },
      );
    if (ext === 'csv') file.text().then((t) => finish(parseCsv(t)));
    else finish(simulatedRows());
  }

  // ---------------------------------------------------------------- review: fix cells in place
  protected cellError(errors: { field: UploadField }[], key: UploadField): boolean {
    return errors.some((e) => e.field === key);
  }
  protected errorText(errors: { message: string }[]): string {
    return errors.map((e) => e.message).join('\n');
  }

  /** While typing: show green when the cell itself is valid; the table re-checks when the cell is left. */
  protected cellValid(index: number, key: UploadField, value: string): boolean {
    return !rowErrors({ ...this.rows()[index], [key]: value.trim() }).some((e) => e.field === key);
  }

  protected commitCell(index: number, key: UploadField, value: string): void {
    this.rows.update((rows) =>
      rows.map((r, i) => (i === index ? { ...r, [key]: value.trim() } : r)),
    );
    // move to the next cell that still needs a fix
    setTimeout(() => {
      const next = this.host.nativeElement.querySelector<HTMLInputElement>('.cell-in');
      if (next) next.focus();
      else this.toast.show('All rows are valid now');
    });
  }

  protected reset(): void {
    this.stage.set('select');
    this.file.set(null);
    this.rows.set([]);
    this.error.set(null);
    this.skip.set(true);
  }

  protected doImport(): void {
    const good = this.rows().filter((r) => !rowErrors(r).length);
    const skipped = this.rows().length - good.length;
    const errors = this.rows()
      .map((r, i) => ({ r, i }))
      .filter(({ r }) => rowErrors(r).length)
      .map(
        ({ r, i }) =>
          `Row ${i + 2}: ${rowErrors(r)
            .map((e) => e.message)
            .join(', ')}`,
      );
    this.stage.set('importing');
    this.progressText.set('Creating working packages…');
    this.animate(900, null, () => {
      const created = this.store.importWorkingPackages(
        good.map((r) => ({
          title: r.title!,
          trade: (r.trade && r.trade in TRADES ? r.trade : 'Baumeister') as Trade,
          sender: r.sender!,
          recipient: r.recipient!,
          building: r.building!,
          floor: r.floor!,
          zone: r.zone || '',
          from: r.from!,
          to: r.to!,
          volume: r.volume || '—',
          units: 'Truck loads',
          unitsQty: 0,
        })),
        {
          name: this.file()!.name,
          by: this.store.person(this.store.currentUserId).email ?? '',
          on: this.store.today,
          rows: good.length,
          status: skipped ? 'Partly imported' : 'Succeeded',
          errors: skipped ? errors : [],
        },
      );
      this.result.set(created);
      this.skipped.set(skipped);
      this.page.set(1);
      this.stage.set('done');
      this.toast.show(`${created.length} working packages imported`);
    });
  }

  // ---------------------------------------------------------------- done
  protected openWp(w: WorkingPackage): void {
    this.router.navigate(['/group', 'wp', w.id]);
  }
  protected addShipment(e: Event, w: WorkingPackage): void {
    e.stopPropagation();
    this.createFlow.start({ wpId: w.id });
  }

  protected viewInShipments(): void {
    this.hubPrefs.update({ wpStatus: [], search: '', view: 'list' });
    this.router.navigate(['/shipments']);
  }

  // ---------------------------------------------------------------- history
  protected pill(s: UploadStatus): string {
    return (
      {
        Succeeded: 'success',
        Failed: 'error',
        Processing: 'warning',
        'Partly imported': 'warning',
      } as const
    )[s];
  }

  protected openUpload(u: UploadRecord, input: HTMLInputElement): void {
    const text =
      u.status === 'Processing'
        ? 'This file is still being processed. Large files can take a few minutes.'
        : u.errors?.length
          ? u.status === 'Failed'
            ? 'Nothing was imported because of these errors:'
            : 'These rows were skipped:'
          : `${u.rows} working packages were imported on ${fmtDate(u.on)} by ${u.by}.`;
    const failed = u.status === 'Failed';
    confirm(this.dialog, {
      title: u.name,
      text,
      items: u.status !== 'Processing' && u.errors?.length ? u.errors : undefined,
      ok: failed ? 'Upload corrected file' : 'Close',
      okIcon: failed ? 'upload' : undefined,
      cancel: failed ? 'Close' : null,
    }).subscribe((ok) => {
      if (ok && failed) {
        this.reset();
        setTimeout(() => input.click());
      }
    });
  }

  // ---------------------------------------------------------------- sample file
  protected downloadSample(): void {
    const head = [...UPLOAD_COLUMNS.map((c) => c.label), 'Volume'].join(';');
    const rows = simulatedRows()
      .slice(0, 3)
      .map((r) =>
        [
          ...UPLOAD_COLUMNS.map((c) =>
            c.key === 'from' || c.key === 'to' ? fmtDate(r[c.key]) : (r[c.key] ?? ''),
          ),
          '',
        ].join(';'),
      );
    const blob = new Blob(['﻿' + [head, ...rows].join('\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CLM_working_packages_sample.csv';
    a.click();
    this.toast.show('Sample file downloaded · fill it in and upload it here');
  }

  private animate(ms: number, onTick: ((p: number) => void) | null, done: () => void): void {
    const t0 = Date.now();
    const iv = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / ms);
      this.progress.set(p * 100);
      onTick?.(p);
      if (p >= 1) {
        clearInterval(iv);
        setTimeout(done, 150);
      }
    }, 30);
  }
}
