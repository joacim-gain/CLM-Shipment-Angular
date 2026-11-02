/**
 * Right-hand details panel with the status button and the Manage menu.
 * Prototype: details.js → panelHtml, statusMenu · app.css → .rpanel, .status-btn, .status-menu
 */
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { fmtDate } from '../../../core/date/iso-date';
import { Shipment, ShipmentStatus } from '../../../data/clm.model';
import {
  SHIPMENT_STATUS,
  STATUS_MENU,
  isLocked,
  needsDarkText,
} from '../../../data/reference-data';
import { ClmStore } from '../../../data/clm-store';
import { ShipmentActions } from '../shipment-actions';

@Component({
  selector: 'clm-details-panel',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './details-panel.html',
  styleUrl: './details-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPanel {
  readonly shipment = input.required<Shipment>();

  protected readonly data = inject(ClmStore);
  protected readonly actions = inject(ShipmentActions);

  protected readonly status = computed(() => SHIPMENT_STATUS[this.shipment().status]);
  protected readonly darkText = computed(() => needsDarkText(this.status().color));
  protected readonly statusMenu = STATUS_MENU;
  protected readonly next = computed(() => this.actions.nextStatuses(this.shipment()));
  protected readonly locked = computed(() => isLocked(this.shipment().status));
  protected readonly wp = computed(() => this.data.wp(this.shipment().wpId));

  protected readonly info = computed(() => {
    const s = this.shipment();
    const v = this.data.vehicle(s.vehicle);
    const n = s.vehicles || 1;
    return {
      date: fmtDate(s.date),
      vehicle: `${v.name} · ${n} vehicle${n > 1 ? 's' : ''}`,
      unloading: `${s.up} · ${s.start} – ${s.end}`,
    };
  });

  protected readonly onsite = computed(() =>
    this.shipment()
      .equipment.filter((e) => e.kind === 'onsite')
      .map((e) => ({ ...e, name: this.data.equipment(e.id).name, pulls: e.pulls || 1 })),
  );
  protected readonly booked = computed(() =>
    this.shipment()
      .equipment.filter((e) => e.kind === 'booked')
      .map((e) => {
        const q = this.data.equipment(e.id);
        return { ...e, name: q.name, slot: q.slot || 20 };
      }),
  );
  protected readonly materials = computed(() =>
    this.shipment().materials.map((m) => {
      const ref = this.data.material(m.id);
      return { name: ref.name, qty: `${m.qty} ${m.unit || ref.unit}` };
    }),
  );
  protected readonly contacts = computed(() => {
    const s = this.shipment();
    return (
      [
        ['Creator', s.createdBy],
        ['Onsite', s.onsite],
        ['Order responsible', s.orderResp],
        ['Delivery responsible', s.deliveryResp],
      ] as const
    )
      .filter(([, id]) => !!id)
      .map(([role, id]) => ({ role, person: this.data.person(id) }));
  });

  protected isNegative(n: ShipmentStatus): boolean {
    return n === 'Canceled' || n === 'Rejected';
  }
}
