/** Add annotation — type chips, title required (prototype: details.js → addAnnotation). */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OnSubmitErrorStateMatcher } from '../../../core/forms/on-submit-error-state-matcher';
import { AnnotationType, ShipmentAnnotation } from '../../../data/clm.model';

export type AnnotationDraft = Pick<ShipmentAnnotation, 'type' | 'title' | 'text'>;

@Component({
  selector: 'clm-annotation-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  host: { class: 'clm-dlg' },
  providers: [{ provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher }],
  template: `
    <div class="clm-dlg-head">
      <div class="grow"><h2 mat-dialog-title>Add annotation</h2></div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-dlg-fields" [formGroup]="form" id="annForm" (ngSubmit)="submit()">
        <div class="clm-field">
          <span class="clm-label" id="ann-type-l">Type</span>
          <mat-chip-listbox
            formControlName="type"
            [hideSingleSelectionIndicator]="true"
            aria-labelledby="ann-type-l"
          >
            @for (t of types; track t) {
              <mat-chip-option [value]="t" [selectable]="form.controls.type.value !== t">{{
                t
              }}</mat-chip-option>
            }
          </mat-chip-listbox>
        </div>
        <div class="clm-field">
          <label for="ann-title">Title *</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <input
              matInput
              id="ann-title"
              formControlName="title"
              placeholder="e.g. Pallet 3 damaged on arrival"
              cdkFocusInitial
            />
            <mat-error>Please add a title</mat-error>
          </mat-form-field>
        </div>
        <div class="clm-field">
          <label for="ann-text">Description</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <textarea
              matInput
              id="ann-text"
              formControlName="text"
              maxlength="500"
              placeholder="What happened?"
            ></textarea>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button type="submit" form="annForm">Add annotation</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnotationDialog {
  private readonly ref = inject<MatDialogRef<AnnotationDialog, AnnotationDraft>>(MatDialogRef);
  protected readonly types: AnnotationType[] = ['Note', 'Damage', 'Delay'];
  protected readonly form = inject(NonNullableFormBuilder).group({
    type: ['Note' as AnnotationType],
    title: ['', [Validators.required, Validators.pattern(/\S/)]],
    text: [''],
  });

  protected submit(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.ref.close({ type: v.type, title: v.title.trim(), text: v.text.trim() });
  }
}
