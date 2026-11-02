/**
 * "Today" for the whole app, as an injection token so it can be fixed in the demo and in tests.
 * The demo data is built around 25.10.2026 (as in the prototype). In production, provide the real date
 * (see app.config.ts): { provide: TODAY, useFactory: () => new Date().toISOString().slice(0, 10) }
 */
import { InjectionToken } from '@angular/core';
import { IsoDate } from './iso-date';

export const DEMO_TODAY: IsoDate = '2026-10-25';
export const TODAY = new InjectionToken<IsoDate>('CLM today', {
  providedIn: 'root',
  factory: () => DEMO_TODAY,
});
