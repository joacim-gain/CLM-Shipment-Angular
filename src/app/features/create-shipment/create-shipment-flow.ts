/**
 * Entry points of create / edit / duplicate shipment, and the draft being edited
 * (prototype: create.js → start, startModal, saveDraft).
 */
import { Injectable, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { mondayOf } from '../../core/date/iso-date';
import { TODAY } from '../../core/date/today';
import { Toast } from '../../core/feedback/toast.service';
import { readLocal, removeLocal, writeLocal } from '../../core/storage/local-store';
import { ClmStore } from '../../data/clm-store';
import {
  DRAFT_KEY,
  ShipmentDraft,
  blankDraft,
  fromShipment,
  withWorkingPackage,
} from './shipment-draft';
import { StartShipmentDialog, StartShipmentResult } from './start-shipment.dialog';

export interface StartOptions {
  wpId?: string;
  edit?: string;
  duplicate?: string;
}

@Injectable({ providedIn: 'root' })
export class CreateShipmentFlow {
  private readonly store = inject(ClmStore);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly toast = inject(Toast);
  private readonly today = inject(TODAY);

  /** The shipment being created or edited; null when the flow isn't open. */
  readonly draft = signal<ShipmentDraft | null>(null);

  start(o: StartOptions = {}): void {
    if (o.edit) {
      const s = this.store.shipment(o.edit);
      if (!s) return;
      const d = fromShipment(
        blankDraft(this.today, {
          mode: 'edit',
          editId: s.id,
          maxStep: 6,
          date: s.date,
          start: s.start,
          end: s.end,
          docs: [...s.docs],
          photos: [...s.photos],
          weekStart: mondayOf(s.date),
        }),
        s,
      );
      this.open(d);
      return;
    }
    if (o.duplicate) {
      const s = this.store.shipment(o.duplicate);
      if (!s) return;
      this.open({ ...fromShipment(blankDraft(this.today), s), name: s.name + ' (copy)' });
      this.toast.show(`Copied from ${s.no} · pick a new date and time slot`);
      return;
    }
    if (o.wpId) {
      const wp = this.store.wp(o.wpId);
      if (wp) this.open(withWorkingPackage(blankDraft(this.today, { wpLocked: true }), wp));
      return;
    }
    this.dialog
      .open<StartShipmentDialog, { saved: ShipmentDraft | null }, StartShipmentResult>(
        StartShipmentDialog,
        {
          width: '760px',
          maxWidth: 'calc(100vw - 48px)',
          autoFocus: false,
          data: { saved: this.savedDraft() },
        },
      )
      .afterClosed()
      .subscribe((r) => {
        if (!r) return;
        if (r.kind === 'new') this.open(blankDraft(this.today));
        if (r.kind === 'draft') this.open({ ...r.draft, dirty: true });
        if (r.kind === 'copy') {
          const s = this.store.shipment(r.shipmentId);
          if (s)
            this.open({ ...fromShipment(blankDraft(this.today), s), name: s.name + ' (copy)' });
        }
      });
  }

  /** Change the draft. User edits mark it dirty; navigation and saving pass markDirty = false. */
  update(change: Partial<ShipmentDraft>, markDirty = true): void {
    this.draft.update((d) =>
      d ? { ...d, ...change, dirty: markDirty ? true : (change.dirty ?? d.dirty) } : d,
    );
  }

  saveDraft(): void {
    const d = this.draft();
    if (!d) return;
    writeLocal(DRAFT_KEY, d);
    this.update({ dirty: false }, false);
    this.toast.show('Draft saved · you can continue later from this browser');
  }

  savedDraft(): ShipmentDraft | null {
    return readLocal<ShipmentDraft | null>(DRAFT_KEY, null);
  }
  discardSavedDraft(): void {
    removeLocal(DRAFT_KEY);
  }

  close(): void {
    this.draft.set(null);
  }

  private open(d: ShipmentDraft): void {
    this.draft.set(d);
    this.router.navigate(['/create']);
  }
}
