/**
 * Date helpers for the plain ISO strings CLM uses everywhere ('2026-10-27', '2026-10-20T08:12').
 * Ported from the prototype (data.js → D). All maths in UTC, so time zones never shift a day.
 */

export type IsoDate = string;

const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAYS_LONG = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function parseIso(s: IsoDate): Date {
  const [y, m, d] = s.slice(0, 10).split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}
export function toIso(d: Date): IsoDate {
  return d.toISOString().slice(0, 10);
}
export function addDays(s: IsoDate, n: number): IsoDate {
  const d = parseIso(s);
  d.setUTCDate(d.getUTCDate() + n);
  return toIso(d);
}
export function addMonths(s: IsoDate, n: number): IsoDate {
  const d = parseIso(s);
  d.setUTCMonth(d.getUTCMonth() + n);
  return toIso(d);
}
/** Days from b to a (a − b). */
export function diffDays(a: IsoDate, b: IsoDate): number {
  return Math.round((parseIso(a).getTime() - parseIso(b).getTime()) / 864e5);
}
/** 0 = Monday … 6 = Sunday */
export function dayOfWeek(s: IsoDate): number {
  return (parseIso(s).getUTCDay() + 6) % 7;
}
export function mondayOf(s: IsoDate): IsoDate {
  return addDays(s, -dayOfWeek(s));
}
/** 27.10.2026 */
export function fmtDate(s: IsoDate | null | undefined): string {
  if (!s) return '—';
  const [y, m, d] = s.slice(0, 10).split('-');
  return `${d}.${m}.${y}`;
}
/** 27.10.26 */
export function fmtShort(s: IsoDate): string {
  const [y, m, d] = s.slice(0, 10).split('-');
  return `${d}.${m}.${y.slice(2)}`;
}
/** 20.10.2026, 08:12 */
export function fmtDateTime(s: string | null | undefined): string {
  if (!s) return '';
  const [d, t] = s.split('T');
  return `${fmtDate(d)}${t ? ', ' + t : ''}`;
}
export function dayName(s: IsoDate, long = false): string {
  return (long ? DAYS_LONG : DAYS_SHORT)[dayOfWeek(s)];
}
export function monthName(s: IsoDate, short = false): string {
  return (short ? MONTHS_SHORT : MONTHS_LONG)[parseIso(s).getUTCMonth()];
}
/** ISO week number */
export function isoWeek(s: IsoDate): number {
  const t = parseIso(s);
  t.setUTCDate(t.getUTCDate() - dayOfWeek(s) + 3);
  const firstThursday = new Date(Date.UTC(t.getUTCFullYear(), 0, 4));
  return (
    1 +
    Math.round(
      ((t.getTime() - firstThursday.getTime()) / 864e5 -
        3 +
        ((firstThursday.getUTCDay() + 6) % 7)) /
        7,
    )
  );
}
/** "today", "in 3 days", "2 weeks ago" — relative to `today`. */
export function relative(s: IsoDate, today: IsoDate): string {
  const n = diffDays(s, today);
  if (n === 0) return 'today';
  if (n === 1) return 'tomorrow';
  if (n === -1) return 'yesterday';
  if (Math.abs(n) < 14) return n > 0 ? `in ${n} days` : `${-n} days ago`;
  const w = Math.round(Math.abs(n) / 7);
  return n > 0 ? `in ${w} weeks` : `${w} weeks ago`;
}
/** "07:40" → 460 */
export function toMinutes(t: string): number {
  return +t.slice(0, 2) * 60 + +t.slice(3, 5);
}
/** 460 → "07:40" */
export function fromMinutes(m: number): string {
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
}
