/** Step 1 · Date: name, organization, express, date, working package (prototype: create.js → step1). */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateFilterFn, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmCalendarHeader } from '../../../core/date/clm-calendar-header';
import {
  addDays,
  dayName,
  fmtDate,
  isoWeek,
  mondayOf,
  monthName,
} from '../../../core/date/iso-date';
import { DATE_MAX, ORGS } from '../../../data/reference-data';
import { WpCard } from '../../../shared/ui/wp-card';
import { WorkingPackageDialogs } from '../../working-package/working-package-dialogs';
import { CreateContext } from '../create-context';
import { dayState, dayWeather, needsExpress } from '../create-rules';
import { withWorkingPackage } from '../shipment-draft';

@Component({
  selector: 'clm-step-date',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    WpCard,
  ],
  templateUrl: './step-date.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepDate {
  protected readonly ctx = inject(CreateContext);
  private readonly wpDialogs = inject(WorkingPackageDialogs);
  protected readonly d = this.ctx.d;
  protected readonly orgs = ORGS;
  protected readonly calendarHeader = ClmCalendarHeader;
  protected readonly wpQuery = signal('');
  protected readonly wpAll = signal(false);
  protected readonly expressFlash = signal(false);

  protected readonly minDate = computed(() => toDate(addDays(this.ctx.today, 1)));
  protected readonly maxDate = toDate(DATE_MAX);
  protected readonly selectedDate = computed(() => (this.d().date ? toDate(this.d().date) : null));
  /** Weekends and (without "Express") the next two working days can't be picked */
  protected readonly dateFilter = computed<DateFilterFn<Date | null>>(() => {
    const express = this.d().express;
    return (date) => {
      if (!date) return false;
      const st = dayState(toIsoLocal(date), this.ctx.today);
      return st === 'ok' || (st === 'express' && express);
    };
  });

  protected readonly weekLabel = computed(
    () =>
      `${monthName(this.d().weekStart)} ${this.d().weekStart.slice(0, 4)} · Week ${isoWeek(this.d().weekStart)}`,
  );
  protected readonly canPrevWeek = computed(() => this.d().weekStart > mondayOf(this.ctx.today));
  protected readonly days = computed(() =>
    Array.from({ length: 7 }, (_, i) => {
      const date = addDays(this.d().weekStart, i);
      const state = dayState(date, this.ctx.today);
      const w = dayWeather(date);
      const off =
        state === 'past' || state === 'closed' || (state === 'express' && !this.d().express);
      const tip =
        state === 'closed'
          ? 'Weekends are closed'
          : state === 'past'
            ? 'This day is in the past'
            : state === 'express' && !this.d().express
              ? 'Tick “Express shipment” to book this day'
              : '';
      return {
        date,
        label: `${+date.slice(8)}, ${dayName(date)}`,
        state,
        off,
        tip,
        icon: w.icon,
        lo: 10 + w.level,
        hi: 16 + w.level,
        wind: 2 + w.level,
      };
    }),
  );

  protected readonly wps = computed(() => {
    const d = this.d();
    const store = this.ctx.store;
    const open = store.wps().filter((w) => store.wpStatus(w) !== 'completed');
    const q = this.wpQuery().trim().toLowerCase();
    let list = d.wpLocked
      ? open.filter((w) => w.id === d.wpId)
      : open.filter(
          (w) => !q || [w.title, w.trade, w.sender, w.building].join(' ').toLowerCase().includes(q),
        );
    if (!d.wpLocked && !this.wpAll() && !q)
      list = list.filter((w) => w.sender === d.sender || w.id === d.wpId);
    return list.map((w) => {
      const st = store.wpStats(w);
      return {
        w,
        status: store.wpStatus(w),
        dates: `${fmtDate(w.from)} - ${fmtDate(w.to)}`,
        counts: { open: st.open, approved: st.approved, completed: st.done, draft: st.canceled },
      };
    });
  });

  protected readonly outside = computed(() => {
    const d = this.d();
    const wp = this.ctx.store.wp(d.wpId);
    return wp && d.date && (d.date < wp.from || d.date > wp.to) ? wp : null;
  });

  protected fmtDate = fmtDate;

  protected setSender(sender: string): void {
    this.ctx.set({ sender });
  }

  protected setExpress(express: boolean): void {
    const d = this.d();
    this.ctx.set(
      { express, date: !express && d.date && needsExpress(d.date, this.ctx.today) ? '' : d.date },
      'date',
    );
  }

  protected pickDay(day: { date: string; state: string }): void {
    if (day.state === 'past' || day.state === 'closed') return;
    if (day.state === 'express' && !this.d().express) {
      this.ctx.toast.show(
        'This day is only bookable as express shipment. Tick “Express shipment” first.',
      );
      this.expressFlash.set(true);
      setTimeout(() => this.expressFlash.set(false), 900);
      return;
    }
    this.setDate(day.date);
  }

  protected pickDate(date: Date | null): void {
    if (date) this.setDate(toIsoLocal(date), true);
  }

  protected week(step: -1 | 1): void {
    this.ctx.set({ weekStart: addDays(this.d().weekStart, step * 7) });
  }

  protected pickWp(id: string): void {
    const wp = this.ctx.store.wp(id);
    if (wp && !this.d().wpLocked) this.ctx.set(withWorkingPackage(this.d(), wp), 'wp');
  }

  protected newWp(): void {
    this.wpDialogs.open();
  }

  private setDate(date: string, moveWeek = false): void {
    // a new date clears a time slot that no longer fits
    this.ctx.set(
      { date, ...(moveWeek ? { weekStart: mondayOf(date) } : {}), start: '', end: '' },
      'date',
    );
  }
}

function toDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function toIsoLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
