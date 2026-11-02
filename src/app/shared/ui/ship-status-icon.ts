/** Coloured status icon used in lists and the timeline (prototype: HUB_legendShipIcon). */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShipmentStatus } from '../../data/clm.model';
import { SHIPMENT_STATUS } from '../../data/reference-data';

@Component({
  selector: 'clm-ship-icon',
  imports: [MatIconModule, MatTooltipModule],
  template: `<mat-icon
    [svgIcon]="'clm:' + meta().icon"
    [style.width.px]="size()"
    [style.height.px]="size()"
    [matTooltip]="'Shipment: ' + meta().label"
  />`,
  host: { '[style.color]': 'meta().color' },
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipStatusIcon {
  readonly status = input.required<ShipmentStatus>();
  readonly size = input(18);
  protected readonly meta = computed(() => SHIPMENT_STATUS[this.status()] ?? SHIPMENT_STATUS.Open);
}
