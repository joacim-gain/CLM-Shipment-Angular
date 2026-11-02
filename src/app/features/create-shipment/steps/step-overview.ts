/** Step 6 · Overview: review everything before create / save (prototype: create.js → step6). */
import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { dayName, fmtDate } from '../../../core/date/iso-date';
import { CreateContext } from '../create-context';

interface Section {
  title: string;
  step: number;
  rows: [string, string][];
}

@Component({
  selector: 'clm-step-overview',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    @let dr = d();
    <div class="clm-banner info">
      <mat-icon>fact_check</mat-icon>
      <div>
        <b>Review your shipment</b>
        <p>
          Check everything before you {{ dr.mode === 'edit' ? 'save' : 'create it' }}.
          {{
            dr.mode === 'edit'
              ? ''
              : 'After creating, the site logistics team approves the time slot and booked equipment.'
          }}
        </p>
      </div>
    </div>
    @for (s of sections(); track s.step) {
      <mat-card appearance="raised" class="clm-card">
        <div class="clm-card-head">
          <div class="grow">
            <mat-card-title>{{ s.title }}</mat-card-title>
          </div>
          <button mat-button class="clm-btn-sm" (click)="goTo.emit(s.step)">
            <mat-icon>edit</mat-icon>Change
          </button>
        </div>
        <dl class="clm-kv wide">
          @for (r of s.rows; track r[0]) {
            <dt>{{ r[0] }}</dt>
            <dd [class.na]="!r[1]">{{ r[1] || 'Not added' }}</dd>
          }
        </dl>
      </mat-card>
    }
    <div class="clm-row foot">
      <button class="clm-link" (click)="left.emit()">Cancel</button>
      <span class="clm-sp"></span>
      @if (dr.mode === 'new') {
        <button mat-stroked-button (click)="ctx.flow.saveDraft()">
          <mat-icon>save</mat-icon>Save draft
        </button>
      }
      <button mat-flat-button (click)="confirmed.emit()">
        <mat-icon>check</mat-icon>{{ dr.mode === 'edit' ? 'Save changes' : 'Create shipment' }}
      </button>
    </div>
  `,
  styles: `
    .wide {
      grid-template-columns: 170px 1fr;
    }
    .foot {
      margin-top: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepOverview {
  readonly goTo = output<number>();
  readonly confirmed = output<void>();
  readonly left = output<void>();
  protected readonly ctx = inject(CreateContext);
  protected readonly d = this.ctx.d;

  protected readonly sections = computed<Section[]>(() => {
    const d = this.d();
    const s = this.ctx.store;
    const wp = s.wp(d.wpId);
    const v = s.vehicle(d.vehicle);
    const name = (id: string) => (id ? s.person(id).name : '');
    return [
      {
        title: 'Date & working package',
        step: 1,
        rows: [
          ['Shipment name', d.name],
          ['Organization', d.sender],
          [
            'Date',
            d.date
              ? `${dayName(d.date, true)}, ${fmtDate(d.date)}${d.express ? ' · Express' : ''}`
              : '',
          ],
          ['Working package', wp ? `${wp.trade} · ${wp.title}` : ''],
        ],
      },
      {
        title: 'Destination & materials',
        step: 2,
        rows: [
          ['Recipient', d.recipient],
          ['Location', [d.building, d.floor, d.zone].filter(Boolean).join(' · ')],
          [
            'Materials',
            d.materials.map((m) => `${s.material(m.id).name} ${m.qty} ${m.unit}`).join(', '),
          ],
          ['Comment', d.comment],
        ],
      },
      {
        title: 'Transport',
        step: 3,
        rows: [
          [
            'Vehicle',
            d.vehicle ? `${v.name} · ${d.vehicles} vehicle${d.vehicles > 1 ? 's' : ''}` : '',
          ],
          ['Arrival gate', d.gate],
          ['License plate', d.plate],
          ['Driver phone', d.phone],
        ],
      },
      {
        title: 'Time slot & equipment',
        step: 4,
        rows: [
          ['Unloading point', d.up],
          ['Time slot', d.start ? `${d.start} – ${d.end}` : ''],
          ...d.equipment.map((e): [string, string] => [
            e.kind === 'booked' ? 'Special equipment' : 'Logistic equipment',
            `${s.equipment(e.id).name} · ${e.kind === 'booked' ? `${e.start} – ${e.end} (needs approval)` : `${e.pulls} pulls`}`,
          ]),
        ],
      },
      {
        title: 'Other info',
        step: 5,
        rows: [
          ['Creator', name(d.createdBy)],
          ['Onsite contact', name(d.onsite)],
          ['Order responsible', name(d.orderResp)],
          ['Delivery responsible', name(d.deliveryResp)],
          ['Documents', d.docs.map((x) => x.name).join(', ')],
          [
            'Photos',
            d.photos.length ? `${d.photos.length} photo${d.photos.length > 1 ? 's' : ''}` : '',
          ],
          ['Origin', d.origin ? `${d.origin}${d.km ? ` · ${d.km} km` : ''}` : ''],
          ['Transport modes', d.modes.join(', ')],
        ],
      },
    ];
  });
}
