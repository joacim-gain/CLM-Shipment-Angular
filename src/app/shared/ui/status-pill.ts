/** Shipment status pill (prototype: UI.shipPill). A read-only label, so a plain component rather than mat-chip. */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShipmentStatus } from '../../data/clm.model';
import { SHIPMENT_STATUS } from '../../data/reference-data';

@Component({
  selector: 'clm-status-pill',
  imports: [MatIconModule],
  template: `<mat-icon [svgIcon]="'clm:' + meta().icon" />{{ meta().label }}`,
  host: { '[style.background]': 'meta().bg', '[style.color]': 'meta().fg' },
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px 4px 8px;
      border-radius: 999px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    mat-icon {
      width: 14px;
      height: 14px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusPill {
  readonly status = input.required<ShipmentStatus>();
  protected readonly meta = computed(() => SHIPMENT_STATUS[this.status()] ?? SHIPMENT_STATUS.Open);
}
