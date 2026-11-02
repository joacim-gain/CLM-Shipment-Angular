/**
 * Show field errors only after the user tries to submit (prototype behaviour: the red state appears
 * when you click Create / Save, not when you tab out of an empty field). Material's default shows
 * them as soon as a field is touched.
 * Add to a form component: providers: [{ provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher }]
 */
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable()
export class OnSubmitErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!control?.invalid && !!form?.submitted;
  }
}
