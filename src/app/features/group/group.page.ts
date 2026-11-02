/**
 * Group page: one working package, destination, sender or recipient with its shipments.
 * Layout follows CLM Figma "Lean card group views" (31454:71841). Ported from views/group.js.
 */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ClmDatePipe } from '../../core/date/clm-date.pipe';
import { dayName, fmtDate, monthName } from '../../core/date/iso-date';
import { BackNavigation } from '../../core/layout/back-navigation';
import { Shipment } from '../../data/clm.model';
import { ClmStore, GroupBy, byDate } from '../../data/clm-store';
import { isInProgress, isLocked, tradeColor } from '../../data/reference-data';
import { HighlightPipe } from '../../shared/pipes/highlight.pipe';
import { InitialsPipe } from '../../shared/pipes/initials.pipe';
import { CheckChip, ChipTone } from '../../shared/ui/check-chip';
import { ShipStatusIcon } from '../../shared/ui/ship-status-icon';
import { ViewOption, ViewSwitch } from '../../shared/ui/view-switch';
import { WpStatusPill } from '../../shared/ui/wp-status';
import { CreateShipmentFlow } from '../create-shipment/create-shipment-flow';
import { GROUP_ICON, GROUP_LABEL } from '../hub/hub-groups';
import { ShipmentActions } from '../shipment-details/shipment-actions';
import { WorkingPackageDialogs } from '../working-package/working-package-dialogs';

type BucketKey = 'open' | 'approved' | 'completed' | 'canceled';
const BUCKETS: {
  k: BucketKey;
  label: string;
  tone: ChipTone;
  icon: string;
  test: (s: Shipment) => boolean;
}[] = [
  { k: 'open', label: 'Open', tone: 'grey', icon: 'chip-open', test: (s) => s.status === 'Open' },
  {
    k: 'approved',
    label: 'Approved',
    tone: 'olive',
    icon: 'f-approved',
    test: (s) => isInProgress(s.status),
  },
  {
    k: 'completed',
    label: 'Completed',
    tone: 'blue',
    icon: 'lg-completed',
    test: (s) => s.status === 'Completed',
  },
  {
    k: 'canceled',
    label: 'Draft',
    tone: 'red',
    icon: 'chip-draft',
    test: (s) => s.status === 'Canceled' || s.status === 'Rejected',
  },
];

/** List view columns, each with its own search box (as in the Figma list view) */
const COLS: {
  key: string;
  label: string;
  value: (s: Shipment, by: (id: string) => string) => string;
}[] = [
  { key: 'name', label: 'Shipment', value: (s) => s.name },
  { key: 'date', label: 'Date', value: (s) => fmtDate(s.date) },
  { key: 'time', label: 'Time', value: (s) => `${s.start} - ${s.end}` },
  { key: 'up', label: 'UP', value: (s) => s.up },
  { key: 'building', label: 'Building', value: (s) => s.building },
  { key: 'floor', label: 'Floor', value: (s) => s.floor },
  { key: 'by', label: 'Created by', value: (s, by) => by(s.createdBy) },
  { key: 'on', label: 'Created on', value: (s) => createdLabel(s.created) },
];
function createdLabel(iso: string): string {
  const [d, t] = iso.split('T');
  return `${+d.slice(8)} ${monthName(d, true)} ${d.slice(0, 4)}, ${t}`;
}

/** Remembered while the app is open (prototype: the last group view stays) */
let lastView: 'cards' | 'list' = 'cards';

