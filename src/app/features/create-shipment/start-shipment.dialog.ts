/**
 * "How would you like to start?" — CLM Figma 38218:8917 (prototype: create.js → startModal).
 * No templates: every option is copied from shipment history.
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmDatePipe } from '../../core/date/clm-date.pipe';
import { Shipment } from '../../data/clm.model';
import { ClmStore } from '../../data/clm-store';
import { InitialsPipe } from '../../shared/pipes/initials.pipe';
import { CheckChip } from '../../shared/ui/check-chip';
import { removeLocal } from '../../core/storage/local-store';
import { DRAFT_KEY, STEPS, ShipmentDraft } from './shipment-draft';

export type StartShipmentResult =
  { kind: 'new' } | { kind: 'draft'; draft: ShipmentDraft } | { kind: 'copy'; shipmentId: string };
type Source = 'freq' | 'mine' | 'team';

@Component({
  selector: 'clm-start-shipment-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ClmDatePipe,
    InitialsPipe,
    CheckChip,
  ],
  templateUrl: './start-shipment.dialog.html',
  styleUrl: './start-shipment.dialog.scss',
  host: { class: 'clm-dlg' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartShipmentDialog {
  private readonly ref =
    inject<MatDialogRef<StartShipmentDialog, StartShipmentResult>>(MatDialogRef);
  private readonly store = inject(ClmStore);
  protected readonly saved = signal(inject<{ saved: ShipmentDraft | null }>(MAT_DIALOG_DATA).saved);
  protected readonly steps = STEPS;
  protected readonly source = signal<Source>('freq');
  protected readonly all = signal(false);

  protected readonly sources = computed<Record<Source, { label: string; list: Shipment[] }>>(() => {
    const ships = this.store.shipments();
    const me = this.store.currentUserId;
    const byNew = (a: Shipment, b: Shipment) => b.created.localeCompare(a.created);
    const count: Record<string, number> = {};
    ships.forEach((s) => {
      count[s.name] = (count[s.name] || 0) + 1;
    });
    return {
      freq: {
        label: 'Frequently used',
        list: unique([...ships].sort((a, b) => count[b.name] - count[a.name] || byNew(a, b))),
      },
      mine: {
        label: 'From your shipments',
        list: unique(ships.filter((s) => s.createdBy === me).sort(byNew)),
      },
      team: {
        label: 'From your team mates',
        list: unique(ships.filter((s) => s.createdBy !== me).sort(byNew)),
      },
    };
  });
  protected readonly sourceKeys: Source[] = ['freq', 'mine', 'team'];
  protected readonly current = computed(() => this.sources()[this.source()]);
  protected readonly cards = computed(() => this.current().list.slice(0, this.all() ? 12 : 3));
  protected readonly seeAllLabel = computed(
    () =>
      'See all ' +
      this.current()
        .label.toLowerCase()
        .replace(/^from /, ''),
  );

  protected person(id: string) {
    return this.store.person(id);
  }

  protected pick(source: Source): void {
    this.source.set(source);
    this.all.set(false);
  }
  protected startNew(): void {
    this.ref.close({ kind: 'new' });
  }
  protected copy(s: Shipment): void {
    this.ref.close({ kind: 'copy', shipmentId: s.id });
  }
  protected continueDraft(d: ShipmentDraft): void {
    this.ref.close({ kind: 'draft', draft: d });
  }
  protected discardDraft(): void {
    removeLocal(DRAFT_KEY);
    this.saved.set(null);
  }
}

/** One card per shipment name */
function unique(list: Shipment[]): Shipment[] {
  const seen = new Set<string>();
  return list.filter((s) => !seen.has(s.name) && !!seen.add(s.name));
}
