/**
 * Shipment details page — header, tabs and the full-height details panel.
 * Ported from the CLM prototype: clm-shipments-demo/assets/js/views/details.js
 * Route: shipment/:id/:tab (inputs bound with withComponentInputBinding).
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { BackNavigation } from '../../core/layout/back-navigation';
import { ClmDatePipe } from '../../core/date/clm-date.pipe';
import { isLocked } from '../../data/reference-data';
import { ClmStore } from '../../data/clm-store';
import { StatusPill } from '../../shared/ui/status-pill';
import { DetailsPanel } from './details-panel/details-panel';
import { ShipmentActions } from './shipment-actions';
import { ActivityTab } from './tabs/activity-tab';
import { AnnotationsTab } from './tabs/annotations-tab';
import { DocumentsTab } from './tabs/documents-tab';
import { OverviewTab } from './tabs/overview-tab';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'documents', label: 'Documents & photos' },
  { key: 'annotations', label: 'Annotations' },
  { key: 'activity', label: 'Activity' },
] as const;
type TabKey = (typeof TABS)[number]['key'];

@Component({
  selector: 'clm-shipment-details-page',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    ClmDatePipe,
    StatusPill,
    DetailsPanel,
    OverviewTab,
    DocumentsTab,
    AnnotationsTab,
    ActivityTab,
  ],
  templateUrl: './shipment-details.page.html',
  styleUrl: './shipment-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentDetailsPage {
  /** Route params, bound by withComponentInputBinding() */
  readonly id = input.required<string>();
  readonly tab = input<string>('overview');

  private readonly data = inject(ClmStore);
  private readonly backNav = inject(BackNavigation);
  protected readonly actions = inject(ShipmentActions);

  protected readonly tabs = TABS;
  protected readonly shipment = computed(() => this.data.shipment(this.id()));
  protected readonly activeTab = computed<TabKey>(
    () => TABS.find((t) => t.key === this.tab())?.key ?? 'overview',
  );
  protected readonly workingPackage = computed(() => {
    const s = this.shipment();
    return s && this.data.wp(s.wpId);
  });
  protected readonly creator = computed(() => this.data.person(this.shipment()?.createdBy));
  protected readonly locked = computed(() => {
    const s = this.shipment();
    return !!s && isLocked(s.status);
  });
  protected readonly counts = computed<Record<TabKey, number>>(() => {
    const s = this.shipment();
    return {
      overview: 0,
      documents: s ? s.docs.length + s.photos.length : 0,
      annotations: s?.annotations.length ?? 0,
      activity: s?.activity.length ?? 0,
    };
  });

  /** The details panel sticks just below the sticky header and fills the remaining height (prototype: app.js → fitPanels). */
  private readonly head = viewChild<ElementRef<HTMLElement>>('head');
  protected readonly panelTop = signal(24);

  constructor() {
    effect((onCleanup) => {
      const el = this.head()?.nativeElement;
      if (!el) return;
      const observer = new ResizeObserver(() => this.panelTop.set(el.offsetHeight + 24));
      observer.observe(el);
      onCleanup(() => observer.disconnect());
    });
  }

  protected back(): void {
    this.backNav.back();
  }
}
