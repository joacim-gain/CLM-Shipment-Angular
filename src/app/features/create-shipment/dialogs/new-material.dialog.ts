/** Add a material that isn't in the list yet (prototype: create.js → newMaterial). */
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
import { Material } from '../../../data/clm.model';
import { MATERIAL_UNITS } from '../../../data/reference-data';

@Component({
  selector: 'clm-new-material-dialog',
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
      <div class="grow"><h2 mat-dialog-title>Add new material</h2></div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-dlg-fields" [formGroup]="form" id="nmForm" (ngSubmit)="save()">
        <div class="clm-field">
          <label for="nm-name">Name *</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <input matInput id="nm-name" formControlName="name" cdkFocusInitial />
            <mat-error>Name is required</mat-error>
          </mat-form-field>
        </div>
        <div class="clm-grid2">
          <div class="clm-field">
            <span class="clm-label" id="nm-unit">Unit *</span>
            <mat-form-field appearance="outline" subscriptSizing="dynamic">
              <mat-select formControlName="unit" aria-labelledby="nm-unit">
                @for (u of units; track u) {
                  <mat-option [value]="u">{{ u }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
          </div>
          <div class="clm-field">
            <span class="clm-label" id="nm-group">Type</span>
            <mat-form-field appearance="outline" subscriptSizing="dynamic">
              <mat-select formControlName="group" aria-labelledby="nm-group"
                ><mat-option value="Pallets">Pallets</mat-option
                ><mat-option value="Bulk">Bulk</mat-option></mat-select
              >
            </mat-form-field>
          </div>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button type="submit" form="nmForm">Add</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMaterialDialog {
  private readonly ref =
    inject<MatDialogRef<NewMaterialDialog, Omit<Material, 'id'>>>(MatDialogRef);
  protected readonly units = MATERIAL_UNITS;
  protected readonly form = inject(NonNullableFormBuilder).group({
    name: [
      inject<{ name: string }>(MAT_DIALOG_DATA).name,
      [Validators.required, Validators.pattern(/\S/)],
    ],
    unit: ['pcs'],
    group: ['Pallets' as 'Pallets' | 'Bulk'],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.ref.close({ name: v.name.trim(), unit: v.unit, group: v.group, pack: v.group });
  }
}
