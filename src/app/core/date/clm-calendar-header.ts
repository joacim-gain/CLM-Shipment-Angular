/**
 * Calendar header like the prototype's calendar popover (hub.js → calendarPop):
 *   ‹   October 2026   ›
 * Replaces Material's default header ("OCTOBER 2026 ▾" + arrows on the right, which also opens a year grid).
 * Use on a datepicker: <mat-datepicker [calendarHeaderComponent]="calendarHeader" />
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'clm-calendar-header',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <button
      mat-icon-button
      class="clm-icon-btn-sm"
      [disabled]="!canStep(-1)"
      (click)="step(-1)"
      aria-label="Previous month"
    >
      <mat-icon>chevron_left</mat-icon>
    </button>
    <span class="title" aria-live="polite">{{ label }}</span>
    <button
      mat-icon-button
      class="clm-icon-btn-sm"
      [disabled]="!canStep(1)"
      (click)="step(1)"
      aria-label="Next month"
    >
      <mat-icon>chevron_right</mat-icon>
    </button>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 8px 8px;
    }
    .title {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      letter-spacing: 0.15px;
      color: rgba(0, 0, 0, 0.87);
    }
    button {
      --mat-icon-button-icon-color: #54545d;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClmCalendarHeader<D> {
  private readonly calendar = inject<MatCalendar<D>>(MatCalendar);
  private readonly adapter = inject<DateAdapter<D>>(DateAdapter);
  private readonly formats = inject(MAT_DATE_FORMATS);

  constructor() {
    const cdr = inject(ChangeDetectorRef);
    this.calendar.stateChanges.pipe(takeUntilDestroyed()).subscribe(() => cdr.markForCheck());
  }

  /** "October 2026" (month names follow the date adapter's locale) */
  protected get label(): string {
    return this.adapter.format(this.calendar.activeDate, this.formats.display.monthYearLabel);
  }

  protected step(months: number): void {
    this.calendar.activeDate = this.adapter.addCalendarMonths(this.calendar.activeDate, months);
  }

  /** Arrows stop at the min / max month of the datepicker (e.g. the booking window). */
  protected canStep(months: number): boolean {
    const limit = months < 0 ? this.calendar.minDate : this.calendar.maxDate;
    if (!limit) return true;
    const month = (d: D) => this.adapter.getYear(d) * 12 + this.adapter.getMonth(d);
    const target = month(this.calendar.activeDate) + months;
    return months < 0 ? target >= month(limit) : target <= month(limit);
  }
}
