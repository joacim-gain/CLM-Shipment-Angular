/** Status legend — opens on hover or click (CLM Figma 33780:219175 · prototype: hub.js → legendHtml). */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const ITEMS_WP = [
  ['lg-overdue', 'Overdue'],
  ['lg-active', 'Active'],
  ['lg-pending', 'Pending'],
  ['lg-wpdone', 'Completed'],
];
const ITEMS_SHIP = [
  ['lg-open', 'Open'],
  ['lg-approved', 'Approved'],
  ['lg-completed', 'Completed'],
];

@Component({
  selector: 'clm-hub-legend',
  imports: [CdkConnectedOverlay, CdkOverlayOrigin, MatIconModule],
  template: `
    <button
      class="info-btn"
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [class.on]="open()"
      aria-label="Status legend"
      (mouseenter)="hover(true)"
      (mouseleave)="hover(false)"
      (click)="open.set(!open())"
    >
      <mat-icon>info</mat-icon>
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="open.set(false)"
      (detach)="open.set(false)"
    >
      <div
        class="legend"
        (mouseenter)="hover(true)"
        (mouseleave)="hover(false)"
        role="dialog"
        aria-label="Status legend"
      >
        <button class="lg-x" aria-label="Close" (click)="open.set(false)">
          <img src="fig/lg-close.svg" width="24" height="24" alt="" />
        </button>
        <div class="lg-sec">
          <div class="lg-h">
            <b>Working package status</b
            ><span>Shows the current stage of your active work package</span>
          </div>
          <div class="lg-row">
            @for (i of wp; track i[0]) {
              <span class="lg-item"
                ><img [src]="'fig/' + i[0] + '.svg'" width="20" height="20" alt="" />{{
                  i[1]
                }}</span
              >
            }
          </div>
        </div>
        <div class="lg-sec">
          <div class="lg-h">
            <b>Shipment Status</b><span>Shows the current stage of your shipments</span>
          </div>
          <div class="lg-row">
            @for (i of ship; track i[0]) {
              <span class="lg-item"
                ><img [src]="'fig/' + i[0] + '.svg'" width="20" height="20" alt="" />{{
                  i[1]
                }}</span
              >
            }
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: `
    .info-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: var(--color-icon-default);
      border: 0;
      background: none;
      cursor: pointer;
      padding: 0;
    }
    .info-btn:hover,
    .info-btn.on {
      background: var(--color-surface-selected);
      color: var(--color-olive-600);
    }
    .legend {
      position: relative;
      background: #fff;
      border-radius: var(--radius-large);
      box-shadow: var(--elevation-topbar);
      padding: 24px 24px 32px 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .lg-x {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 0;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    .lg-x:hover {
      background: var(--color-surface-subtle);
    }
    .lg-sec {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-right: 40px;
    }
    .lg-h {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: var(--color-raisin-500);
    }
    .lg-h b {
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      letter-spacing: 0.1px;
    }
    .lg-h span {
      font-size: 12px;
      line-height: 1.44;
      letter-spacing: 0.4px;
    }
    .lg-row {
      display: flex;
      gap: 32px;
      padding: 0 8px;
    }
    .lg-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0;
      color: #474752;
      white-space: nowrap;
    }
    .lg-item img {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubLegend {
  protected readonly open = signal(false);
  protected readonly wp = ITEMS_WP;
  protected readonly ship = ITEMS_SHIP;
  protected readonly positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -4 },
  ];
  private hoverTimer?: ReturnType<typeof setTimeout>;

  /** Opens after a short hover; closes when the pointer leaves both the button and the legend. */
  protected hover(inside: boolean): void {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = setTimeout(() => this.open.set(inside), inside ? 120 : 200);
  }
}
