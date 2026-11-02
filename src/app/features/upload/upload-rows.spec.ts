import { parseCsv, rowErrors, simulatedRows } from './upload-rows';

describe('upload rows', () => {
  it('lists every problem of a row', () => {
    const errors = rowErrors({
      title: 'A',
      sender: 'S',
      recipient: 'R',
      building: 'Bau 99',
      floor: 'EG',
      from: '2026-12-10',
      to: '2026-12-01',
      trade: 'Abbruch',
    });
    expect(errors.map((e) => e.field)).toEqual(['to', 'trade', 'building']);
  });

  it('accepts a complete row', () => {
    expect(rowErrors(simulatedRows()[0])).toEqual([]);
  });

  it('reads CSV with ; and Swiss dates', () => {
    const rows = parseCsv(
      '﻿Title;Sender;Recipient;Building;Floor;Date from;Date to\n"Lüftung; Dach";Team pRED;Organization P;Bau 06;EG;01.12.2026;2026-12-20',
    );
    expect(rows).toEqual([
      {
        title: 'Lüftung; Dach',
        sender: 'Team pRED',
        recipient: 'Organization P',
        building: 'Bau 06',
        floor: 'EG',
        from: '2026-12-01',
        to: '2026-12-20',
      },
    ]);
  });

  it('keeps 2 broken rows in the demo file', () => {
    expect(simulatedRows().filter((r) => rowErrors(r).length)).toHaveLength(2);
  });
});
