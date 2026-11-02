/**
 * Demo data — a 1:1 port of the prototype's deterministic generator (data.js), so the Angular app
 * shows exactly the same working packages and shipments. "Today" is 25.10.2026.
 *
 * Replace with API calls in the real app. Keep it for unit tests and Storybook-style previews.
 */
import { addDays, diffDays, dayOfWeek } from '../core/date/iso-date';
import { DEMO_TODAY } from '../core/date/today';
import {
  AppNotification,
  Shipment,
  ShipmentStatus,
  Trade,
  UploadRecord,
  UploadStatus,
  WorkingPackage,
} from './clm.model';
import { GATES, MATERIALS, PEOPLE, TRADES } from './reference-data';

export interface ClmData {
  wps: WorkingPackage[];
  shipments: Shipment[];
  uploads: UploadRecord[];
  notifications: AppNotification[];
}

const WPS: WorkingPackage[] = [
  {
    id: 'wp1',
    title: 'Erne Bauunternehmung Bau 34-A32',
    trade: 'Lüftung',
    sender: 'Team pRED',
    recipient: 'Organization P',
    building: 'Bau 06',
    floor: 'OG 01',
    zone: 'Lay Area 25',
    from: '2026-09-01',
    to: '2026-12-18',
    volume: '420 m³',
    units: 'Truck loads',
    unitsQty: 38,
  },
  {
    id: 'wp2',
    title: 'Anlieferung Bohrgerät',
    trade: 'Baumeister',
    sender: 'Team pRED',
    recipient: 'Organization P',
    building: 'Bau 04',
    floor: 'UG 01',
    zone: 'Lay Area 12',
    from: '2026-06-15',
    to: '2026-11-20',
    volume: '—',
    units: 'Truck loads',
    unitsQty: 17,
  },
  {
    id: 'wp3',
    title: 'Stickstofftank Vereisung',
    trade: 'Rückbau',
    sender: 'Biffco Enterprises',
    recipient: 'Team Intel',
    building: 'Bau 02',
    floor: 'EG',
    zone: 'Yard North',
    from: '2026-08-03',
    to: '2026-11-13',
    volume: '12 tanks',
    units: 'Containers',
    unitsQty: 13,
  },
  {
    id: 'wp4',
    title: 'Fassadenelemente Nord',
    trade: 'Holzbau',
    sender: 'Hydroplant AG',
    recipient: 'Organization P',
    building: 'Bau 06',
    floor: 'OG 02',
    zone: 'Lay Area 26',
    from: '2026-11-02',
    to: '2027-01-15',
    volume: '86 elements',
    units: 'Truck loads',
    unitsQty: 9,
  },
  {
    id: 'wp5',
    title: 'Hälg & Co. AG Heizung',
    trade: 'Heizung/Kühlung',
    sender: 'Hälg & Co. AG',
    recipient: 'Team Intel',
    building: 'Bau 01',
    floor: 'OG 01',
    zone: 'Lay Area 03',
    from: '2026-07-01',
    to: '2026-10-19',
    volume: '—',
    units: 'EUR pallets',
    unitsQty: 60,
  },
  {
    id: 'wp6',
    title: 'Kabeltrassen UG',
    trade: 'Elektro',
    sender: 'B. Braun Medical AG',
    recipient: 'Organization P',
    building: 'Bau 04',
    floor: 'UG 02',
    zone: 'Lay Area 14',
    from: '2026-09-14',
    to: '2026-12-30',
    volume: '2.4 km',
    units: 'Bundles',
    unitsQty: 24,
  },
  {
    id: 'wp7',
    title: 'Betonage Decke OG 03',
    trade: 'Baumeister',
    sender: 'ERNA AG',
    recipient: 'Organization P',
    building: 'Bau 06',
    floor: 'OG 03',
    zone: 'Crane zone',
    from: '2026-09-21',
    to: '2026-11-27',
    volume: '640 m³',
    units: 'm³',
    unitsQty: 640,
  },
  {
    id: 'wp8',
    title: 'Kanäle U46 Montage',
    trade: 'Lüftung',
    sender: 'Team pRED',
    recipient: 'Organization P',
    building: 'Bau 04',
    floor: 'UG 04',
    zone: 'Lay Area 25',
    from: '2026-05-04',
    to: '2026-09-30',
    volume: '180 pcs',
    units: 'Truck loads',
    unitsQty: 8,
    completed: true,
  },
];

