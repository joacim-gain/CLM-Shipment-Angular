import {
  addDays,
  dayOfWeek,
  diffDays,
  fmtDate,
  fmtDateTime,
  fromMinutes,
  isoWeek,
  mondayOf,
  relative,
  toMinutes,
} from './iso-date';

describe('iso-date', () => {
  it('adds days across month ends', () => {
    expect(addDays('2026-10-30', 3)).toBe('2026-11-02');
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28');
  });

  it('counts days between dates', () => {
    expect(diffDays('2026-11-02', '2026-10-25')).toBe(8);
    expect(diffDays('2026-10-25', '2026-11-02')).toBe(-8);
  });

  it('starts weeks on Monday', () => {
    expect(dayOfWeek('2026-10-26')).toBe(0); // Monday
    expect(dayOfWeek('2026-11-01')).toBe(6); // Sunday
    expect(mondayOf('2026-10-29')).toBe('2026-10-26');
  });

  it('uses ISO week numbers', () => {
    expect(isoWeek('2026-10-26')).toBe(44);
    expect(isoWeek('2027-01-01')).toBe(53);
  });

  it('formats Swiss style', () => {
    expect(fmtDate('2026-10-27')).toBe('27.10.2026');
    expect(fmtDate(null)).toBe('—');
    expect(fmtDateTime('2026-10-20T08:12')).toBe('20.10.2026, 08:12');
  });

  it('describes relative dates', () => {
    expect(relative('2026-10-25', '2026-10-25')).toBe('today');
    expect(relative('2026-10-28', '2026-10-25')).toBe('in 3 days');
    expect(relative('2026-09-27', '2026-10-25')).toBe('4 weeks ago');
  });

  it('converts times', () => {
    expect(toMinutes('07:40')).toBe(460);
    expect(fromMinutes(460)).toBe('07:40');
  });
});
