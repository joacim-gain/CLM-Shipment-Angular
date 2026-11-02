/**
 * Timeline (Gantt) view of the groups and their shipments (prototype: hub.js → timelineHtml / bindTimeline).
 * All positions are computed here as a view model; the template only renders it.
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmCalendarHeader } from '../../../core/date/clm-calendar-header';
import {
  addDays,
  dayName,
  dayOfWeek,
  diffDays,
  fmtDate,
  fmtShort,
  isoWeek,
  mondayOf,
  monthName,
  parseIso,
} from '../../../core/date/iso-date';
import { TODAY } from '../../../core/date/today';
import { Shipment } from '../../../data/clm.model';
import { ClmStore } from '../../../data/clm-store';
import {
  SHIPMENT_STATUS,
  needsDarkText,
  tradeColor,
  tradeDark,
} from '../../../data/reference-data';
import { HighlightPipe } from '../../../shared/pipes/highlight.pipe';
import { ShipStatusIcon } from '../../../shared/ui/ship-status-icon';
import { GROUP_LABEL, HubGroup, aggregate } from '../hub-groups';
import { HubPrefs } from '../hub-prefs';
import { HubEmpty } from './hub-empty';
import { MAX_VISIBLE } from './hub-visible';

/** Left column of the timeline: 360–380px, the rest is for the bars */
const TL_LEFT = 372;

interface BgCol {
  cls: string;
}
interface HeadCell {
  label: string;
  span?: number;
  cls?: string;
  tip?: string;
}
interface Bar {
  style: Record<string, string>;
  cls: string;
  label: string;
  tip: string;
  jump?: string;
  icon?: string;
}
type Row =
  | {
      kind: 'group';
      g: HubGroup;
      key: string;
      open: boolean;
      info: string;
      count: number;
      span?: Bar;
      ticks: { left: number; color: string }[];
    }
  | { kind: 'ship'; s: Shipment; line: string; bar: Bar }
  | { kind: 'none' }
  | { kind: 'more'; key: string; total: number; all: boolean; more: boolean; addWp?: string };

