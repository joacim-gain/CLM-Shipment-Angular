/** Opens the create / edit working package dialog and applies the result (prototype: views/wp.js → open / submit). */
import { Injectable, Injector, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TODAY } from '../../core/date/today';
import { Toast } from '../../core/feedback/toast.service';
import { WorkingPackage } from '../../data/clm.model';
import { ClmStore } from '../../data/clm-store';
import { CreateShipmentFlow } from '../create-shipment/create-shipment-flow';
import {
  WorkingPackageFormData,
  WorkingPackageFormDialog,
  WorkingPackageFormResult,
} from './working-package-form.dialog';

@Injectable({ providedIn: 'root' })
export class WorkingPackageDialogs {
  private readonly dialog = inject(MatDialog);
  private readonly store = inject(ClmStore);
  private readonly router = inject(Router);
  private readonly toast = inject(Toast);
  private readonly today = inject(TODAY);
  private readonly injector = inject(Injector);

  open(wp?: WorkingPackage): void {
    this.dialog
      .open<WorkingPackageFormDialog, WorkingPackageFormData, WorkingPackageFormResult>(
        WorkingPackageFormDialog,
        {
          width: '760px',
          maxWidth: 'calc(100vw - 48px)',
          disableClose: true,
          autoFocus: 'first-tabbable',
          data: { wp, today: this.today },
        },
      )
      .afterClosed()
      .subscribe((r) => {
        if (!r) return;
        if (r.action === 'upload') {
          this.router.navigate(['/upload']);
          return;
        }
        if (wp) {
          this.store.updateWorkingPackage(wp.id, r.value);
          this.toast.show('Working package saved');
          return;
        }
        const created = this.store.addWorkingPackage(r.value);
        this.router.navigate(['/group', 'wp', created.id]);
        this.toast.show(`Working package “${created.title}” created`, {
          action: 'Add shipment',
          duration: 7000,
          // resolved lazily: create shipment can also open this dialog
          onAction: () => this.injector.get(CreateShipmentFlow).start({ wpId: created.id }),
        });
      });
  }
}
