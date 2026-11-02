import { TestBed } from '@angular/core/testing';
import { DateAdapter } from '@angular/material/core';
import { CH_DATE_FORMATS, ChDateAdapter, provideChDateAdapter } from './ch-date-adapter';

describe('ChDateAdapter', () => {
  let adapter: ChDateAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideChDateAdapter()] });
    adapter = TestBed.inject(DateAdapter) as ChDateAdapter;
  });

  const ymd = (d: Date | null) =>
    d && adapter.isValid(d) ? [d.getFullYear(), d.getMonth() + 1, d.getDate()] : null;

  it('reads typed Swiss dates', () => {
    expect(ymd(adapter.parse('20.10.2026', null))).toEqual([2026, 10, 20]);
    expect(ymd(adapter.parse('2.3.27', null))).toEqual([2027, 3, 2]);
    expect(ymd(adapter.parse('20/11/2026', null))).toEqual([2026, 11, 20]);
    expect(ymd(adapter.parse('2026-12-01', null))).toEqual([2026, 12, 1]);
  });

  it('rejects impossible or unreadable dates', () => {
    expect(adapter.isValid(adapter.parse('31.02.2026', null)!)).toBe(false);
    expect(adapter.isValid(adapter.parse('hello', null)!)).toBe(false);
    expect(adapter.parse('', null)).toBeNull();
  });

  it('shows dd.mm.yyyy and Monday-first, two-letter weekdays', () => {
    expect(adapter.format(new Date(2026, 9, 5), CH_DATE_FORMATS.display.dateInput)).toBe(
      '05.10.2026',
    );
    expect(adapter.getFirstDayOfWeek()).toBe(1);
    expect(adapter.getDayOfWeekNames('narrow')[1]).toBe('Mo');
  });
});
