/**
 * Business rules of create shipment (prototype: create.js → errors, needsExpress, dayState, busy, freeSlots …).
 * Pure functions, unit-tested in create-rules.spec.ts. BA confirms these before release;
 * availability (busy slots, equipment) comes from the API in the real app.
 */
import { addDays, dayOfWeek, diffDays, fromMinutes, toMinutes } from '../../core/date/iso-date';
import { Shipment } from '../../data/clm.model';
import { ShipmentDraft } from './shipment-draft';

export const DAY_START = 7 * 60;
export const DAY_END = 18 * 60;
export const SLOT = 20;

export type StepErrors = Partial<Record<string, string>>;
export interface Busy {
  s: number;
  e: number;
  label: string;
}

/** Up to two working days ahead can only be booked as an express shipment. */
export function needsExpress(date: string, today: string): boolean {
  let n = 0;
  let x = today;
  while (x < date) {
    x = addDays(x, 1);
    if (dayOfWeek(x) < 5) n++;
  }
  return n <= 2;
}

export type DayState = 'past' | 'closed' | 'express' | 'ok';
export function dayState(date: string, today: string): DayState {
  if (diffDays(date, today) <= 0) return 'past';
  if (dayOfWeek(date) > 4) return 'closed';
  return needsExpress(date, today) ? 'express' : 'ok';
}

/** Mock day forecast for the date cards: [icon, lowOffset] (weather API in the real app). */
export function dayWeather(date: string): {
  icon: 'sun' | 'partly' | 'cloud' | 'rain';
  level: number;
} {
  const k = (+date.slice(8, 10) * 7 + +date.slice(5, 7)) % 6;
  return (
    [
      { icon: 'rain', level: 3 },
      { icon: 'sun', level: 0 },
      { icon: 'cloud', level: 2 },
      { icon: 'partly', level: 1 },
      { icon: 'cloud', level: 5 },
      { icon: 'sun', level: 4 },
    ] as const
  )[k];
}

/** Mock hourly forecast for the slot grid. */
export function hourWeather(
  hour: number,
  date: string,
): { icon: 'sun' | 'partly' | 'cloud' | 'rain'; label: string } {
  const k = (hour + +(date || '2026-01-01').slice(8, 10)) % 5;
  return (
    [
      { icon: 'sun', label: 'Sunny' },
      { icon: 'partly', label: 'Partly cloudy' },
      { icon: 'cloud', label: 'Cloudy' },
      { icon: 'rain', label: 'Rain' },
      { icon: 'sun', label: 'Sunny' },
    ] as const
  )[k];
}

/** Booked blocks at an unloading point on a day: other shipments + fixed site blocks. */
export function busyAt(date: string, up: string, shipments: Shipment[], ignoreId?: string): Busy[] {
  if (!date || !up) return [];
  const list = shipments
    .filter(
      (s) =>
        s.date === date &&
        s.up === up &&
        s.id !== ignoreId &&
        s.status !== 'Canceled' &&
        s.status !== 'Rejected',
    )
    .map((s) => ({ s: toMinutes(s.start), e: toMinutes(s.end), label: s.no }));
  const seed = +date.slice(8, 10);
  const fixed: Busy[] =
    up === 'UP 01'
      ? [
          { s: 440, e: 480, label: 'Elevator CR1' },
          { s: 720 + (seed % 3) * 20, e: 760 + (seed % 3) * 20, label: 'Crane 2' },
        ]
      : [{ s: 600, e: 660, label: 'Street closed' }];
  return [...fixed, ...list].filter((b) => b.e > DAY_START && b.s < DAY_END);
}

/** Booked times of special equipment on a day (mock). */
export function equipmentBusy(date: string, id: string): { s: number; e: number }[] {
  if (!date) return [];
  const seed = +date.slice(8, 10);
  return id === 'crane5'
    ? [
        { s: 480 + (seed % 2) * 20, e: 520 + (seed % 2) * 20 },
        { s: 840, e: 900 },
      ]
    : [{ s: 780, e: 840 }];
}

export function overlaps(start: number, end: number, busy: { s: number; e: number }[]): boolean {
  return busy.some((b) => start < b.e && end > b.s);
}

/** Free gaps of at least 40 minutes, aligned to 20-minute slots. */
export function freeSlots(busy: Busy[]): [number, number][] {
  const sorted = [...busy].sort((x, y) => x.s - y.s);
  const out: [number, number][] = [];
  let t = DAY_START;
  const up20 = (m: number) => Math.ceil(m / SLOT) * SLOT;
  sorted.forEach((x) => {
    if (x.s - t >= 40) out.push([t, x.s]);
    t = Math.max(t, up20(x.e));
  });
  if (DAY_END - t >= 40) out.push([t, DAY_END]);
  return out;
}

export function recommendedVehicle(materialIds: string[]): string | null {
  if (materialIds.includes('concrete')) return 'fahrmischer';
  if (materialIds.includes('rebar') || materialIds.includes('steel')) return 'sattelzug';
  if (materialIds.includes('ducts')) return 'anhaenger';
  return materialIds.length ? 'solo-ab-7-5' : null;
}

export function durationLabel(start: string, end: string): string {
  if (!start || !end) return '—';
  const m = toMinutes(end) - toMinutes(start);
  return `${Math.floor(m / 60)} h ${m % 60} min`;
}

/** Errors of one step; an empty object means the step is complete. */
export function stepErrors(
  step: number,
  d: ShipmentDraft,
  today: string,
  shipments: Shipment[],
): StepErrors {
  const e: StepErrors = {};
  if (step === 1) {
    if (!d.name.trim()) e['name'] = 'Shipment name is required';
    if (!d.sender) e['sender'] = 'Organization is required';
    if (!d.date) e['date'] = 'Pick a date';
    else if (needsExpress(d.date, today) && !d.express)
      e['date'] = 'This date is only bookable as express shipment';
    if (!d.wpId) e['wp'] = 'Choose the working package this shipment belongs to';
  }
  if (step === 2) {
    (['recipient', 'building', 'floor', 'zone'] as const).forEach((k) => {
      if (!d[k]) e[k] = 'Required';
    });
    if (!d.materials.length) e['materials'] = 'Add at least one material';
  }
  if (step === 3) {
    if (!d.vehicle) e['vehicle'] = 'Choose a vehicle';
    if (!(d.vehicles >= 1)) e['vehicles'] = 'At least 1';
  }
  if (step === 4) {
    if (!d.up) e['up'] = 'Choose an unloading point';
    if (!d.start || !d.end) e['slot'] = 'Pick a time slot';
    else if (toMinutes(d.end) <= toMinutes(d.start))
      e['slot'] = 'End time must be after start time';
    else if (
      overlaps(toMinutes(d.start), toMinutes(d.end), busyAt(d.date, d.up, shipments, d.editId))
    )
      e['slot'] = 'This time overlaps with another booking';
  }
  if (step === 5) {
    if (!d.origin.trim()) e['origin'] = 'Address is required for the CO₂ report';
    if (d.multi && !d.modes.length) e['modes'] = 'Choose at least one transport mode';
  }
  return e;
}

export function isStepValid(
  step: number,
  d: ShipmentDraft,
  today: string,
  shipments: Shipment[],
): boolean {
  return Object.keys(stepErrors(step, d, today, shipments)).length === 0;
}

/** Times offered in the start / end selects (20-minute grid). */
export const SLOT_TIMES = (() => {
  const t: string[] = [];
  for (let m = DAY_START; m <= DAY_END; m += SLOT) t.push(fromMinutes(m));
  return t;
})();
