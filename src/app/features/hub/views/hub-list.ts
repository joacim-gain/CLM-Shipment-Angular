/** Grouped list view = DS Working Package Row table (prototype: hub.js → listHtml / shipRowsHtml). */
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { TODAY } from '../../../core/date/today';
import { ClmStore } from '../../../data/clm-store';
import { isInProgress, tradeColor } from '../../../data/reference-data';
import { HighlightPipe } from '../../../shared/pipes/highlight.pipe';
import { ShipStatusIcon } from '../../../shared/ui/ship-status-icon';
import { StatusPill } from '../../../shared/ui/status-pill';
import { WpStatusIcon, WpStatusPill } from '../../../shared/ui/wp-status';
import { GROUP_LABEL, HubGroup, aggregate } from '../hub-groups';
import { HubPrefs } from '../hub-prefs';
import { HubEmpty } from './hub-empty';
import { MAX_VISIBLE, pickVisible } from './hub-visible';

@Component({
  selector: 'clm-hub-list',
  imports: [
    MatIconModule,
    MatTooltipModule,
    ClmDatePipe,
    HighlightPipe,
    ShipStatusIcon,
    StatusPill,
    WpStatusIcon,
    WpStatusPill,
    HubEmpty,
  ],
  templateUrl: './hub-list.html',
  styleUrl: './hub-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubList {
  readonly groups = input.required<HubGroup[]>();
  readonly showAll = input.required<Record<string, boolean>>();
  readonly toggleShowAll = output<string>();
  readonly openGroup = output<string>();
  readonly openShipment = output<string>();
  readonly addShipment = output<string | undefined>();
  readonly resetFilters = output<void>();

  protected readonly store = inject(ClmStore);
  protected readonly hubPrefs = inject(HubPrefs);
  private readonly today = inject(TODAY);
  protected readonly prefs = this.hubPrefs.value;
  protected readonly max = MAX_VISIBLE;

  protected readonly showLocation = computed(() => {
    const p = this.prefs();
    return (p.columns.building || p.columns.floor) && p.groupBy !== 'destination';
  });
  protected readonly showParties = computed(() => {
    const c = this.prefs().columns;
    return c.sender || c.recipient;
  });
  protected readonly partiesLabel = computed(() => {
    const c = this.prefs().columns;
    return [c.sender && 'Sender', c.recipient && 'Recipient'].filter(Boolean).join(' → ');
  });
  protected readonly groupLabel = computed(() => GROUP_LABEL[this.prefs().groupBy]);

  protected readonly cols = computed(() => {
    const cols = ['44px', 'minmax(200px, 1fr)'];
    if (this.showLocation()) cols.push('150px');
    cols.push('170px');
    if (this.showParties()) cols.push('210px');
    cols.push('170px', '132px');
    return cols.join(' ');
  });

  protected readonly rows = computed(() => {
    const p = this.prefs();
    const q = p.search;
    return this.groups().map((g) => {
      const key = p.groupBy + ':' + g.key;
      const list = g.shipments;
      const done = list.filter((s) => s.status === 'Completed').length;
      const open = list.filter((s) => s.status === 'Open').length;
      const total = list.length;
      const expanded = !!p.expanded[key] || !!(q && g.matched?.length);
      const all = !!this.showAll()[key];
      return {
        g,
        key,
        expanded,
        all,
        total,
        done,
        open,
        pct: total ? (done / total) * 100 : 0,
        appr: total ? (list.filter((s) => isInProgress(s.status)).length / total) * 100 : 0,
        note: g.wp
          ? this.store.wpWindowNote(g.wp)
          : { text: `${total} shipment${total !== 1 ? 's' : ''}`, error: false },
        sender: g.wp ? g.wp.sender : aggregate(list, 'sender'),
        recipient: g.wp ? g.wp.recipient : aggregate(list, 'recipient'),
        building: g.wp ? g.wp.building : aggregate(list, 'building'),
        floor: g.wp ? g.wp.floor : aggregate(list, 'floor'),
        wpCount: new Set(list.map((s) => s.wpId)).size,
        canAdd: !!g.wp && this.store.wpStatus(g.wp) !== 'completed',
        shown: expanded ? (all ? list : pickVisible(list, this.today)) : [],
      };
    });
  });

  protected readonly tradeColor = tradeColor;

  protected location(r: { building: string; floor: string }): string {
    const c = this.prefs().columns;
    return [c.building && r.building, c.floor && r.floor].filter(Boolean).join(' · ');
  }

  protected equipmentNames(ids: { id: string }[]): string {
    return ids.length ? ids.map((e) => this.store.equipment(e.id).name).join(', ') : '—';
  }

  protected vehicleName(id: string): string {
    return this.store.vehicle(id).name;
  }

  protected toggle(event: Event, key: string): void {
    event.stopPropagation();
    this.hubPrefs.toggleExpanded(key);
  }
}
