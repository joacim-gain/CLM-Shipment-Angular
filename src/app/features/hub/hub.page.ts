/**
 * Shipments hub — grouped shipments in Timeline / List / Cards views.
 * Ported from the CLM prototype: clm-shipments-demo/assets/js/views/hub.js
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { WpStatus } from '../../data/clm.model';
import { ClmStore, GroupBy } from '../../data/clm-store';
import { WP_STATUS } from '../../data/reference-data';
import { CheckChip, ChipTone } from '../../shared/ui/check-chip';
import { ViewOption, ViewSwitch } from '../../shared/ui/view-switch';
import { CreateShipmentFlow } from '../create-shipment/create-shipment-flow';
import { WorkingPackageDialogs } from '../working-package/working-package-dialogs';
import { GROUP_ICON, GROUP_LABEL, buildGroups } from './hub-groups';
import { HubPrefs, HubView } from './hub-prefs';
import { HubCards } from './views/hub-cards';
import { HubList } from './views/hub-list';
import { HubTimeline } from './views/hub-timeline';
import { HubLegend } from './hub-legend';
import { HubProperties } from './hub-properties';

const WP_CHIPS: { key: WpStatus; tone: ChipTone; icon: string }[] = [
  { key: 'overdue', tone: 'red', icon: 'lg-overdue' },
  { key: 'active', tone: 'green', icon: 'lg-active' },
  { key: 'pending', tone: 'grey', icon: 'lg-pending' },
  { key: 'completed', tone: 'blue', icon: 'lg-wpdone' },
];

@Component({
  selector: 'clm-hub-page',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    CheckChip,
    ViewSwitch,
    HubList,
    HubCards,
    HubTimeline,
    HubLegend,
    HubProperties,
  ],
  templateUrl: './hub.page.html',
  styleUrl: './hub.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubPage {
  protected readonly store = inject(ClmStore);
  protected readonly hubPrefs = inject(HubPrefs);
  private readonly router = inject(Router);
  private readonly createFlow = inject(CreateShipmentFlow);
  private readonly wpDialogs = inject(WorkingPackageDialogs);

  protected readonly prefs = this.hubPrefs.value;
  protected readonly groups = computed(() => buildGroups(this.store, this.prefs()));
  protected readonly counts = this.store.countsByStatus;
  protected readonly chips = WP_CHIPS;
  protected readonly wpStatus = WP_STATUS;
  protected readonly groupLabel = GROUP_LABEL;
  protected readonly groupIcon = GROUP_ICON;
  protected readonly groupOptions: GroupBy[] = ['wp', 'destination', 'sender', 'recipient'];
  /** "Show all" per group, for this visit only */
  protected readonly showAll = signal<Record<string, boolean>>({});

  protected readonly views = computed<ViewOption[]>(() => {
    const wpOnly = this.prefs().groupBy !== 'wp';
    return [
      {
        value: 'timeline',
        icon: 'segment',
        label: 'Timeline',
        disabled: wpOnly,
        disabledHint: 'Working packages only',
      },
      { value: 'list', icon: 'format_list_bulleted', label: 'List' },
      {
        value: 'cards',
        icon: 'grid_on',
        label: 'Cards',
        disabled: wpOnly,
        disabledHint: 'Working packages only',
      },
    ];
  });

  private searchTimer?: ReturnType<typeof setTimeout>;

  protected onSearch(value: string): void {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.hubPrefs.update({ search: value }), 120);
  }

  protected clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.hubPrefs.update({ search: '' });
    input.focus();
  }

  /** Status chips: "All" + statuses; picking a status deselects All, several can be combined. */
  protected toggleChip(key: WpStatus | null): void {
    this.hubPrefs.update((p) => {
      if (!key) return { wpStatus: [] };
      const next = p.wpStatus.includes(key)
        ? p.wpStatus.filter((x) => x !== key)
        : [...p.wpStatus, key];
      return { wpStatus: next.length === WP_CHIPS.length ? [] : next };
    });
  }

  protected setView(view: string): void {
    this.hubPrefs.update({ view: view as HubView });
  }
  protected setGroupBy(groupBy: GroupBy): void {
    this.hubPrefs.update({ groupBy });
  }
  protected togglePanel(): void {
    this.hubPrefs.update((p) => ({ panel: !p.panel }));
  }
  protected toggleShowAll(key: string): void {
    this.showAll.update((m) => ({ ...m, [key]: !m[key] }));
  }
  protected resetFilters(): void {
    this.hubPrefs.update({ search: '', wpStatus: [] });
  }

  protected createShipment(wpId?: string): void {
    this.createFlow.start(wpId ? { wpId } : {});
  }
  protected addWorkingPackage(): void {
    this.wpDialogs.open();
  }
  protected openGroup(key: string): void {
    this.router.navigate(['/group', this.prefs().groupBy, key]);
  }
  protected openShipment(id: string): void {
    this.router.navigate(['/shipment', id]);
  }
}
