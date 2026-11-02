/** Cancel shipment — reason required, comment optional (prototype: details.js → cancel). */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OnSubmitErrorStateMatcher } from '../../../core/forms/on-submit-error-state-matcher';
import { CANCEL_REASONS } from '../../../data/reference-data';

export interface CancelShipmentResult {
  reason: string;
  comment: string;
}

@Component({
  selector: 'clm-cancel-shipment-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  host: { class: 'clm-dlg' },
  providers: [{ provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher }],
  template: `
    <div class="clm-dlg-head">
      <div class="grow">
        <h2 mat-dialog-title>Cancel shipment?</h2>
        <p class="clm-dlg-sub">{{ shipmentName }}</p>
      </div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-dlg-fields" [formGroup]="form" id="cxForm" (ngSubmit)="submit()">
        <p>
          The time slot and booked equipment are released. The shipment stays in the list as
          canceled.
        </p>
        <div class="clm-field">
          <span class="clm-label" id="cx-reason-l">Reason *</span>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <mat-select
              formControlName="reason"
              placeholder="Select a reason"
              aria-labelledby="cx-reason-l"
            >
              @for (r of reasons; track r) {
                <mat-option [value]="r">{{ r }}</mat-option>
              }
            </mat-select>
            <mat-error>Please select a reason</mat-error>
          </mat-form-field>
        </div>
        <div class="clm-field">
          <label for="cx-text">Comment</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <textarea
              matInput
              id="cx-text"
              formControlName="comment"
              placeholder="Optional"
            ></textarea>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button type="button" mat-dialog-close>Keep shipment</button>
      <button mat-flat-button class="clm-danger-btn" type="submit" form="cxForm">
        Cancel shipment
      </button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelShipmentDialog {
  private readonly ref =
    inject<MatDialogRef<CancelShipmentDialog, CancelShipmentResult>>(MatDialogRef);
  protected readonly shipmentName = inject<{ name: string }>(MAT_DIALOG_DATA).name;
  protected readonly reasons = CANCEL_REASONS;
  protected readonly form = inject(NonNullableFormBuilder).group({
    reason: ['', Validators.required],
    comment: [''],
  });

  protected submit(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.ref.close({ reason: v.reason, comment: v.comment.trim() });
  }
}
