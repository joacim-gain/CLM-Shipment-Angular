/**
 * Date adapter for Swiss date input (dd.mm.yyyy), no extra library needed.
 *
 * Angular Material's NativeDateAdapter relies on Date.parse(), which can't read "20.10.2026".
 * This adapter keeps everything else from NativeDateAdapter and only replaces parsing and the
 * input format, so typing a date works like the prototype's date field.
 *
 * Accepted input: 20.10.2026 · 20.10.26 · 2.3.2026 · 20/10/2026 · 20-10-2026 · 2026-10-20 (ISO)
 * Shown in the field: 20.10.2026
 * Calendar: weeks start on Monday, weekday labels "Mo Tu We …" like the prototype calendar.
 */
import { Injectable, Provider } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  NativeDateAdapter,
} from '@angular/material/core';

const DMY = /^(\d{1,2})[./-](\d{1,2})[./-](\d{4}|\d{2})$/;
const ISO = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

@Injectable()
export class ChDateAdapter extends NativeDateAdapter {
  override parse(value: unknown, parseFormat?: unknown): Date | null {
    if (typeof value !== 'string') return super.parse(value, parseFormat);
    const s = value.trim();
    if (!s) return null;

    let day: number, month: number, year: number;
    const dmy = DMY.exec(s);
    const iso = ISO.exec(s);
    if (dmy) {
      [day, month, year] = [+dmy[1], +dmy[2], +dmy[3]];
      if (dmy[3].length === 2) year += 2000;
    } else if (iso) {
      [year, month, day] = [+iso[1], +iso[2], +iso[3]];
    } else {
      return this.invalid();
    }

    // Reject impossible dates such as 31.02.2026 instead of rolling them over to March.
    const d = new Date(year, month - 1, day);
    return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day
      ? d
      : this.invalid();
  }

  override format(date: Date, displayFormat: object): string {
    if (displayFormat === CH_DATE_FORMATS.display.dateInput) {
      if (!this.isValid(date)) throw Error('ChDateAdapter: Cannot format invalid date.');
      return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
    }
    return super.format(date, displayFormat);
  }

  /** Prototype calendar shows two-letter weekdays (Mo, Tu, …) instead of Material's single letters. */
  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return style === 'narrow'
      ? super.getDayOfWeekNames('short').map((d) => d.slice(0, 2))
      : super.getDayOfWeekNames(style);
  }

  override getFirstDayOfWeek(): number {
    return 1; // Monday
  }
}

export const CH_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: null },
  display: {
    dateInput: { year: 'numeric', month: '2-digit', day: '2-digit' },
    monthLabel: { month: 'short' },
    monthYearLabel: { year: 'numeric', month: 'long' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

/**
 * Add to the app providers instead of provideNativeDateAdapter().
 * `locale` only affects month and weekday names (the input is always dd.mm.yyyy);
 * pass the user's language, e.g. 'de-CH' or 'fr-CH', when the app switches language.
 */
export function provideChDateAdapter(locale = 'en-GB'): Provider[] {
  return [
    { provide: DateAdapter, useClass: ChDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: CH_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: locale },
  ];
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}
