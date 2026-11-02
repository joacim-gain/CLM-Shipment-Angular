/**
 * Builds the hub groups from shipments + preferences (prototype: store.js → groups()).
 * Pure function, so it is easy to unit-test and to move to the backend later.
 */
import { Shipment, WorkingPackage, WpStatus } from '../../data/clm.model';
import { ClmStore, GroupBy, byDate } from '../../data/clm-store';
import { HubPrefsState } from './hub-prefs';

export interface HubGroup {
  key: string;
  title: string;
  sub: string;
  trade?: string;
  wp?: WorkingPackage;
  shipments: Shipment[];
  from?: string;
  to?: string;
  status: WpStatus | null;
  /** ids of shipments matching the search */
  matched?: string[];
}

export const GROUP_LABEL: Record<GroupBy, string> = {
  wp: 'Working package',
  destination: 'Destination',
  sender: 'Sender',
  recipient: 'Recipient',
};
export const GROUP_ICON: Record<GroupBy, string> = {
  wp: 'folder',
  destination: 'location_on',
  sender: 'outbox',
  recipient: 'move_to_inbox',
};
const ORDER: Record<WpStatus, number> = { overdue: 0, active: 1, pending: 2, completed: 3 };

export function buildGroups(store: ClmStore, p: HubPrefsState): HubGroup[] {
  const q = p.search.trim().toLowerCase();
  const statusOk = (wp: WorkingPackage) =>
    !p.wpStatus.length || p.wpStatus.includes(store.wpStatus(wp));
  const map = new Map<string, HubGroup>();

  if (p.groupBy === 'wp') {
    store.wps().forEach((wp) => {
      if (!statusOk(wp)) return;
      if (!p.showCompleted && store.wpStatus(wp) === 'completed') return;
      map.set(wp.id, {
        key: wp.id,
        title: wp.title,
        sub: wp.trade,
        trade: wp.trade,
        wp,
        shipments: [],
        status: null,
      });
    });
  }
  store.shipments().forEach((s) => {
    const wp = store.wp(s.wpId);
    if (!wp || !statusOk(wp)) return;
    if (!p.showCompleted && (s.status === 'Completed' || store.wpStatus(wp) === 'completed'))
      return;
    const k = store.groupKey(s, p.groupBy);
    if (!map.has(k)) map.set(k, { key: k, title: k, sub: '', shipments: [], status: null });
    map.get(k)!.shipments.push(s);
  });

  let groups = [...map.values()];
  groups.forEach((g) => {
    g.shipments.sort(byDate);
    if (g.wp) {
      g.from = g.wp.from;
      g.to = g.wp.to;
      g.status = store.wpStatus(g.wp);
    } else {
      const ds = g.shipments.map((s) => s.date).sort();
      g.from = ds[0];
      g.to = ds[ds.length - 1];
      const wps = new Set(g.shipments.map((s) => s.wpId)).size;
      g.sub = `${wps} working package${wps > 1 ? 's' : ''}`;
    }
  });

  if (q) {
    groups = groups.flatMap((g) => {
      const hit = [g.title, g.sub, g.wp?.sender, g.wp?.recipient, g.wp?.building]
        .join(' ')
        .toLowerCase()
        .includes(q);
      const ships = g.shipments.filter((s) =>
        [s.name, s.no, s.sender, s.recipient, s.building, s.floor, s.status]
          .join(' ')
          .toLowerCase()
          .includes(q),
      );
      if (hit) return [{ ...g, matched: ships.map((s) => s.id) }];
      if (ships.length) return [{ ...g, shipments: ships, matched: ships.map((s) => s.id) }];
      return [];
    });
  }

  return groups.sort(
    (a, b) =>
      (a.status && b.status ? ORDER[a.status] - ORDER[b.status] : 0) ||
      a.title.localeCompare(b.title),
  );
}

/** One value if all shipments agree, else "Multiple" (prototype: agg). */
export function aggregate(
  list: Shipment[],
  field: 'sender' | 'recipient' | 'building' | 'floor',
): string {
  const v = [...new Set(list.map((s) => s[field]))];
  return v.length === 1 ? v[0] : v.length ? 'Multiple' : '—';
}
