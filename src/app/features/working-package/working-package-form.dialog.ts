/**
 * Create / edit working package dialog.
 * Ported from the CLM prototype: clm-shipments-demo/assets/js/views/wp.js
 *
 * Covers the UI and the front-end validation. Saving, navigation and the success toast
 * stay with the caller (WorkingPackageDialogs.open).
 */
import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormGroupDirective,
  NgForm,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ClmCalendarHeader } from '../../core/date/clm-calendar-header';
import { OnSubmitErrorStateMatcher } from '../../core/forms/on-submit-error-state-matcher';
import { Trade, WorkingPackage, WorkingPackageDraft } from '../../data/clm.model';
import {
  BUILDINGS,
  DATE_MAX,
  DATE_MIN,
  FLOORS,
  ORGS,
  TRADE_NAMES,
  TRANSPORT_UNITS,
  ZONES,
} from '../../data/reference-data';

/** Defaults the prototype applies when optional fields are left empty (views/wp.js → submit). */
const WP_DEFAULTS = { trade: 'Baumeister' as Trade, sender: 'Team pRED', volume: '—' };

export interface WorkingPackageFormData {
  /** Pass a working package to edit it; omit to create a new one. */
  wp?: WorkingPackage;
  /** "Today" as yyyy-MM-dd. A new package starts tomorrow, as in the prototype. */
  today: string;
}

export type WorkingPackageFormResult =
  | { action: 'save'; value: WorkingPackageDraft }
  /** User chose "Upload Excel instead"; the caller navigates to the upload flow. */
  | { action: 'upload' };

/** "Date to" must not be before "Date from" (prototype: “Date to” must be after “Date from”). */
const dateOrder: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const from = group.get('from')?.value as Date | null;
  const to = group.get('to')?.value as Date | null;
  return from && to && to < from ? { dateOrder: true } : null;
};

/** Shows the "Date to" field in its error state for the group-level dateOrder error too (after submit). */
class DateToErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!form?.submitted && (!!control?.invalid || !!form.form.hasError('dateOrder'));
  }
}

@Component({
  selector: 'clm-working-package-form-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  templateUrl: './working-package-form.dialog.html',
  styleUrl: './working-package-form.dialog.scss',
  // Errors appear after "Create" is clicked, as in the prototype
  providers: [{ provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkingPackageFormDialog {
  private readonly data = inject<WorkingPackageFormData>(MAT_DIALOG_DATA);
  private readonly dialogRef =
    inject<MatDialogRef<WorkingPackageFormDialog, WorkingPackageFormResult>>(MatDialogRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly isEdit = !!this.data.wp;
  protected readonly subtitle =
    this.data.wp?.title ?? 'Group shipments that belong to the same delivery scope.';
  protected readonly options = {
    TRADES: TRADE_NAMES,
    ORGS,
    BUILDINGS,
    FLOORS,
    ZONES,
    TRANSPORT_UNITS,
  };
  protected readonly minDate = parseIso(DATE_MIN);
  protected readonly maxDate = parseIso(DATE_MAX);
  protected readonly dateToMatcher = new DateToErrorMatcher();
  protected readonly calendarHeader = ClmCalendarHeader;

  private readonly wp = this.data.wp;

  protected readonly form = this.fb.group(
    {
      title: [this.wp?.title ?? '', [Validators.required, Validators.maxLength(80), notBlank]],
      trade: [(this.wp?.trade ?? '') as Trade | ''],
      sender: [this.wp?.sender ?? WP_DEFAULTS.sender, Validators.required],
      recipient: [this.wp?.recipient ?? '', Validators.required],
      volume: [this.wp && this.wp.volume !== WP_DEFAULTS.volume ? this.wp.volume : ''],
      building: [this.wp?.building ?? '', Validators.required],
      floor: [this.wp?.floor ?? '', Validators.required],
      zone: [this.wp?.zone ?? ''],
      from: this.fb.control<Date | null>(
        this.wp ? parseIso(this.wp.from) : addDays(parseIso(this.data.today), 1),
        Validators.required,
      ),
      to: this.fb.control<Date | null>(this.wp ? parseIso(this.wp.to) : null, Validators.required),
      unitsQty: this.fb.control<number | null>(this.wp?.unitsQty || null, Validators.min(0)),
      units: [this.wp?.units ?? ''],
    },
    { validators: dateOrder },
  );

  protected uploadInstead(): void {
    this.dialogRef.close({ action: 'upload' });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      // Prototype behaviour: focus the first field with an error.
      queueMicrotask(() =>
        this.host.nativeElement.querySelector<HTMLElement>('.ng-invalid[formControlName]')?.focus(),
      );
      return;
    }
    const v = this.form.getRawValue();
    this.dialogRef.close({
      action: 'save',
      value: {
        title: v.title.trim(),
        trade: v.trade || WP_DEFAULTS.trade,
        sender: v.sender,
        recipient: v.recipient,
        building: v.building,
        floor: v.floor,
        zone: v.zone,
        from: toIso(v.from!),
        to: toIso(v.to!),
        volume: v.volume.trim() || WP_DEFAULTS.volume,
        units: v.units,
        unitsQty: v.unitsQty ?? 0,
      },
    });
  }
}

function notBlank(c: AbstractControl): ValidationErrors | null {
  return typeof c.value === 'string' && c.value.length && !c.value.trim()
    ? { required: true }
    : null;
}
function parseIso(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function addDays(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}
function toIso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
