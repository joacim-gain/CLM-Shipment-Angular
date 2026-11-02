/** Working-package status pill and icon (prototype: UI.wpPill / UI.wpIcon). */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WpStatus } from '../../data/clm.model';
import { WP_STATUS } from '../../data/reference-data';

@Component({
  selector: 'clm-wp-pill',
  template: `{{ label[status()].label }}`,
  host: { '[class]': '"wp-" + status()' },
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 10px;
      line-height: 12px;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    :host(.wp-overdue) {
      background: #fbedeb;
      color: #8a1500;
    }
    :host(.wp-active) {
      background: #e6f4ec;
      color: #1e5a3a;
    }
    :host(.wp-pending) {
      background: #f2f2f2;
      color: #474752;
    }
    :host(.wp-completed) {
      background: rgba(46, 96, 170, 0.2);
      color: #1e3f8a;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WpStatusPill {
  readonly status = input.required<WpStatus>();
  protected readonly label = WP_STATUS;
}

@Component({
  selector: 'clm-wp-icon',
  imports: [MatIconModule, MatTooltipModule],
  template: `<mat-icon
    [svgIcon]="'clm:' + meta[status()].icon"
    [style.width.px]="size()"
    [style.height.px]="size()"
    [matTooltip]="'Working package: ' + meta[status()].label"
  />`,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WpStatusIcon {
  readonly status = input.required<WpStatus>();
  readonly size = input(16);
  protected readonly meta = WP_STATUS;
}
