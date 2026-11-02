/**
 * Excel / CSV import rules for working packages (prototype: upload.js → rowErrors, parseCsv, simulatedRows).
 * Pure functions — unit-tested in upload-rows.spec.ts. The real import should validate on the server too.
 */
import { BUILDINGS, TRADES } from '../../data/reference-data';

export interface UploadRow {
  title?: string;
  trade?: string;
  sender?: string;
  recipient?: string;
  building?: string;
  floor?: string;
  zone?: string;
  from?: string;
  to?: string;
  volume?: string;
}
export type UploadField = keyof UploadRow;
export interface RowError {
  field: UploadField;
  message: string;
}

export const UPLOAD_COLUMNS: { key: UploadField; label: string }[] = [
  { key: 'title', label: 'Title' },
  { key: 'trade', label: 'Trade' },
  { key: 'sender', label: 'Sender' },
  { key: 'recipient', label: 'Recipient' },
  { key: 'building', label: 'Building' },
  { key: 'floor', label: 'Floor' },
  { key: 'zone', label: 'Zone' },
  { key: 'from', label: 'Date from' },
  { key: 'to', label: 'Date to' },
];

const REQUIRED: [UploadField, string][] = [
  ['title', 'Title'],
  ['sender', 'Sender'],
  ['recipient', 'Recipient'],
  ['building', 'Building'],
  ['floor', 'Floor'],
  ['from', 'Date from'],
  ['to', 'Date to'],
];
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export function rowErrors(r: UploadRow): RowError[] {
  const e: RowError[] = [];
  REQUIRED.forEach(([k, l]) => {
    if (!String(r[k] || '').trim()) e.push({ field: k, message: `“${l}” is required` });
  });
  (['from', 'to'] as const).forEach((k) => {
    if (r[k] && !ISO.test(r[k]!)) e.push({ field: k, message: 'Use the date format YYYY-MM-DD' });
  });
  if (r.from && r.to && ISO.test(r.from) && ISO.test(r.to) && r.to < r.from)
    e.push({ field: 'to', message: '“Date to” is before “Date from”' });
  if (r.trade && !(r.trade in TRADES))
    e.push({ field: 'trade', message: `Trade “${r.trade}” does not exist` });
  if (r.building && !BUILDINGS.includes(r.building))
    e.push({ field: 'building', message: `Building “${r.building}” does not exist on this site` });
  return e;
}

/** CSV with ; or , separators, quoted values and dd.mm.yyyy or ISO dates. */
export function parseCsv(text: string): UploadRow[] {
  const lines = text
    .replace(/\r/g, '')
    .split('\n')
    .filter((l) => l.trim());
  if (lines.length < 2) return [];
  const sep = lines[0].includes(';') ? ';' : ',';
  const split = (l: string) => {
    const out: string[] = [];
    let cur = '';
    let quoted = false;
    for (const ch of l) {
      if (ch === '"') quoted = !quoted;
      else if (ch === sep && !quoted) {
        out.push(cur);
        cur = '';
      } else cur += ch;
    }
    out.push(cur);
    return out.map((x) => x.trim());
  };
  const head = split(lines[0].replace(/^\uFEFF/, '')).map((h) =>
    h.toLowerCase().replace(/[^a-z]/g, ''),
  );
  const map: Record<string, UploadField> = {
    title: 'title',
    trade: 'trade',
    sender: 'sender',
    recipient: 'recipient',
    building: 'building',
    floor: 'floor',
    zone: 'zone',
    datefrom: 'from',
    from: 'from',
    dateto: 'to',
    to: 'to',
    volume: 'volume',
  };
  const toIso = (v: string) => {
    const m = v.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    return m ? `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}` : v;
  };
  return lines.slice(1).map((l) => {
    const c = split(l);
    const r: UploadRow = {};
    head.forEach((h, i) => {
      const k = map[h];
      if (k) r[k] = k === 'from' || k === 'to' ? toIso(c[i] || '') : c[i] || '';
    });
    return r;
  });
}

