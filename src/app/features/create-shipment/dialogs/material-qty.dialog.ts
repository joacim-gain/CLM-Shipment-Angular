/** Quantity and details of one material (prototype: create.js → qtyModal). Returns the material, 'remove', or nothing. */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Material, ShipmentMaterial } from '../../../data/clm.model';

export interface MaterialQtyData {
  material: Material;
  current: ShipmentMaterial | null;
  pinned: boolean;
}
export type MaterialQtyResult =
  { action: 'save'; value: ShipmentMaterial; pinned: boolean } | { action: 'remove' };

@Component({
  selector: 'clm-material-qty-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  host: { class: 'clm-dlg' },
  template: `
    <div class="clm-dlg-head">
      <div class="grow">
        <h2 mat-dialog-title>{{ m.name }}</h2>
        <p class="clm-dlg-sub">Unit: {{ m.unit }} · {{ m.pack ?? '' }}</p>
      </div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-grid2" [formGroup]="form" id="qtyForm" (ngSubmit)="save()">
        <div class="clm-field">
          <label for="q-qty">Quantity *</label>
          <div class="clm-qty">
            <button type="button" aria-label="Less" (click)="step(-1)">
              <mat-icon>remove</mat-icon>
            </button>
            <input id="q-qty" type="number" min="1" formControlName="qty" cdkFocusInitial />
            <button type="button" aria-label="More" (click)="step(1)">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
        <div class="clm-field">
          <label for="q-pal">EUR pallets</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input
              matInput
              id="q-pal"
              type="number"
              min="0"
              formControlName="pallets"
              placeholder="0"
          /></mat-form-field>
        </div>
        <div class="clm-field clm-span2">
          <label for="q-l">Dimensions per unit (L × W × H, cm)</label>
          <div class="clm-row dims">
            <mat-form-field appearance="outline" subscriptSizing="dynamic"
              ><input
                matInput
                id="q-l"
                formControlName="l"
                placeholder="L"
                aria-label="Length" /></mat-form-field
            ><span class="clm-faint">×</span>
            <mat-form-field appearance="outline" subscriptSizing="dynamic"
              ><input
                matInput
                formControlName="w"
                placeholder="W"
                aria-label="Width" /></mat-form-field
            ><span class="clm-faint">×</span>
            <mat-form-field appearance="outline" subscriptSizing="dynamic"
              ><input matInput formControlName="h" placeholder="H" aria-label="Height"
            /></mat-form-field>
          </div>
        </div>
        <div class="clm-field">
          <label for="q-kg">Total weight (kg)</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input matInput id="q-kg" type="number" min="0" formControlName="weight"
          /></mat-form-field>
        </div>
        <div class="clm-field">
          <label for="q-note">Note</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input
              matInput
              id="q-note"
              formControlName="note"
              placeholder="e.g. Unload north side"
          /></mat-form-field>
        </div>
      </form>
      <mat-checkbox class="pin" [formControl]="pin">Pin as favourite material</mat-checkbox>
    </mat-dialog-content>
    <mat-dialog-actions>
      @if (data.current) {
        <button mat-button type="button" class="left clm-danger-btn" (click)="remove()">
          <mat-icon>delete</mat-icon>Remove
        </button>
      }
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button type="submit" form="qtyForm">
        {{ data.current ? 'Update' : 'Add material' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .dims mat-form-field {
      flex: 1;
    }
    .pin {
      margin-top: 10px;
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialQtyDialog {
  protected readonly data = inject<MaterialQtyData>(MAT_DIALOG_DATA);
  private readonly ref = inject<MatDialogRef<MaterialQtyDialog, MaterialQtyResult>>(MatDialogRef);
  private readonly fb = inject(NonNullableFormBuilder);
  protected readonly m = this.data.material;
  private readonly cur = this.data.current;

  protected readonly form = this.fb.group({
    qty: [
      this.cur?.qty ?? (this.m.unit === 'm³' ? 8 : 1),
      [Validators.required, Validators.min(1)],
    ],
    pallets: [this.cur?.pallets || (null as number | null)],
    l: [this.cur?.l ?? ''],
    w: [this.cur?.w ?? ''],
    h: [this.cur?.h ?? ''],
    weight: [this.cur?.weight || (null as number | null)],
    note: [this.cur?.note ?? ''],
  });
  protected readonly pin = this.fb.control(this.data.pinned);

  protected step(n: number): void {
    this.form.controls.qty.setValue(Math.max(1, (+this.form.controls.qty.value || 0) + n));
  }

  protected remove(): void {
    this.ref.close({ action: 'remove' });
  }

  protected save(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.ref.close({
      action: 'save',
      pinned: this.pin.value,
      value: {
        id: this.m.id,
        qty: +v.qty,
        unit: this.m.unit,
        pallets: +(v.pallets ?? 0) || 0,
        l: v.l,
        w: v.w,
        h: v.h,
        weight: +(v.weight ?? 0) || 0,
        note: v.note.trim(),
      },
    });
  }
}
