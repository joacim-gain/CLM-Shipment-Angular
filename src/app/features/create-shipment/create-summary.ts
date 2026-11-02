/** Live summary panel of create / edit shipment (prototype: create.js → drawSummary). Changed rows flash. */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { fmtDate } from '../../core/date/iso-date';
import { CreateContext } from './create-context';
import { STEPS } from './shipment-draft';

interface Row {
  label: string;
  value: string;
  key?: string;
  placeholder?: string;
}

@Component({
  selector: 'clm-create-summary',
  template: `
    @let d = ctx.d();
    <div class="rp-head">
      <h3>Summary</h3>
      <div class="rp-name">
        @if (d.name) {
          {{ d.name }}
        } @else {
          <span class="clm-faint">Untitled shipment</span>
        }
      </div>
      <div>
        <span class="clm-pill">{{ d.mode === 'edit' ? 'Editing' : 'Draft' }}</span>
      </div>
      <div class="clm-cap">
        Step {{ d.step }} of 6 · {{ steps[d.step - 1] }}{{ d.step === 5 ? ' — almost done' : '' }}
      </div>
      <div class="prog-steps">
        @for (s of steps; track s; let i = $index) {
          <i [class.done]="i + 1 < d.step" [class.cur]="i + 1 === d.step"></i>
        }
      </div>
    </div>
    <div class="rp-body">
      <section>
        <h4>Shipment information</h4>
        <dl class="clm-kv">
          @for (r of info(); track r.label) {
            <dt>{{ r.label }}</dt>
            <dd [class.na]="!r.value" [class.flash]="flash(r.key)">
              {{ r.value || r.placeholder || 'Not added yet' }}
            </dd>
          }
        </dl>
      </section>
      <section>
        <h4>Equipment and usage</h4>
        <dl class="clm-kv">
          <div class="sub">Logistic equipment</div>
          @for (r of onsite(); track $index) {
            <dt>{{ r.label }}</dt>
            <dd [class.na]="!r.value" [class.flash]="flash(r.key)">
              {{ r.value || 'Not added yet' }}
            </dd>
          }
          <div class="sub">Special equipment</div>
          @for (r of booked(); track $index) {
            <dt>{{ r.label }}</dt>
            <dd [class.na]="!r.value" [class.flash]="flash(r.key)">
              {{ r.value || 'Not added yet' }}
            </dd>
          }
        </dl>
      </section>
    </div>
  `,
  host: { class: 'clm-rpanel' },
  styles: `
    .prog-steps {
      display: flex;
      gap: 4px;
    }
    .prog-steps i {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: var(--color-border-default);
    }
    .prog-steps i.done {
      background: var(--color-action-primary);
    }
    .prog-steps i.cur {
      background: var(--color-olive-200);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSummary {
  protected readonly ctx = inject(CreateContext);
  protected readonly steps = STEPS;
  private readonly store = this.ctx.store;

  protected readonly info = computed<Row[]>(() => {
    const d = this.ctx.d();
    const wp = this.store.wp(d.wpId);
    return [
      {
        label: 'Shipment no',
        value: d.mode === 'edit' ? (this.store.shipment(d.editId)?.no ?? '') : '',
        key: 'no',
        placeholder: 'Generated on create',
      },
      {
        label: 'Shipment date',
        value: d.date ? fmtDate(d.date) + (d.express ? ' · Express' : '') : '',
        key: 'date',
      },
      { label: 'Working package', value: wp ? `${wp.trade} · ${wp.title}` : '', key: 'wp' },
      {
        label: 'Materials',
        value: d.materials
          .map((m) => `${this.store.material(m.id).name} ${m.qty} ${m.unit}`)
          .join(', '),
        key: 'materials',
      },
      {
        label: 'Vehicle',
        value: d.vehicle
          ? `${this.store.vehicle(d.vehicle).name} · ${d.vehicles} vehicle${d.vehicles > 1 ? 's' : ''}`
          : '',
        key: 'vehicle',
      },
      {
        label: 'Unloading point',
        value: d.up ? `${d.up}${d.start ? ` · ${d.start} – ${d.end}` : ''}` : '',
        key: 'slot',
      },
    ];
  });

  protected readonly onsite = computed<Row[]>(() => {
    const list = this.ctx.d().equipment.filter((e) => e.kind === 'onsite');
    if (!list.length)
      return [
        { label: 'Name', value: '' },
        { label: 'Usage', value: '' },
        { label: 'Duration', value: '' },
      ];
    return list.flatMap((e) => [
      { label: 'Name', value: this.store.equipment(e.id).name, key: 'eq' },
      { label: 'Usage', value: `${e.pulls} pull${(e.pulls ?? 1) > 1 ? 's' : ''}`, key: 'eq' },
      { label: 'Duration', value: e.start ? `${e.start} – ${e.end}` : '', key: 'slot' },
    ]);
  });

  protected readonly booked = computed<Row[]>(() => {
    const list = this.ctx.d().equipment.filter((e) => e.kind === 'booked');
    if (!list.length)
      return [
        { label: 'Name', value: '' },
        { label: 'Duration', value: '' },
        { label: 'Planned usage', value: '' },
        { label: 'Estimated cost', value: '' },
      ];
    return list.flatMap((e) => [
      { label: 'Name', value: this.store.equipment(e.id).name, key: 'eq' },
      { label: 'Duration', value: `${e.start} – ${e.end}`, key: 'eq' },
      { label: 'Planned usage', value: `${this.store.equipment(e.id).slot} minutes`, key: 'eq' },
      { label: 'Estimated cost', value: 'Free of charge', key: 'eq' },
    ]);
  });

  protected flash(key: string | undefined): boolean {
    return !!key && this.ctx.changed() === key;
  }
}
