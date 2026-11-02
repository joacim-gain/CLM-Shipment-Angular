/** Step 4 · Time slot: unloading point, time slot (bar, chips, selects, grid), equipment (prototype: create.js → step4 / bind4). */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { fmtDate, fromMinutes, toMinutes } from '../../../core/date/iso-date';
import { Equipment, ShipmentEquipment } from '../../../data/clm.model';
import {
  EQUIPMENT_BOOKABLE,
  EQUIPMENT_ONSITE,
  UNLOADING_POINTS,
} from '../../../data/reference-data';
import { CreateContext } from '../create-context';
import {
  DAY_END,
  DAY_START,
  SLOT,
  SLOT_TIMES,
  busyAt,
  durationLabel,
  equipmentBusy,
  freeSlots,
  hourWeather,
  overlaps,
} from '../create-rules';
import {
  OnsiteData,
  OnsiteEquipmentDialog,
  OnsiteResult,
} from '../dialogs/onsite-equipment.dialog';

const HOURS = Array.from({ length: 11 }, (_, i) => 7 + i);

@Component({
  selector: 'clm-step-timeslot',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './step-timeslot.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepTimeslot {
  protected readonly ctx = inject(CreateContext);
  private readonly dialog = inject(MatDialog);
  private readonly bar = viewChild<ElementRef<HTMLElement>>('bar');
  protected readonly d = this.ctx.d;
  protected readonly points = UNLOADING_POINTS;
  protected readonly bookable = EQUIPMENT_BOOKABLE;
  protected readonly onsite = EQUIPMENT_ONSITE;
  protected readonly hours = HOURS;
  protected readonly barHours = [...HOURS, 18].map((h) => String(h).padStart(2, '0'));
  protected readonly startTimes = SLOT_TIMES.slice(0, -1);
  protected readonly endTimes = SLOT_TIMES.slice(1);
  /** First click in the grid: the start cell, waiting for the end cell */
  protected readonly anchor = signal<number | null>(null);
  /** Drag on the bar: [from, to] in minutes */
  protected readonly ghost = signal<[number, number] | null>(null);
  private dragStart: number | null = null;

  protected readonly busy = computed(() =>
    busyAt(this.d().date, this.d().up, this.ctx.store.shipments(), this.d().editId),
  );
  protected readonly selection = computed<[number, number] | null>(() =>
    this.d().start && this.d().end ? [toMinutes(this.d().start), toMinutes(this.d().end)] : null,
  );
  protected readonly free = computed(() =>
    freeSlots(this.busy()).map(([s, e]) => {
      const en = Math.min(e, s + 120);
      return { s, e: en, label: `${fromMinutes(s)} – ${fromMinutes(en)}` };
    }),
  );
  protected readonly bookedEq = computed(
    () => this.d().equipment.find((e) => e.kind === 'booked') ?? null,
  );
  protected readonly upMeta = computed(() => UNLOADING_POINTS.find((u) => u.id === this.d().up));
  protected readonly duration = computed(() => durationLabel(this.d().start, this.d().end));
  protected readonly dateLabel = computed(() =>
    this.d().date ? fmtDate(this.d().date) : 'your date',
  );

  protected readonly blocks = computed(() =>
    this.busy().map((b) => {
      const s = Math.max(b.s, DAY_START),
        e = Math.min(b.e, DAY_END);
      return {
        left: pct(s),
        width: pct(e) - pct(s),
        label: b.label,
        time: `${fromMinutes(b.s)}–${fromMinutes(b.e)}`,
      };
    }),
  );

  protected readonly grid = computed(() => {
    const eq = this.bookedEq();
    const busy = this.busy();
    const eqBusy = eq ? equipmentBusy(this.d().date, eq.id) : [];
    const sel = this.selection();
    const anchor = this.anchor();
    return HOURS.map((h) => {
      const w = hourWeather(h, this.d().date);
      const cell = (col: 'up' | 'eq', m: number) => {
        const isBusy = overlaps(m, m + SLOT, col === 'up' ? busy : eqBusy);
        const inSel =
          col === 'up'
            ? !!sel && m >= sel[0] && m < sel[1]
            : !!eq && m >= toMinutes(eq.start) && m < toMinutes(eq.end);
        return {
          m,
          busy: isBusy,
          sel: inSel || (col === 'up' && anchor === m),
          tip: `${fromMinutes(m)} – ${fromMinutes(m + SLOT)}${isBusy ? ' · booked' : ''}`,
        };
      };
      return {
        h,
        label: String(h).padStart(2, '0') + ':00',
        icon: w.icon,
        weather: w.label,
        up: [0, 20, 40].map((o) => cell('up', h * 60 + o)),
        eq: eq ? [0, 20, 40].map((o) => cell('eq', h * 60 + o)) : [],
      };
    });
  });

  protected pct = pct;
  protected fromMinutes = fromMinutes;

  protected isBusyDay(up: string): boolean {
    return busyAt(this.d().date, up, this.ctx.store.shipments(), this.d().editId).length > 2;
  }
  protected selected(id: string): ShipmentEquipment | undefined {
    return this.d().equipment.find((x) => x.id === id);
  }
  protected eqName(id: string): string {
    return this.ctx.store.equipment(id).name;
  }
  protected eqSlot(id: string): number {
    return this.ctx.store.equipment(id).slot ?? SLOT;
  }

  protected pickPoint(id: string, disabled?: boolean): void {
    if (disabled) return;
    const d = this.d();
    const clash =
      !!d.start &&
      overlaps(
        toMinutes(d.start),
        toMinutes(d.end),
        busyAt(d.date, id, this.ctx.store.shipments(), d.editId),
      );
    this.ctx.set({ up: id, ...(clash ? { start: '', end: '' } : {}) }, 'slot');
  }

  /** Set the time slot; booked equipment moves into it, on-site equipment follows it. */
  protected setSlot(s: number, e: number, quiet = false): void {
    const start = fromMinutes(s),
      end = fromMinutes(e);
    const equipment = this.d().equipment.map((x) => {
      if (x.kind === 'onsite') return { ...x, start, end };
      const len = this.eqSlot(x.id);
      return toMinutes(x.start || '00:00') < s || toMinutes(x.end || '00:00') > e || !x.start
        ? { ...x, start, end: fromMinutes(Math.min(e, s + len)) }
        : x;
    });
    this.ctx.set({ start, end, equipment }, 'slot');
    if (!quiet && overlaps(s, e, this.busy()))
      this.ctx.toast.error('This time overlaps with another booking at ' + this.d().up);
  }

  protected setStart(t: string): void {
    const d = this.d();
    const len = d.start && d.end ? toMinutes(d.end) - toMinutes(d.start) : 120;
    this.setSlot(toMinutes(t), Math.min(DAY_END, toMinutes(t) + len));
  }

  protected setEnd(t: string): void {
    if (this.d().start) this.setSlot(toMinutes(this.d().start), toMinutes(t));
  }

  protected endDisabled(t: string): boolean {
    return !!this.d().start && toMinutes(t) <= toMinutes(this.d().start);
  }

  /** Grid: click a start cell, then an end cell. Equipment column: pick the equipment's slot. */
  protected clickCell(col: 'up' | 'eq', c: { m: number; busy: boolean }): void {
    if (c.busy) {
      this.ctx.toast.error('This slot is already booked');
      return;
    }
    if (col === 'eq') {
      const eq = this.bookedEq()!;
      const len = this.eqSlot(eq.id);
      const d = this.d();
      if (d.start && (c.m < toMinutes(d.start) || c.m + len > toMinutes(d.end))) {
        this.ctx.toast.error('Equipment must be used within your time slot');
        return;
      }
      this.ctx.set(
        {
          equipment: d.equipment.map((x) =>
            x === eq ? { ...x, start: fromMinutes(c.m), end: fromMinutes(c.m + len) } : x,
          ),
        },
        'eq',
      );
      return;
    }
    const a = this.anchor();
    if (a === null || c.m < a) {
      this.setSlot(c.m, c.m + SLOT, true);
      this.anchor.set(c.m);
      return;
    }
    this.anchor.set(null);
    this.setSlot(a, c.m + SLOT);
  }

  // ---------------------------------------------------------------- drag on the bar
  protected dragDown(e: PointerEvent): void {
    this.dragStart = this.at(e);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    e.preventDefault();
  }

  protected dragMove(e: PointerEvent): void {
    if (this.dragStart === null) return;
    const m = this.at(e);
    this.ghost.set([Math.min(this.dragStart, m), Math.max(this.dragStart, m)]);
  }

  protected dragUp(e: PointerEvent): void {
    if (this.dragStart === null) return;
    const m = this.at(e);
    const s = Math.min(this.dragStart, m),
      en = Math.max(this.dragStart, m);
    this.dragStart = null;
    this.ghost.set(null);
    if (en - s >= SLOT) this.setSlot(s, en);
    else this.ctx.toast.show('Drag across the bar to pick a time range');
  }

  private at(e: PointerEvent): number {
    const r = this.bar()!.nativeElement.getBoundingClientRect();
    const m = DAY_START + ((e.clientX - r.left) / r.width) * (DAY_END - DAY_START);
    return Math.max(DAY_START, Math.min(DAY_END, Math.round(m / SLOT) * SLOT));
  }

  // ---------------------------------------------------------------- equipment
  protected toggleBookable(eq: Equipment): void {
    if (eq.disabled) return;
    const d = this.d();
    if (this.selected(eq.id)) {
      this.ctx.set({ equipment: d.equipment.filter((x) => x.id !== eq.id) }, 'eq');
      return;
    }
    const len = eq.slot ?? SLOT;
    const s = d.start ? toMinutes(d.start) : 560;
    // one special equipment per shipment
    const equipment: ShipmentEquipment[] = [
      ...d.equipment.filter((x) => x.kind !== 'booked'),
      {
        id: eq.id,
        kind: 'booked',
        start: fromMinutes(s),
        end: fromMinutes(s + len),
        state: 'pending',
      },
    ];
    this.ctx.set({ equipment }, 'eq');
    this.ctx.toast.show(`${eq.name} added · pick its slot in the grid`);
  }

  protected openOnsite(eq: Equipment): void {
    const cur = this.selected(eq.id) ?? null;
    const d = this.d();
    this.dialog
      .open<OnsiteEquipmentDialog, OnsiteData, OnsiteResult>(OnsiteEquipmentDialog, {
        width: '440px',
        data: { equipment: eq, current: cur, slot: d.start ? `(${d.start} – ${d.end})` : '' },
      })
      .afterClosed()
      .subscribe((r) => {
        if (!r) return;
        const list = this.d().equipment;
        if (r.action === 'remove') {
          this.ctx.set({ equipment: list.filter((x) => x.id !== eq.id) }, 'eq');
          return;
        }
        const equipment = cur
          ? list.map((x) => (x.id === eq.id ? { ...x, pulls: r.pulls, ton: r.ton } : x))
          : [
              ...list,
              {
                id: eq.id,
                kind: 'onsite' as const,
                pulls: r.pulls,
                ton: r.ton,
                start: this.d().start,
                end: this.d().end,
              },
            ];
        this.ctx.set({ equipment }, 'eq');
      });
  }
}

function pct(m: number): number {
  return ((m - DAY_START) / (DAY_END - DAY_START)) * 100;
}
