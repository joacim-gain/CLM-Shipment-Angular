/** Asks before leaving create / edit shipment with unsaved changes (prototype: create.js → leave). */
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { map } from 'rxjs';
import { confirm } from '../../shared/dialogs/confirm.dialog';
import { CreateShipmentFlow } from './create-shipment-flow';

export const leaveCreateGuard: CanDeactivateFn<unknown> = () => {
  const flow = inject(CreateShipmentFlow);
  const d = flow.draft();
  if (!d || !d.dirty) {
    flow.close();
    return true;
  }
  return confirm(inject(MatDialog), {
    title: 'Discard changes?',
    ok: 'Discard',
    danger: true,
    text:
      d.mode === 'edit'
        ? 'Your changes to this shipment will be lost.'
        : 'This shipment hasn’t been created yet. Everything you entered will be lost.',
  }).pipe(
    map((ok) => {
      if (ok) flow.close();
      return ok;
    }),
  );
};
