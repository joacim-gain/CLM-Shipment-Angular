/**
 * Hub view preferences (view, grouping, filters, timeline range, columns).
 * Kept in the browser per user, like the prototype (store.js → prefs).
 */
import { Injectable, inject, signal } from '@angular/core';
import { addDays, mondayOf } from '../../core/date/iso-date';
import { TODAY } from '../../core/date/today';
import { readLocal, removeLocal, writeLocal } from '../../core/storage/local-store';
import { WpStatus } from '../../data/clm.model';
import { GroupBy } from '../../data/clm-store';

export type HubView = 'timeline' | 'list' | 'cards';
export type Period = 4 | 52;
export interface HubColumns {
  sender: boolean;
  recipient: boolean;
  building: boolean;
  floor: boolean;
}

export interface HubPrefsState {
  view: HubView;
  groupBy: GroupBy;
  wpStatus: WpStatus[];
  search: string;
  period: Period;
  showCompleted: boolean;
  columns: HubColumns;
  rangeStart: string;
  expanded: Record<string, boolean>;
  panel: boolean;
}

const KEY = 'clm-shipments-angular-prefs-v1';

@Injectable({ providedIn: 'root' })
export class HubPrefs {
  private readonly today = inject(TODAY);
  private readonly state = signal<HubPrefsState>(this.load());
  readonly value = this.state.asReadonly();

  update(change: Partial<HubPrefsState> | ((p: HubPrefsState) => Partial<HubPrefsState>)): void {
    const p = this.state();
    const next = { ...p, ...(typeof change === 'function' ? change(p) : change) };
    // only working packages have timeline and card views
    if (next.groupBy !== 'wp' && next.view !== 'list') next.view = 'list';
    this.state.set(next);
    writeLocal(KEY, next);
  }

  /** First day of the timeline so that today is in view (2 weeks back, or a quarter back for 1 year). */
  todayStart(period: Period): string {
    return addDays(mondayOf(this.today), -7 * (period >= 52 ? 13 : 2));
  }

  toggleExpanded(key: string): void {
    this.update((p) => {
      const expanded = { ...p.expanded };
      if (expanded[key]) delete expanded[key];
      else expanded[key] = true;
      return { expanded };
    });
  }

  reset(): void {
    removeLocal(KEY);
    this.state.set(this.defaults());
  }

  private defaults(): HubPrefsState {
    return {
      view: 'timeline',
      groupBy: 'wp',
      wpStatus: [],
      search: '',
      period: 4,
      showCompleted: true,
      columns: { sender: true, recipient: true, building: true, floor: true },
      rangeStart: this.todayStart(4),
      expanded: { 'wp:wp1': true },
      panel: false,
    };
  }

  private load(): HubPrefsState {
    const p = { ...this.defaults(), ...readLocal<Partial<HubPrefsState>>(KEY, {}) };
    if (![4, 52].includes(p.period)) {
      p.period = 4;
      p.rangeStart = this.todayStart(4);
    }
    if (!Array.isArray(p.wpStatus) || p.wpStatus.length === 4) p.wpStatus = [];
    return p;
  }
}
