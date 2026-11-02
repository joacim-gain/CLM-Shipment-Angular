/**
 * {{ '2026-10-27' | clmDate }}                → 27.10.2026
 * {{ '2026-10-27' | clmDate: 'day' }}         → Tue, 27.10.2026
 * {{ '2026-10-27' | clmDate: 'short' }}       → 27.10.26
 * {{ '2026-10-20T08:12' | clmDate: 'time' }}  → 20.10.2026, 08:12
 */
import { Pipe, PipeTransform } from '@angular/core';
import { dayName, fmtDate, fmtDateTime, fmtShort } from './iso-date';

@Pipe({ name: 'clmDate' })
export class ClmDatePipe implements PipeTransform {
  transform(
    iso: string | null | undefined,
    style: 'date' | 'day' | 'short' | 'time' = 'date',
  ): string {
    if (!iso) return '';
    switch (style) {
      case 'day':
        return `${dayName(iso)}, ${fmtDate(iso)}`;
      case 'short':
        return fmtShort(iso);
      case 'time':
        return fmtDateTime(iso);
      default:
        return fmtDate(iso);
    }
  }
}
