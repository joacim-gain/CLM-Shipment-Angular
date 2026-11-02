/** Properties panel: time period, completed items, visible columns (prototype: hub.js → renderPanel). */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Toast } from '../../core/feedback/toast.service';
import { GROUP_LABEL } from './hub-groups';
import { HubColumns, HubPrefs, Period } from './hub-prefs';

@Component({
  selector: 'clm-hub-properties',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  template: `
    @let p = prefs();
    <div class="sp-h">
      <h3>Properties</h3>
      <button mat-icon-button matTooltip="Close" aria-label="Close" (click)="close()">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <div class="sp-b">
      <div class="clm-field">
        <span class="clm-label" id="pp-period">Time period</span>
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-select
            [value]="p.period"
            [disabled]="p.view !== 'timeline'"
            (selectionChange)="setPeriod($event.value)"
            aria-labelledby="pp-period"
          >
            <mat-option [value]="4">4 Weeks</mat-option>
            <mat-option [value]="52">1 Year</mat-option>
          </mat-select>
        </mat-form-field>
        @if (p.view !== 'timeline') {
          <span class="clm-hint">Applies to the timeline view</span>
        }
      </div>
      <div class="box">
        <mat-slide-toggle
          [checked]="p.showCompleted"
          [hideIcon]="true"
          (change)="setCompleted($event.checked)"
          >Completed</mat-slide-toggle
        >
        <div class="clm-cap">Show completed working packages and shipments</div>
      </div>
      <div class="clm-field">
        <span class="clm-label">Visible columns</span>
        <div class="acc">
          <button
            class="acc-h"
            (click)="columnsOpen.set(!columnsOpen())"
            [attr.aria-expanded]="columnsOpen()"
          >
            Columns<mat-icon>{{ columnsOpen() ? 'expand_less' : 'expand_more' }}</mat-icon>
          </button>
          @if (columnsOpen()) {
            <div class="acc-b">
              <mat-checkbox [checked]="true" [disabled]="true" matTooltip="Always visible">{{
                groupLabel[p.groupBy]
              }}</mat-checkbox>
              @for (c of columns; track c.key) {
                <mat-checkbox
                  [checked]="p.columns[c.key]"
                  (change)="setColumn(c.key, $event.checked)"
                  >{{ c.label }}</mat-checkbox
                >
              }
            </div>
          }
        </div>
      </div>
      <button mat-button class="reset" (click)="resetDefaults()">
        <mat-icon>restart_alt</mat-icon>Reset to default
      </button>
    </div>
  `,
  styles: `
    :host {
      width: 320px;
      flex: none;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      border-radius: var(--radius-large);
      box-shadow: var(--elevation-card);
      animation: slidein 0.18s ease-out;
      overflow: hidden;
    }
    @keyframes slidein {
      from {
        opacity: 0;
        transform: translateX(16px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
    .sp-h {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 12px 12px 16px;
      border-bottom: 1px solid var(--color-border-default);
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.15px;
    }
    .sp-b {
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: auto;
    }
    .box {
      border: 1px solid var(--color-border-default);
      border-radius: var(--radius-medium);
      padding: 10px 14px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    mat-slide-toggle {
      --mat-slide-toggle-label-text-size: 14px;
      --mat-slide-toggle-label-text-weight: 700;
      --mat-slide-toggle-label-text-tracking: 1.25px;
      --mat-slide-toggle-label-text-color: rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
    }
    .acc {
      border: 1px solid var(--color-border-default);
      border-radius: var(--radius-medium);
    }
    .acc-h {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 14px;
      font:
        500 14px/18px Roboto,
        sans-serif;
      letter-spacing: 0.1px;
      border: 0;
      background: none;
      cursor: pointer;
      color: var(--color-text-primary);
    }
    .acc-b {
      padding: 0 6px 6px;
      display: flex;
      flex-direction: column;
    }
    .reset {
      align-self: flex-start;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubProperties {
  private readonly hubPrefs = inject(HubPrefs);
  private readonly toast = inject(Toast);
  protected readonly prefs = this.hubPrefs.value;
  protected readonly groupLabel = GROUP_LABEL;
  protected readonly columnsOpen = signal(true);
  protected readonly columns: { key: keyof HubColumns; label: string }[] = [
    { key: 'sender', label: 'Sender' },
    { key: 'recipient', label: 'Recipient' },
    { key: 'building', label: 'Building' },
    { key: 'floor', label: 'Floor' },
  ];

  protected close(): void {
    this.hubPrefs.update({ panel: false });
  }

  protected setPeriod(period: Period): void {
    this.hubPrefs.update({ period, rangeStart: this.hubPrefs.todayStart(period) });
  }

  protected setCompleted(showCompleted: boolean): void {
    this.hubPrefs.update({ showCompleted });
    this.toast.show(showCompleted ? 'Completed items are visible' : 'Completed items are hidden');
  }

  protected setColumn(key: keyof HubColumns, on: boolean): void {
    this.hubPrefs.update((p) => ({ columns: { ...p.columns, [key]: on } }));
  }

  protected resetDefaults(): void {
    this.hubPrefs.update({
      period: 4,
      rangeStart: this.hubPrefs.todayStart(4),
      showCompleted: true,
      columns: { sender: true, recipient: true, building: true, floor: true },
    });
  }
}
