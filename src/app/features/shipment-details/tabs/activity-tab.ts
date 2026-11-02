/** Activity tab — everything that happened, newest first (prototype: details.js → activityHtml). */
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { Shipment } from '../../../data/clm.model';
import { ClmStore } from '../../../data/clm-store';

@Component({
  selector: 'clm-activity-tab',
  imports: [MatCardModule, MatIconModule, ClmDatePipe],
  template: `
    <mat-card appearance="raised" class="clm-card">
      <div class="clm-card-head">
        <div class="grow">
          <mat-card-title>Activity</mat-card-title>
          <mat-card-subtitle
            >Everything that happened to this shipment, newest first</mat-card-subtitle
          >
        </div>
      </div>
      <ol class="timeline">
        @for (a of entries(); track $index) {
          <li>
            <span class="ai"
              ><mat-icon>{{ a.icon || 'edit' }}</mat-icon></span
            >
            <div>
              <b>{{ data.person(a.by).name }}</b> {{ a.text }}
            </div>
            <div class="clm-cap">{{ a.at | clmDate: 'time' }}</div>
          </li>
        }
      </ol>
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
    }
    .timeline {
      position: relative;
      list-style: none;
      margin: 0;
      padding: 0 0 0 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 13px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: #dcdcdd;
    }
    li {
      position: relative;
      padding: 8px 0 12px;
    }
    b {
      font-weight: 500;
    }
    .ai {
      position: absolute;
      left: -28px;
      top: 6px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #fff;
      border: 1px solid #dcdcdd;
      display: grid;
      place-items: center;
      color: #7c7900;
      box-sizing: border-box;
    }
    .ai mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityTab {
  readonly shipment = input.required<Shipment>();
  protected readonly data = inject(ClmStore);
  protected readonly entries = computed(() =>
    [...this.shipment().activity].sort((a, b) => b.at.localeCompare(a.at)),
  );
}
