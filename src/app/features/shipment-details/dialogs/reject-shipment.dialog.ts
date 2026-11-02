/** Reject shipment — reason is required (prototype: details.js → setStatus('Rejected')). Returns the reason. */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OnSubmitErrorStateMatcher } from '../../../core/forms/on-submit-error-state-matcher';

@Component({
  selector: 'clm-reject-shipment-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  host: { class: 'clm-dlg' },
  providers: [{ provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher }],
  template: `
    <div class="clm-dlg-head">
      <div class="grow"><h2 mat-dialog-title>Reject shipment?</h2></div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <p style="margin-bottom:12px">The sender is notified and the time slot is released.</p>
      <form class="clm-field" id="rjForm" [formGroup]="form" (ngSubmit)="submit()">
        <label for="rj-reason">Reason *</label>
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <textarea
            matInput
            id="rj-reason"
            formControlName="reason"
            placeholder="e.g. Unloading point closed on this day"
            cdkFocusInitial
          ></textarea>
          <mat-error>Please give a reason</mat-error>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button class="clm-danger-btn" type="submit" form="rjForm">Reject</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RejectShipmentDialog {
  private readonly ref = inject<MatDialogRef<RejectShipmentDialog, string>>(MatDialogRef);
  protected readonly form = inject(NonNullableFormBuilder).group({
    reason: ['', [Validators.required, Validators.pattern(/\S/)]],
  });

  protected submit(): void {
    if (this.form.invalid) return;
    this.ref.close(this.form.getRawValue().reason.trim());
  }
}
