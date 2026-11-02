import { Shipment } from '../../data/clm.model';
import { blankDraft } from './shipment-draft';
import {
  busyAt,
  dayState,
  freeSlots,
  needsExpress,
  overlaps,
  recommendedVehicle,
  stepErrors,
} from './create-rules';

const TODAY = '2026-10-25'; // Sunday

describe('create shipment rules', () => {
  it('needs express for the next two working days', () => {
    expect(needsExpress('2026-10-26', TODAY)).toBe(true);
    expect(needsExpress('2026-10-27', TODAY)).toBe(true);
    expect(needsExpress('2026-10-28', TODAY)).toBe(false);
  });

  it('classifies days for the date cards', () => {
    expect(dayState('2026-10-25', TODAY)).toBe('past');
    expect(dayState('2026-10-31', TODAY)).toBe('closed'); // Saturday
    expect(dayState('2026-10-26', TODAY)).toBe('express');
    expect(dayState('2026-10-29', TODAY)).toBe('ok');
  });

  it('finds free gaps of at least 40 minutes', () => {
    const busy = [
      { s: 7 * 60, e: 8 * 60, label: 'a' },
      { s: 9 * 60, e: 18 * 60, label: 'b' },
    ];
    expect(freeSlots(busy)).toEqual([[480, 540]]);
  });

  it('detects overlaps with bookings', () => {
    expect(overlaps(600, 640, [{ s: 620, e: 700 }])).toBe(true);
    expect(overlaps(560, 600, [{ s: 600, e: 700 }])).toBe(false);
  });

  it('includes other shipments at the same unloading point, but not canceled ones or itself', () => {
    const s = (id: string, status: Shipment['status']) =>
      ({
        id,
        no: id,
        date: '2026-10-28',
        up: 'UP 02',
        start: '12:00',
        end: '13:00',
        status,
      }) as Shipment;
    const busy = busyAt(
      '2026-10-28',
      'UP 02',
      [s('a', 'Open'), s('b', 'Canceled'), s('c', 'Approved')],
      'c',
    );
    expect(busy.map((b) => b.label)).toEqual(['Street closed', 'a']);
  });

  it('recommends a vehicle for the material', () => {
    expect(recommendedVehicle(['concrete'])).toBe('fahrmischer');
    expect(recommendedVehicle(['rebar'])).toBe('sattelzug');
    expect(recommendedVehicle([])).toBeNull();
  });

  it('validates step 1', () => {
    const d = blankDraft(TODAY);
    expect(Object.keys(stepErrors(1, d, TODAY, []))).toEqual(['name', 'date', 'wp']);
    const express = { ...d, name: 'x', wpId: 'wp1', date: '2026-10-26' };
    expect(stepErrors(1, express, TODAY, [])['date']).toBe(
      'This date is only bookable as express shipment',
    );
    expect(stepErrors(1, { ...express, express: true }, TODAY, [])).toEqual({});
  });

  it('validates the time slot', () => {
    const d = {
      ...blankDraft(TODAY),
      date: '2026-10-28',
      up: 'UP 02',
      start: '10:20',
      end: '10:40',
    };
    expect(stepErrors(4, d, TODAY, [])['slot']).toBe('This time overlaps with another booking'); // street closed 10:00–11:00
    expect(stepErrors(4, { ...d, start: '12:00', end: '13:00' }, TODAY, [])).toEqual({});
  });
});