const DESC: Record<Trade, string[]> = {
  Lüftung: [
    'Montage der Kanäle',
    'Lüftungsgerät Dach',
    'Brandschutzklappen',
    'Kanalformteile',
    'Monoblock RLT',
  ],
  Baumeister: [
    'Bohrgerät Anlieferung',
    'Schalung Decke',
    'Bewehrung Stützen',
    'Beton C30/37',
    'Kies Hinterfüllung',
  ],
  Rückbau: ['Stickstofftank', 'Vereisungsrohre', 'Container Mulden', 'Kompressor'],
  Holzbau: ['Fassadenelemente', 'Brettschichtholz', 'Dämmplatten'],
  'Heizung/Kühlung': ['Wärmepumpe', 'Heizverteiler', 'Rohrleitungen', 'Kältemaschine'],
  Elektro: ['Kabeltrassen', 'Kabeltrommeln', 'Verteilerschrank', 'Leuchten'],
};
const MAT_BY_TRADE: Record<Trade, string[]> = {
  Lüftung: ['ducts', 'insulation'],
  Baumeister: ['concrete', 'rebar', 'formwork', 'gravel'],
  Rückbau: ['nitrogen', 'pipes'],
  Holzbau: ['timber', 'insulation', 'glass'],
  'Heizung/Kühlung': ['heat-pump', 'pipes'],
  Elektro: ['cable-trays', 'copper'],
};
const VEH_BY_TRADE: Record<Trade, string[]> = {
  Lüftung: ['anhaenger', 'lkw-30', 'solo-ab-7-5'],
  Baumeister: ['fahrmischer', 'sattelzug', 'lkw-40'],
  Rückbau: ['lieferwagen', 'lkw-30'],
  Holzbau: ['sattelzug', 'anhaenger'],
  'Heizung/Kühlung': ['solo-bis-7-5', 'lkw-30'],
  Elektro: ['solo-ab-7-5', 'solo-bis-7-5'],
};
const SLOTS = [
  ['07:00', '07:40'],
  ['07:40', '08:20'],
  ['08:00', '09:00'],
  ['09:20', '11:20'],
  ['10:00', '10:40'],
  ['11:20', '12:00'],
  ['12:20', '14:00'],
  ['13:00', '13:40'],
  ['14:20', '15:00'],
  ['15:40', '16:20'],
];
const COUNTS: Record<string, number> = {
  wp1: 13,
  wp2: 17,
  wp3: 13,
  wp4: 2,
  wp5: 13,
  wp6: 6,
  wp7: 6,
  wp8: 8,
};

