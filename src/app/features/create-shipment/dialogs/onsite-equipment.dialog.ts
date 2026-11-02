/** How on-site (non-bookable) equipment will be used (prototype: create.js → bind4 [data-eqo]). */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Equipment, ShipmentEquipment } from '../../../data/clm.model';

export interface OnsiteData {
  equipment: Equipment;
  current: ShipmentEquipment | null;
  slot: string;
}
export type OnsiteResult = { action: 'save'; pulls: number; ton: string } | { action: 'remove' };

@Component({
  selector: 'clm-onsite-equipment-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  host: { class: 'clm-dlg' },
  template: `
    <div class="clm-dlg-head">
      <div class="grow">
        <h2 mat-dialog-title>{{ data.equipment.name }}</h2>
        <p class="clm-dlg-sub">How will you use it?</p>
      </div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-grid2" [formGroup]="form" id="eqForm" (ngSubmit)="save()">
        <div class="clm-field">
          <label for="eq-pulls">Number of pulls / lifts *</label>
          <div class="clm-qty">
            <button type="button" aria-label="Fewer" (click)="step(-1)">
              <mat-icon>remove</mat-icon>
            </button>
            <input id="eq-pulls" type="number" min="1" formControlName="pulls" cdkFocusInitial />
            <button type="button" aria-label="More" (click)="step(1)">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
        <div class="clm-field">
          <label for="eq-ton">Max. load (t)</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input
              matInput
              id="eq-ton"
              type="number"
              min="0"
              step=".5"
              formControlName="ton"
              placeholder="e.g. 2"
          /></mat-form-field>
        </div>
      </form>
      <p class="clm-cap note">Used during your time slot {{ data.slot }}.</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      @if (data.current) {
        <button mat-button type="button" class="left clm-danger-btn" (click)="remove()">
          <mat-icon>delete</mat-icon>Remove
        </button>
      }
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button type="submit" form="eqForm">
        {{ data.current ? 'Update' : 'Add' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .note {
      margin-top: 10px !important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnsiteEquipmentDialog {
  protected readonly data = inject<OnsiteData>(MAT_DIALOG_DATA);
  private readonly ref = inject<MatDialogRef<OnsiteEquipmentDialog, OnsiteResult>>(MatDialogRef);
  protected readonly form = inject(NonNullableFormBuilder).group({
    pulls: [this.data.current?.pulls ?? 1],
    ton: [this.data.current?.ton ?? ''],
  });

  protected step(n: number): void {
    this.form.controls.pulls.setValue(Math.max(1, (+this.form.controls.pulls.value || 1) + n));
  }
  protected remove(): void {
    this.ref.close({ action: 'remove' });
  }
  protected save(): void {
    const v = this.form.getRawValue();
    this.ref.close({ action: 'save', pulls: Math.max(1, +v.pulls || 1), ton: String(v.ton ?? '') });
  }
}
