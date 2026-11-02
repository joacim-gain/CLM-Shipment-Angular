/**
 * User flows around a shipment: status change with confirmations, cancel, and the Undo snackbars.
 * Ported from the prototype: views/details.js → statusMenu, setStatus, cancel.
 */
import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Toast } from '../../core/feedback/toast.service';
import { Shipment, ShipmentStatus } from '../../data/clm.model';
import { STATUS_FLOW, isLocked } from '../../data/reference-data';
import { CreateShipmentFlow } from '../create-shipment/create-shipment-flow';
import { ClmStore } from '../../data/clm-store';
import { CancelShipmentDialog, CancelShipmentResult } from './dialogs/cancel-shipment.dialog';
import { ConfirmData, ConfirmDialog } from '../../shared/dialogs/confirm.dialog';
import { RejectShipmentDialog } from './dialogs/reject-shipment.dialog';

const DIALOG = {
  width: '440px',
  maxWidth: 'calc(100vw - 48px)',
  autoFocus: 'first-tabbable' as const,
};

@Injectable({ providedIn: 'root' })
export class ShipmentActions {
  private readonly data = inject(ClmStore);
  private readonly dialog = inject(MatDialog);
  private readonly toast = inject(Toast);
  private readonly createFlow = inject(CreateShipmentFlow);

  /** Next statuses offered in the status menu. "Cancel shipment" is added while the shipment is still active. */
  nextStatuses(s: Shipment): ShipmentStatus[] {
    const next = [...STATUS_FLOW[s.status]];
    if (!['Completed', 'Canceled', 'Rejected'].includes(s.status)) next.push('Canceled');
    return next;
  }

  changeStatus(s: Shipment, next: ShipmentStatus): void {
    if (next === 'Canceled') {
      this.cancel(s);
      return;
    }
    if (next === 'Rejected') {
      this.dialog
        .open(RejectShipmentDialog, DIALOG)
        .afterClosed()
        .subscribe((reason) => {
          if (reason) this.applyStatus(s, next, reason);
        });
      return;
    }
    const booked = s.equipment.filter((e) => e.kind === 'booked' && e.state !== 'approved');
    if (next === 'Approved' && booked.length) {
      const data: ConfirmData = {
        title: 'Approve shipment?',
        text: 'The booked special equipment is approved too:',
        ok: 'Approve',
        items: booked.map((e) => `${this.data.equipment(e.id).name} · ${e.start} – ${e.end}`),
      };
      this.dialog
        .open(ConfirmDialog, { ...DIALOG, data })
        .afterClosed()
        .subscribe((ok) => {
          if (ok) this.applyStatus(s, next);
        });
      return;
    }
    this.applyStatus(s, next);
  }

  cancel(s: Shipment): void {
    if (isLocked(s.status)) return;
    this.dialog
      .open<CancelShipmentDialog, { name: string }, CancelShipmentResult>(CancelShipmentDialog, {
        ...DIALOG,
        data: { name: s.name },
      })
      .afterClosed()
      .subscribe((r) => {
        if (!r) return;
        const prev = s.status;
        this.data.cancel(s.id, r.reason, r.comment);
        this.undoable('Shipment canceled', () => this.data.restoreStatus(s.id, prev));
      });
  }

  edit(s: Shipment): void {
    this.createFlow.start({ edit: s.id });
  }
  duplicate(s: Shipment): void {
    this.createFlow.start({ duplicate: s.id });
  }

  print(): void {
    this.toast.show('Opening print preview…', { duration: 2000 });
    setTimeout(() => window.print(), 300);
  }

  /** Snackbar with an Undo action (prototype: UI.toast with action 'Undo'). */
  undoable(message: string, undo: () => void): void {
    this.toast.undoable(message, undo);
  }

  private applyStatus(s: Shipment, next: ShipmentStatus, reason?: string): void {
    const prev = s.status;
    this.data.setStatus(s.id, next, reason);
    this.undoable(`Status changed to ${next}`, () => this.data.restoreStatus(s.id, prev));
  }
}