@Component({
  selector: 'clm-group-page',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    ClmDatePipe,
    HighlightPipe,
    InitialsPipe,
    CheckChip,
    ShipStatusIcon,
    ViewSwitch,
    WpStatusPill,
  ],
  templateUrl: './group.page.html',
  styleUrl: './group.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPage {
  readonly by = input.required<GroupBy>();
  readonly key = input.required<string>();

  protected readonly store = inject(ClmStore);
  private readonly router = inject(Router);
  private readonly backNav = inject(BackNavigation);
  private readonly createFlow = inject(CreateShipmentFlow);
  private readonly wpDialogs = inject(WorkingPackageDialogs);
  protected readonly actions = inject(ShipmentActions);

  protected readonly buckets = BUCKETS;
  protected readonly cols = COLS;
  protected readonly on = signal<BucketKey[]>([]);
  protected readonly view = signal<'cards' | 'list'>(lastView);
  protected readonly query = signal<Record<string, string>>({});

  protected readonly wp = computed(() =>
    this.by() === 'wp' ? this.store.wp(this.key()) : undefined,
  );
  protected readonly notFound = computed(() => this.by() === 'wp' && !this.wp());
  protected readonly status = computed(() => {
    const wp = this.wp();
    return wp ? this.store.wpStatus(wp) : null;
  });
  protected readonly all = computed(() =>
    this.by() === 'wp'
      ? this.store.shipmentsOf(this.key())
      : this.store
          .shipments()
          .filter((s) => this.store.groupKey(s, this.by()) === this.key())
          .sort(byDate),
  );
  protected readonly counts = computed(
    () =>
      Object.fromEntries(BUCKETS.map((b) => [b.k, this.all().filter(b.test).length])) as Record<
        BucketKey,
        number
      >,
  );
  protected readonly shownBuckets = computed(() =>
    BUCKETS.filter((b) => b.k !== 'canceled' || this.counts().canceled),
  );
  protected readonly filtered = computed(() => {
    const on = this.on();
    return this.all().filter(
      (s) => !on.length || BUCKETS.some((b) => on.includes(b.k) && b.test(s)),
    );
  });
  protected readonly rows = computed(() => {
    const q = this.query();
    const by = (id: string) => this.store.person(id).name;
    return this.filtered().filter((s) =>
      COLS.every((c) => !q[c.key] || c.value(s, by).toLowerCase().includes(q[c.key].toLowerCase())),
    );
  });
  protected readonly done = computed(() => this.counts().completed);
  protected readonly pct = computed(() =>
    this.all().length ? Math.round((this.done() / this.all().length) * 100) : 0,
  );
  protected readonly accent = computed(() =>
    this.wp() ? tradeColor(this.wp()!.trade) : 'var(--color-action-primary)',
  );
  protected readonly icon = computed(() => GROUP_ICON[this.by()]);
  protected readonly groupLabel = computed(() => GROUP_LABEL[this.by()]);
  protected readonly canAdd = computed(() => !this.wp() || this.status() !== 'completed');

  /** Header facts — label above value (Figma B2 · Package opened) */
  protected readonly facts = computed<{ label: string; value: string }[]>(() => {
    const wp = this.wp();
    const all = this.all();
    const uniq = (f: (s: Shipment) => string) => String(new Set(all.map(f)).size);
    if (wp) {
      return [
        { label: 'Trade', value: wp.trade },
        {
          label: 'Location',
          value: `${wp.building} · ${wp.floor}${wp.zone ? ' · ' + wp.zone : ''}`,
        },
        { label: 'Booking window', value: `${fmtDate(wp.from)} – ${fmtDate(wp.to)}` },
        { label: 'Sender', value: wp.sender },
        { label: 'Recipient', value: wp.recipient },
        {
          label: 'Volume',
          value:
            [wp.volume !== '—' && wp.volume, wp.unitsQty && `${wp.unitsQty} ${wp.units}`]
              .filter(Boolean)
              .join(' · ') || '—',
        },
      ];
    }
    if (this.by() === 'destination') {
      return [
        { label: 'Laydown areas', value: uniq((s) => s.zone) },
        { label: 'Senders', value: uniq((s) => s.sender) },
        { label: 'Recipients', value: uniq((s) => s.recipient) },
        { label: 'Working packages', value: uniq((s) => s.wpId) },
      ];
    }
    return [
      {
        label: this.by() === 'sender' ? 'Recipients' : 'Senders',
        value: uniq((s) => (this.by() === 'sender' ? s.recipient : s.sender)),
      },
      { label: 'Buildings', value: uniq((s) => s.building) },
      { label: 'Floors', value: uniq((s) => s.building + s.floor) },
      { label: 'Working packages', value: uniq((s) => s.wpId) },
    ];
  });

  protected readonly views = computed<ViewOption[]>(() => [
    { value: 'list', icon: 'format_list_bulleted', label: 'List' },
    {
      value: 'cards',
      icon: 'grid_on',
      label: 'Cards',
      disabled: this.by() !== 'wp',
      disabledHint: 'Working packages only',
    },
  ]);

  constructor() {
    // cards are only available for working packages; reset filters when the group changes
    effect(() => {
      this.key();
      this.on.set([]);
      this.query.set({});
      if (this.by() !== 'wp') this.view.set('list');
    });
  }

  protected setView(v: string): void {
    this.view.set(v as 'cards' | 'list');
    lastView = this.view();
  }

  protected toggleBucket(k: BucketKey | null): void {
    this.on.update((on) => {
      if (!k) return [];
      const next = on.includes(k) ? on.filter((x) => x !== k) : [...on, k];
      return next.length === this.shownBuckets().length ? [] : next;
    });
  }

  protected setQuery(key: string, value: string): void {
    this.query.update((q) => ({ ...q, [key]: value }));
  }
  protected colValue(s: Shipment, key: string): string {
    return COLS.find((c) => c.key === key)!.value(s, (id) => this.store.person(id).name);
  }
  protected createdLabel = createdLabel;
  protected dayLong(d: string): string {
    return dayName(d, true);
  }
  protected isLocked = isLocked;

  protected back(): void {
    this.backNav.back();
  }
  protected open(s: Shipment): void {
    this.router.navigate(['/shipment', s.id]);
  }
  protected addShipment(): void {
    this.createFlow.start(this.wp() ? { wpId: this.wp()!.id } : {});
  }
  protected edit(): void {
    if (this.wp()) this.wpDialogs.open(this.wp());
  }
  protected duplicate(s: Shipment): void {
    this.createFlow.start({ duplicate: s.id });
  }
}
