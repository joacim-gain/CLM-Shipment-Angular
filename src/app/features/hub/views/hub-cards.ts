/** Working package cards view (prototype: hub.js → cardsHtml). */
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { fmtDate } from '../../../core/date/iso-date';
import { isInProgress } from '../../../data/reference-data';
import { WpCard } from '../../../shared/ui/wp-card';
import { GROUP_LABEL, HubGroup, aggregate } from '../hub-groups';
import { HubPrefs } from '../hub-prefs';
import { HubEmpty } from './hub-empty';

@Component({
  selector: 'clm-hub-cards',
  imports: [WpCard, HubEmpty],
  template: `
    @if (cards().length) {
      <div class="cards">
        @for (c of cards(); track c.g.key) {
          <clm-wp-card
            [title]="c.g.title"
            [trade]="c.g.trade ?? ''"
            [tabLabel]="c.tab"
            [tabColor]="c.tabColor"
            [building]="c.building"
            [floor]="c.floor"
            [dates]="c.dates"
            [sender]="c.sender"
            [counts]="c.counts"
            [status]="c.g.status"
            [highlight]="prefs().search"
            (activate)="openGroup.emit(c.g.key)"
          />
        }
      </div>
    } @else {
      <clm-hub-empty (clearFilters)="resetFilters.emit()" />
    }
  `,
  styles: `
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
      align-content: start;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubCards {
  readonly groups = input.required<HubGroup[]>();
  readonly openGroup = output<string>();
  readonly resetFilters = output<void>();
  protected readonly prefs = inject(HubPrefs).value;

  protected readonly cards = computed(() =>
    this.groups().map((g) => {
      const list = g.shipments;
      return {
        g,
        tab: g.wp ? g.trade : GROUP_LABEL[this.prefs().groupBy],
        tabColor: g.wp ? undefined : 'var(--color-action-primary)',
        building: g.wp ? g.wp.building : aggregate(list, 'building'),
        floor: g.wp ? g.wp.floor : aggregate(list, 'floor'),
        dates: g.from ? `${fmtDate(g.from)} - ${fmtDate(g.to)}` : '—',
        sender: g.wp ? g.wp.sender : g.sub,
        counts: {
          open: list.filter((s) => s.status === 'Open').length,
          approved: list.filter((s) => isInProgress(s.status)).length,
          completed: list.filter((s) => s.status === 'Completed').length,
          draft: list.filter((s) => s.status === 'Canceled' || s.status === 'Rejected').length,
        },
      };
    }),
  );
}
