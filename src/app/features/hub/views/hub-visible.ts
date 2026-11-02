/** Which shipments a collapsed group shows first (prototype: hub.js → pickVisible / timeline ordering). */
import { addDays, diffDays } from '../../../core/date/iso-date';
import { Shipment } from '../../../data/clm.model';

export const MAX_VISIBLE = 5;

/** List view: prefer upcoming / current shipments when only 5 are shown. */
export function pickVisible(list: Shipment[], today: string): Shipment[] {
  const from = addDays(today, -3);
  const upcoming = list.filter((s) => diffDays(s.date, from) >= 0);
  const past = list.filter((s) => diffDays(s.date, from) < 0).reverse();
  return [...upcoming, ...past].slice(0, MAX_VISIBLE).sort((a, b) => a.date.localeCompare(b.date));
}