/** .xlsx parsing is simulated in the front-end demo (the real import parses on the server). */
export function simulatedRows(): UploadRow[] {
  return [
    {
      title: 'Lüftungszentrale Dach Bau 06',
      trade: 'Lüftung',
      sender: 'Team pRED',
      recipient: 'Organization P',
      building: 'Bau 06',
      floor: 'OG 03',
      zone: 'Crane zone',
      from: '2026-11-09',
      to: '2027-02-26',
    },
    {
      title: 'Sprinkleranlage UG',
      trade: 'Heizung/Kühlung',
      sender: 'Hälg & Co. AG',
      recipient: 'Team Intel',
      building: 'Bau 04',
      floor: 'UG 02',
      zone: 'Lay Area 14',
      from: '2026-11-16',
      to: '2027-01-29',
    },
    {
      title: 'Elektro Steigzonen',
      trade: 'Elektro',
      sender: 'B. Braun Medical AG',
      recipient: 'Organization P',
      building: 'Bau 06',
      floor: 'EG',
      zone: 'Lay Area 25',
      from: '2026-11-02',
      to: '2026-12-18',
    },
    {
      title: 'Rückbau Altbau Nord',
      trade: 'Rückbau',
      sender: 'Biffco Enterprises',
      recipient: 'Team Intel',
      building: '',
      floor: 'EG',
      zone: 'Yard North',
      from: '2026-11-23',
      to: '2027-03-12',
    },
    {
      title: 'Holzfassade West',
      trade: 'Holzbau',
      sender: 'Hydroplant AG',
      recipient: 'Organization P',
      building: 'Bau 01',
      floor: 'OG 02',
      zone: 'Lay Area 26',
      from: '2027-01-11',
      to: '2027-04-30',
    },
    {
      title: 'Betonage Bodenplatte Bau 02',
      trade: 'Baumeister',
      sender: 'ERNA AG',
      recipient: 'Organization P',
      building: 'Bau 02',
      floor: 'UG 01',
      zone: 'Crane zone',
      from: '2026-11-30',
      to: '2027-01-22',
    },
    {
      title: 'Kältezentrale',
      trade: 'Heizung/Kühlung',
      sender: 'Hälg & Co. AG',
      recipient: 'Organization P',
      building: 'Bau 04',
      floor: 'UG 04',
      zone: 'Lay Area 12',
      from: '2026-12-07',
      to: '2027-03-26',
    },
    {
      title: 'Kabelzug Hauptverteilung',
      trade: 'Elektro',
      sender: 'B. Braun Medical AG',
      recipient: 'Team Intel',
      building: 'Bau 01',
      floor: 'UG 01',
      zone: 'Lay Area 03',
      from: '2026-11-09',
      to: '2026-12-11',
    },
    {
      title: 'Schalung Treppenhaus',
      trade: 'Baumeister',
      sender: 'ERNA AG',
      recipient: 'Organization P',
      building: 'Bau 06',
      floor: 'OG 02',
      zone: 'Lay Area 26',
      from: '2026-12-14',
      to: '2026-11-30',
    },
    {
      title: 'Lüftungskanäle OG 02',
      trade: 'Lüftung',
      sender: 'Team pRED',
      recipient: 'Organization P',
      building: 'Bau 06',
      floor: 'OG 02',
      zone: 'Lay Area 25',
      from: '2026-11-16',
      to: '2027-01-15',
    },
    {
      title: 'Dämmung Dach',
      trade: 'Holzbau',
      sender: 'Hydroplant AG',
      recipient: 'Organization P',
      building: 'Bau 04',
      floor: 'OG 03',
      zone: 'Crane zone',
      from: '2027-02-01',
      to: '2027-03-31',
    },
    {
      title: 'Beleuchtung Tiefgarage',
      trade: 'Elektro',
      sender: 'B. Braun Medical AG',
      recipient: 'Organization P',
      building: 'Bau 04',
      floor: 'UG 04',
      zone: 'Lay Area 12',
      from: '2026-12-01',
      to: '2027-02-12',
    },
  ];
}