@Component({
  selector: 'clm-hub-timeline',
  imports: [
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    NgTemplateOutlet,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    HighlightPipe,
    ShipStatusIcon,
    HubEmpty,
  ],
  templateUrl: './hub-timeline.html',
  styleUrl: './hub-timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubTimeline {
  readonly groups = input.required<HubGroup[]>();
  readonly showAll = input.required<Record<string, boolean>>();
  readonly toggleShowAll = output<string>();
  readonly openGroup = output<string>();
  readonly openShipment = output<string>();
  readonly addShipment = output<string | undefined>();
  readonly resetFilters = output<void>();

  private readonly store = inject(ClmStore);
  private readonly hubPrefs = inject(HubPrefs);
  private readonly today = inject(TODAY);
  private readonly grid = viewChild<ElementRef<HTMLElement>>('grid');
  protected readonly prefs = this.hubPrefs.value;

  protected readonly calendarOpen = signal(false);
  protected readonly calendarHeader = ClmCalendarHeader;
  protected readonly calendarPositions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
  ];
  protected readonly flash = signal(false);
  protected readonly tradeColor = tradeColor;

  protected readonly range = computed(() => {
    const p = this.prefs();
    const days = p.period * 7;
    const start = p.rangeStart;
    return { days, start, end: addDays(start, days - 1), year: p.period >= 52, weeks: days / 7 };
  });

  protected readonly todayDate = computed(() => parseIso(this.today));
  protected readonly startDate = computed(() => parseIso(this.range().start));

  protected readonly gridStyle = computed(() => {
    const r = this.range();
    return {
      'grid-template-columns': `${TL_LEFT}px minmax(${r.year ? r.weeks * 20 : r.days * 16}px, 1fr)`,
      'grid-template-rows': `repeat(${this.rows().length + 1}, max-content) minmax(0, 1fr)`,
    };
  });

  /** Background columns (days, or weeks for 1 year): weekends shaded, today highlighted */
  protected readonly bg = computed<{ template: string; cols: BgCol[] }>(() => {
    const r = this.range();
    if (r.year) {
      const cols = Array.from({ length: r.weeks }, (_, i) => ({
        cls: this.isTodayWeek(addDays(r.start, i * 7)) ? 'td' : '',
      }));
      return { template: `repeat(${r.weeks},1fr)`, cols };
    }
    const cols = Array.from({ length: r.days }, (_, i) => {
      const d = addDays(r.start, i);
      return { cls: d === this.today ? 'td' : dayOfWeek(d) > 4 ? 'we' : '' };
    });
    return { template: `repeat(${r.days},1fr)`, cols };
  });

  /** Two header lines: weeks over days (4 weeks) or months over week numbers (1 year) */
  protected readonly header = computed<{ top: HeadCell[]; bottom: HeadCell[]; template: string }>(
    () => {
      const r = this.range();
      const weekStarts = Array.from({ length: r.weeks }, (_, i) => addDays(r.start, i * 7));
      if (r.year) {
        const months: HeadCell[] = [];
        weekStarts.forEach((w) => {
          const m = monthName(w, true) + ' ' + w.slice(0, 4);
          const last = months[months.length - 1];
          if (last && last.tip === m) last.span!++;
          else months.push({ label: m, span: 1, tip: m });
        });
        months.forEach((m) => {
          if (m.span! < 2) m.label = '';
        });
        const bottom = weekStarts.map((w) => ({
          label: isoWeek(w) % 2 ? '' : String(isoWeek(w)),
          cls: this.isTodayWeek(w) ? 'td' : '',
          tip: `Week ${isoWeek(w)} · ${fmtDate(w)} – ${fmtDate(addDays(w, 6))}`,
        }));
        return { top: months, bottom, template: `repeat(${r.weeks},1fr)` };
      }
      const top = weekStarts.map((d) => {
        const e = addDays(d, 6);
        const m1 = monthName(d, true),
          m2 = monthName(e, true);
        return { label: `W${isoWeek(d)}, ${m1}${m2 !== m1 ? '–' + m2 : ''} ${d.slice(0, 4)}` };
      });
      const bottom = Array.from({ length: r.days }, (_, i) => {
        const d = addDays(r.start, i);
        return {
          label: String(+d.slice(8)),
          cls: d === this.today ? 'td' : dayOfWeek(d) > 4 ? 'we' : '',
          tip: d === this.today ? 'Today' : `${dayName(d, true)}, ${fmtDate(d)}`,
        };
      });
      return { top, bottom, template: `repeat(${r.weeks},1fr)` };
    },
  );

  protected readonly infoLabel = computed(() => {
    const c = this.prefs().columns;
    return [
      (c.sender || c.recipient) &&
        [c.sender && 'Sender', c.recipient && 'Recipient'].filter(Boolean).join(' → '),
      (c.building || c.floor) &&
        [c.building && 'Building', c.floor && 'Floor'].filter(Boolean).join(' · '),
    ]
      .filter(Boolean)
      .join('  ·  ');
  });
  protected readonly groupLabel = computed(() => GROUP_LABEL[this.prefs().groupBy]);

  protected readonly rows = computed<Row[]>(() => {
    const p = this.prefs();
    const r = this.range();
    const rows: Row[] = [];
    for (const g of this.groups()) {
      const key = p.groupBy + ':' + g.key;
      const open = !!p.expanded[key] || !!(p.search && g.matched?.length);
      const list = g.shipments;
      rows.push({
        kind: 'group',
        g,
        key,
        open,
        count: list.length,
        info: this.infoLine({
          sender: g.wp ? g.wp.sender : aggregate(list, 'sender'),
          recipient: g.wp ? g.wp.recipient : aggregate(list, 'recipient'),
          building: g.wp ? g.wp.building : aggregate(list, 'building'),
          floor: g.wp ? g.wp.floor : aggregate(list, 'floor'),
        }),
        span: this.groupSpan(g),
        ticks: list
          .filter((s) => this.inRange(s.date))
          .map((s) => ({
            left: this.pct(s.date) + (r.year ? 0 : 50 / r.days),
            color: SHIPMENT_STATUS[s.status].color,
          })),
      });
      if (!open) continue;
      if (!list.length) rows.push({ kind: 'none' });
      const all = !!this.showAll()[key];
      // closest to today first, then sorted by date
      const near = (x: Shipment) =>
        Math.abs(diffDays(x.date, this.today)) - (diffDays(x.date, this.today) >= 0 ? 0.5 : 0);
      const inRange = list.filter((s) => this.inRange(s.date));
      const ordered = [
        ...inRange.sort((a, b) => near(a) - near(b)),
        ...list.filter((s) => !inRange.includes(s)),
      ];
      const shown = all
        ? list
        : ordered.slice(0, MAX_VISIBLE).sort((a, b) => a.date.localeCompare(b.date));
      shown.forEach((s) =>
        rows.push({
          kind: 'ship',
          s,
          bar: this.shipBar(s),
          line: `${s.no} · ${dayName(s.date)} ${fmtShort(s.date)} · ${s.start}–${s.end} · ${s.up}`,
        }),
      );
      const canAdd = !!g.wp && this.store.wpStatus(g.wp) !== 'completed';
      if (list.length > MAX_VISIBLE || canAdd)
        rows.push({
          kind: 'more',
          key,
          total: list.length,
          all,
          more: list.length > MAX_VISIBLE,
          addWp: canAdd ? g.wp!.id : undefined,
        });
    }
    return rows;
  });

  protected readonly anyOpen = computed(() =>
    this.groups().some((g) => this.prefs().expanded[this.prefs().groupBy + ':' + g.key]),
  );

  constructor() {
    // keep the "today" column in view when the range changes
    afterRenderEffect(() => {
      this.range();
      const grid = this.grid()?.nativeElement;
      const td = grid?.querySelector<HTMLElement>('.tl-days .td');
      if (grid && td && grid.scrollWidth > grid.clientWidth)
        grid.scrollLeft = td.offsetLeft - grid.clientWidth / 2;
    });
  }

  // ---------------------------------------------------------------- actions
  protected toggle(event: Event, key: string): void {
    event.stopPropagation();
    this.hubPrefs.toggleExpanded(key);
  }

  protected shift(direction: -1 | 1): void {
    const step = this.range().year ? 13 : 4;
    this.setStart(addDays(this.prefs().rangeStart, direction * step * 7));
  }

  protected goToday(): void {
    this.setStart(this.hubPrefs.todayStart(this.prefs().period));
  }

  /** Jump so the given date is in view (one week / one quarter before it) */
  protected jump(event: Event, date: string): void {
    event.stopPropagation();
    this.setStart(addDays(mondayOf(date), -7 * (this.range().year ? 13 : 1)));
  }

  protected pickDate(d: Date | null): void {
    this.calendarOpen.set(false);
    if (!d) return;
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    this.setStart(addDays(mondayOf(iso), -7 * (this.range().year ? 13 : 1)));
  }

  protected toggleAll(): void {
    const open = this.anyOpen();
    this.hubPrefs.update((p) => {
      const expanded = { ...p.expanded };
      this.groups().forEach((g) => {
        const k = p.groupBy + ':' + g.key;
        if (open) delete expanded[k];
        else expanded[k] = true;
      });
      return { expanded };
    });
  }

  protected rangeLabel(): string {
    const r = this.range();
    return `${fmtDate(r.start)} – ${fmtDate(r.end)} (${r.year ? '1Y' : '4W'})`;
  }

  // ---------------------------------------------------------------- geometry
  private setStart(rangeStart: string): void {
    this.hubPrefs.update({ rangeStart });
    this.flash.set(true);
    setTimeout(() => this.flash.set(false), 900);
  }

  private pct(d: string): number {
    return (diffDays(d, this.range().start) / this.range().days) * 100;
  }
  private inRange(d: string): boolean {
    return diffDays(d, this.range().start) >= 0 && diffDays(d, this.range().end) <= 0;
  }
  private isTodayWeek(w: string): boolean {
    const n = diffDays(this.today, w);
    return n >= 0 && n < 7;
  }

  private infoLine(o: {
    sender: string;
    recipient: string;
    building: string;
    floor: string;
  }): string {
    const c = this.prefs().columns;
    const parts: string[] = [];
    if (c.sender || c.recipient)
      parts.push([c.sender && o.sender, c.recipient && o.recipient].filter(Boolean).join(' → '));
    if (c.building || c.floor)
      parts.push([c.building && o.building, c.floor && o.floor].filter(Boolean).join(' · '));
    return parts.filter(Boolean).join('  ·  ');
  }

  /** The group's span bar, or a "‹ ended" / "starts ›" chip when it is outside the range */
  private groupSpan(g: HubGroup): Bar | undefined {
    if (!g.from || !g.to) return undefined;
    const { start, end } = this.range();
    if (!(diffDays(g.to, start) < 0 || diffDays(g.from, end) > 0)) {
      const l = Math.max(0, this.pct(g.from));
      const r = Math.min(100, this.pct(addDays(g.to, 1)));
      return {
        style: {
          left: l + '%',
          width: r - l + '%',
          background: g.wp ? tradeColor(g.trade) : '#969300',
        },
        cls: [
          g.wp && tradeDark(g.trade) ? 'dark-t' : '',
          this.pct(g.from) < 0 ? 'clip-l' : '',
          this.pct(addDays(g.to, 1)) > 100 ? 'clip-r' : '',
        ].join(' '),
        label: g.title,
        tip: `${g.title}\n${fmtDate(g.from)} – ${fmtDate(g.to)} · ${g.shipments.length} shipments`,
      };
    }
    const before = diffDays(g.to, start) < 0;
    return {
      style: before ? { left: '4px' } : { right: '4px' },
      cls: 'out',
      label: before ? '‹ ended ' + fmtShort(g.to) : 'starts ' + fmtShort(g.from) + ' ›',
      tip: `Jump to ${before ? 'end' : 'start'}`,
      jump: before ? g.to : g.from,
    };
  }

  private shipBar(s: Shipment): Bar {
    const st = SHIPMENT_STATUS[s.status];
    const { year, days, start } = this.range();
    if (!this.inRange(s.date)) {
      const before = diffDays(s.date, start) < 0;
      return {
        style: before ? { left: '4px', top: '12px' } : { right: '4px', top: '12px' },
        cls: 'out',
        label: `${before ? '‹ ' : ''}${fmtShort(s.date)}${before ? '' : ' ›'}`,
        tip: `Show ${fmtDate(s.date)} in timeline`,
        jump: s.date,
      };
    }
    const style: Record<string, string> = {
      left: `calc(${this.pct(s.date)}% + ${year ? 0 : 2}px)`,
      width: year ? `max(8px, ${100 / days}%)` : `calc(${100 / days}% - 4px)`,
      padding: year ? '0' : '0 6px',
    };
    if (st.outline)
      Object.assign(style, {
        background: '#fff',
        'box-shadow': `inset 0 0 0 2px ${st.color}`,
        color: st.fg,
      });
    else
      Object.assign(style, {
        background: st.color,
        color: needsDarkText(st.color) ? 'rgba(0,0,0,.78)' : '#fff',
      });
    return {
      style,
      cls: '',
      label: '',
      icon: year ? undefined : st.icon,
      tip: `${s.name}\n${s.no} · ${st.label}\n${dayName(s.date)}, ${fmtDate(s.date)} · ${s.start}–${s.end}\n${this.store.vehicle(s.vehicle).name} · ${s.up}`,
    };
  }
}
