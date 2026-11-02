/** Add a new person (prototype: create.js → addPerson). */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OnSubmitErrorStateMatcher } from '../../../core/forms/on-submit-error-state-matcher';
import { Person } from '../../../data/clm.model';
import { ORGS } from '../../../data/reference-data';

@Component({
  selector: 'clm-add-person-dialog',
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
      <div class="grow"><h2 mat-dialog-title>Add new person</h2></div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <form class="clm-grid2" [formGroup]="form" id="npForm" (ngSubmit)="save()">
        <div class="clm-field clm-span2">
          <label for="np-name">Full name *</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input matInput id="np-name" formControlName="name" cdkFocusInitial /><mat-error
              >Name is required</mat-error
            ></mat-form-field
          >
        </div>
        <div class="clm-field">
          <span class="clm-label" id="np-org">Organization *</span>
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <mat-select formControlName="org" aria-labelledby="np-org">
              @for (o of orgs; track o) {
                <mat-option [value]="o">{{ o }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>
        <div class="clm-field">
          <label for="np-phone">Phone</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input matInput id="np-phone" formControlName="phone" placeholder="+41 …"
          /></mat-form-field>
        </div>
        <div class="clm-field clm-span2">
          <label for="np-mail">Email</label>
          <mat-form-field appearance="outline" subscriptSizing="dynamic"
            ><input
              matInput
              id="np-mail"
              type="email"
              formControlName="email"
              placeholder="name@company.com"
          /></mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button type="button" mat-dialog-close>Cancel</button>
      <button mat-flat-button type="submit" form="npForm">Add person</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPersonDialog {
  private readonly ref = inject<MatDialogRef<AddPersonDialog, Omit<Person, 'id'>>>(MatDialogRef);
  protected readonly orgs = ORGS;
  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.pattern(/\S/)]],
    org: [ORGS[0]],
    phone: [''],
    email: [''],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.ref.close({ name: v.name.trim(), org: v.org, phone: v.phone, email: v.email });
  }
}