export function buildDemoData(): ClmData {
  const TODAY = DEMO_TODAY;
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const pick = <T>(a: readonly T[]): T => a[Math.floor(rnd() * a.length)];

  const wps = structuredClone(WPS);
  const shipments: Shipment[] = [];
  let no = 880;
  const bnum = (b: string) => b.replace('Bau ', 'B');
  const fnum = (f: string) => f.replace(' ', '');

  wps.forEach((wp) => {
    const n = COUNTS[wp.id];
    const end = wp.completed ? wp.to : addDays(TODAY, 32) < wp.to ? addDays(TODAY, 32) : wp.to;
    const start =
      wp.id === 'wp4'
        ? '2026-11-03'
        : diffDays(wp.from, addDays(TODAY, -42)) < 0
          ? addDays(TODAY, -42)
          : wp.from;
    const span = Math.max(1, diffDays(end, start));
    for (let i = 0; i < n; i++) {
      let date = addDays(start, Math.round((span * (i + 0.5)) / n));
      while (dayOfWeek(date) > 4) date = addDays(date, 1);
      const [t1, t2] = pick(SLOTS);
      const past = diffDays(date, TODAY) < 0;
      let status: ShipmentStatus;
      if (wp.completed) status = 'Completed';
      else if (wp.id === 'wp4') status = 'Open';
      else if (past) status = rnd() < 0.86 ? 'Completed' : 'Canceled';
      else if (diffDays(date, TODAY) <= 2)
        status = pick<ShipmentStatus>(['Approved', 'Approved', 'Waiting', 'Open']);
      else status = rnd() < 0.55 ? 'Open' : 'Approved';
      const desc = pick(DESC[wp.trade]);
      const matId = pick(MAT_BY_TRADE[wp.trade]);
      const mat = MATERIALS.find((m) => m.id === matId)!;
      no += 1 + Math.floor(rnd() * 3);
      // property order matters: it keeps the random sequence identical to the prototype
      const up = pick(['UP 01', 'UP 01', 'UP 02']);
      const vehicle = pick(VEH_BY_TRADE[wp.trade]);
      const qty = mat.unit === 'm³' ? 8 * (1 + Math.floor(rnd() * 3)) : 2 + Math.floor(rnd() * 30);
      const hasCrane = rnd() < 0.6;
      const createdBy = pick(PEOPLE).id;
      const created =
        addDays(date, -6 - Math.floor(rnd() * 10)) +
        'T' +
        pick(['08:12', '09:45', '13:20', '16:05']);
      const plate = 'ZH ' + (100 + Math.floor(rnd() * 800)) + ' ' + (100 + Math.floor(rnd() * 800));
      const km = 8 + Math.floor(rnd() * 40);
      shipments.push({
        id: 's' + no,
        no: `${no}-${wp.sender.split(' ').slice(-1)[0]}`,
        name: `${bnum(wp.building)}-${fnum(wp.floor)}-${TRADES[wp.trade].short}_${desc}`,
        wpId: wp.id,
        date,
        start: t1,
        end: t2,
        status,
        sender: wp.sender,
        recipient: wp.recipient,
        building: wp.building,
        floor: wp.floor,
        zone: wp.zone,
        up,
        vehicle,
        vehicles: 1,
        materials: [{ id: matId, qty, unit: mat.unit, note: '' }],
        equipment: hasCrane
          ? [
              {
                id: 'crane5',
                kind: 'booked',
                start: t1,
                end: t1.replace(
                  /:(\d\d)/,
                  (_m, mm) => ':' + String(Math.min(59, +mm + 20)).padStart(2, '0'),
                ),
                state: status === 'Open' ? 'pending' : 'approved',
              },
            ]
          : [],
        createdBy,
        onsite: 'p2',
        created,
        comments: [],
        docs: [],
        photos: [],
        annotations: [],
        activity: [],
        gate: GATES[0],
        plate,
        origin: 'Hardturmstrasse 161, 8005 Zürich',
        km,
      });
    }
  });

  // late shipments for overdue packages (still open although the date passed)
  ['wp7', 'wp7', 'wp5'].forEach((wid, k) => {
    const s = shipments
      .filter((x) => x.wpId === wid && diffDays(x.date, TODAY) < 0)
      .slice(-1 - k)[0];
    if (s) s.status = k === 2 ? 'Approved' : 'Open';
  });

  // hero shipment (used throughout the demo)
  shipments.unshift({
    id: 's908',
    no: '908-Team pRED',
    name: 'B04-UG04-Luftung_Montage der Kanäle U46',
    wpId: 'wp1',
    date: '2026-10-27',
    start: '09:20',
    end: '11:20',
    status: 'Open',
    sender: 'Team pRED',
    recipient: 'Organization P',
    building: 'Bau 06',
    floor: 'OG 01',
    zone: 'Lay Area 25',
    up: 'UP 01',
    vehicle: 'fahrmischer',
    vehicles: 1,
    materials: [{ id: 'concrete', qty: 200, unit: 'm³', note: 'Unload north side' }],
    equipment: [
      { id: 'crane5', kind: 'booked', start: '09:20', end: '09:40', state: 'pending' },
      { id: 'crane1', kind: 'onsite', pulls: 3, start: '09:20', end: '11:20' },
    ],
    createdBy: 'p1',
    onsite: 'p2',
    orderResp: 'p1',
    deliveryResp: 'p2',
    created: '2026-10-20T08:12',
    gate: GATES[0],
    plate: 'ZH 123 456',
    phone: '+41 79 123 45 67',
    origin: 'Hardturmstrasse 161, 8005 Zürich',
    km: 12,
    comments: [
      { by: 'p1', at: '2026-10-20T08:12', text: 'Please unload at the north side of Bau 06.' },
    ],
    docs: [
      {
        name: 'Delivery note_B04-UG04.pdf',
        type: 'PDF',
        size: '1.2 MB',
        by: 'p1',
        at: '2026-10-20T08:14',
      },
      {
        name: 'document info_S1234.docx',
        type: 'DOCX',
        size: '840 KB',
        by: 'p1',
        at: '2026-10-20T08:15',
      },
      {
        name: 'Site access plan.pptx',
        type: 'PPTX',
        size: '3.4 MB',
        by: 'p2',
        at: '2026-10-21T10:02',
      },
    ],
    photos: [
      'img/site-1.jpg',
      'img/site-2.jpg',
      'img/site-3.jpg',
      'img/site-2.jpg',
      'img/site-1.jpg',
    ],
    annotations: [],
    activity: [],
  });

  // activity log
  shipments.forEach((s) => {
    s.activity = [
      { at: s.created, by: s.createdBy, text: 'created the shipment', icon: 'add_circle' },
    ];
    if (s.id === 's908') {
      s.activity.push({
        at: '2026-10-20T08:14',
        by: 'p1',
        text: 'uploaded 2 documents',
        icon: 'upload_file',
      });
      s.activity.push({
        at: '2026-10-21T10:02',
        by: 'p2',
        text: 'uploaded Site access plan.pptx',
        icon: 'upload_file',
      });
      s.activity.push({
        at: '2026-10-22T07:45',
        by: 'p2',
        text: 'requested Crane 5 for 09:20 – 09:40',
        icon: 'precision_manufacturing',
      });
    } else if (s.status !== 'Open') {
      s.activity.push({
        at: addDays(s.created.slice(0, 10), 1) + 'T09:00',
        by: 'p2',
        text: `changed status to ${s.status === 'Completed' ? 'Approved' : s.status}`,
        icon: 'sync_alt',
      });
      if (s.status === 'Completed')
        s.activity.push({
          at: s.date + 'T' + s.end,
          by: 'p2',
          text: 'changed status to Completed',
          icon: 'done_all',
        });
    }
  });

  const uploads: UploadRecord[] = [
    {
      id: 'u1',
      name: 'Working packages Bau 06.xlsx',
      by: 'max.mustermann@sample.com',
      on: '2026-10-21',
      rows: 24,
      status: 'Succeeded',
    },
    {
      id: 'u2',
      name: 'Lüftung Q4.xlsx',
      by: 'veeti.seppanen@sample.com',
      on: '2026-10-18',
      rows: 8,
      status: 'Succeeded',
    },
    {
      id: 'u3',
      name: 'Rückbau Paket.xlsx',
      by: 'max.mustermann@sample.com',
      on: '2026-10-14',
      rows: 0,
      status: 'Failed',
      errors: [
        'Row 3: "Building" is required',
        'Row 7: "Date To" is before "Date From"',
        'Row 9: Trade "Abbruch" does not exist',
      ],
    },
    {
      id: 'u4',
      name: 'Elektro UG.xlsx',
      by: 'darrell.steward@sample.com',
      on: '2026-10-12',
      rows: 5,
      status: 'Succeeded',
    },
    {
      id: 'u5',
      name: 'Holzbau Fassade.xls',
      by: 'max.mustermann@sample.com',
      on: '2026-10-07',
      rows: 12,
      status: 'Succeeded',
    },
    {
      id: 'u6',
      name: 'Import 2026-10-03.xlsx',
      by: 'max.mustermann@sample.com',
      on: '2026-10-03',
      rows: 0,
      status: 'Processing',
    },
    ...Array.from({ length: 19 }, (_, i) => {
      const day = `2026-${String(9 - Math.floor(i / 4)).padStart(2, '0')}-${String(28 - (i % 4) * 6).padStart(2, '0')}`;
      const by = pick(['max.mustermann@sample.com', 'veeti.seppanen@sample.com']);
      const rows = 3 + Math.floor(rnd() * 20);
      const status: UploadStatus = rnd() < 0.85 ? 'Succeeded' : 'Failed';
      return {
        id: 'ux' + i,
        name: `Import ${day}.xlsx`,
        by,
        on: day,
        rows,
        status,
        errors: ['Row 2: "Recipient" is required'],
      };
    }),
  ];

  const notifications: AppNotification[] = [
    {
      icon: 'warning',
      tone: 'error',
      html: '<b>Betonage Decke OG 03</b> has 2 shipments past their date',
      at: '2026-10-25T07:30',
      link: '/group/wp/wp7',
    },
    {
      icon: 'check_circle',
      tone: 'success',
      html: 'Crane 5 booking for <b>908-Team pRED</b> is waiting for approval',
      at: '2026-10-24T16:10',
      link: '/shipment/s908',
    },
    {
      icon: 'upload_file',
      tone: 'neutral',
      html: '<b>Working packages Bau 06.xlsx</b> imported · 24 rows',
      at: '2026-10-21T11:00',
      link: '/upload',
    },
  ];

  return { wps, shipments, uploads, notifications };
}
