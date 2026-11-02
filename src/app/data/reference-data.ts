/**
 * Reference data and fixed rules, ported from the prototype (data.js).
 * In the real app most lists come from the API (people, vehicles, materials, equipment, sites…);
 * the statuses, colours and status flow are product rules and stay in the front end.
 */
import {
  Equipment,
  Material,
  Person,
  ShipmentStatus,
  StatusMeta,
  Trade,
  TradeMeta,
  UnloadingPoint,
  Vehicle,
  WpStatus,
  WpStatusMeta,
} from './clm.model';

export const TRADES: Record<Trade, TradeMeta> = {
  Lüftung: { color: '#2E60AA', short: 'Luftung' },
  Baumeister: { color: '#F2CA27', dark: true, short: 'Baumeister' },
  Rückbau: { color: '#765AB0', short: 'Ruckbau' },
  Holzbau: { color: '#317A7C', short: 'Holzbau' },
  'Heizung/Kühlung': { color: '#E12601', short: 'Heizung' },
  Elektro: { color: '#3CA227', short: 'Elektro' },
};
export const TRADE_NAMES = Object.keys(TRADES) as Trade[];
export const tradeColor = (t: string | undefined): string =>
  (t && TRADES[t as Trade]?.color) || '#969300';
export const tradeDark = (t: string | undefined): boolean => !!(t && TRADES[t as Trade]?.dark);

/** CLM Figma 28587:11774 (legend). bg / fg = light pill + dark text and icon. */
export const SHIPMENT_STATUS: Record<ShipmentStatus, StatusMeta> = {
  Open: { label: 'Open', color: '#BEBEC2', bg: '#F1F1F2', fg: '#474752', icon: 'ss-open' },
  Approved: {
    label: 'Approved',
    color: '#97D8A5',
    outline: true,
    bg: '#EAF7ED',
    fg: '#2F7A44',
    icon: 'ss-approved',
  },
  Waiting: { label: 'Waiting', color: '#97D8A5', bg: '#EAF7ED', fg: '#2F7A44', icon: 'ss-waiting' },
  'In Transit': {
    label: 'In Transit',
    color: '#4EBC65',
    bg: '#E2F4E6',
    fg: '#23753A',
    icon: 'ss-intransit',
  },
  'Arrived & Unloading': {
    label: 'Arrived & Unloading',
    color: '#2D763D',
    bg: '#DFECE2',
    fg: '#2D763D',
    icon: 'ss-arrived',
  },
  Completed: {
    label: 'Completed',
    color: '#2E60AA',
    bg: '#E3EBF7',
    fg: '#2E60AA',
    icon: 'ss-completed',
  },
  Canceled: {
    label: 'Cancelled',
    color: '#BCAD96',
    outline: true,
    bg: '#F4F0EA',
    fg: '#6E604A',
    icon: 'ss-cancelled',
  },
  Rejected: {
    label: 'Rejected',
    color: '#F15C5E',
    outline: true,
    bg: '#FDE8E8',
    fg: '#B3261E',
    icon: 'ss-rejected',
  },
};

/** Light status colours that need dark text on top (prototype: UI.isDark). */
export const needsDarkText = (hex: string): boolean =>
  ['#F2CA27', '#C4C27A', '#71C68D', '#A09FB5', '#9E9EA7'].includes(hex);

/** Allowed next steps from each status (front-end only; mirrors the backend workflow). */
export const STATUS_FLOW: Record<ShipmentStatus, ShipmentStatus[]> = {
  Open: ['Approved', 'Rejected'],
  Approved: ['Waiting', 'In Transit', 'Open'],
  Waiting: ['In Transit'],
  'In Transit': ['Arrived & Unloading'],
  'Arrived & Unloading': ['Completed'],
  Completed: [],
  Canceled: ['Open'],
  Rejected: ['Open'],
};

/** Status menu items — CLM Figma 38326:78434 */
export const STATUS_MENU: Record<ShipmentStatus, { icon: string; label: string }> = {
  Open: { icon: 'legend-open', label: 'Reopen' },
  Approved: { icon: 'sm-approved', label: 'Approved' },
  Waiting: { icon: 'sm-waiting', label: 'Waiting' },
  'In Transit': { icon: 'sm-intransit', label: 'In transit' },
  'Arrived & Unloading': { icon: 'sm-arrived', label: 'Arrived & Unloading' },
  Completed: { icon: 'sm-completed', label: 'Completed' },
  Rejected: { icon: 'sm-rejected', label: 'Rejected' },
  Canceled: { icon: 'sm-canceled', label: 'Cancel shipment' },
};

/** Completed or canceled shipments can't be edited or canceled. */
export const isLocked = (s: ShipmentStatus): boolean => s === 'Completed' || s === 'Canceled';
/** Approved or further along, but not finished. */
export const isInProgress = (s: ShipmentStatus): boolean =>
  !['Open', 'Completed', 'Canceled', 'Rejected'].includes(s);
export const isClosed = (s: ShipmentStatus): boolean =>
  ['Completed', 'Canceled', 'Rejected'].includes(s);

export const WP_STATUS: Record<WpStatus, WpStatusMeta> = {
  overdue: { label: 'Overdue', icon: 'legend-overdue', tone: 'error', dot: '#E12601' },
  active: { label: 'Active', icon: 'legend-active', tone: 'success', dot: '#36A162' },
  pending: { label: 'Pending', icon: 'legend-pending', tone: 'grey', dot: '#676770' },
  completed: { label: 'Completed', icon: 'legend-wp-completed', tone: 'blue', dot: '#2E60AA' },
};

export const VEHICLES: Vehicle[] = [
  {
    id: 'solo-bis-7-5',
    name: 'LKW solo bis 7.5 t',
    desc: 'Box truck · up to 7.5 t',
    icon: 'veh-solo-bis-7-5',
  },
  {
    id: 'solo-ab-7-5',
    name: 'LKW solo ab 7.5 t',
    desc: 'Box truck · from 7.5 t',
    icon: 'veh-solo-ab-7-5',
  },
  { id: 'lkw-30', name: 'LKW bis 30 t', desc: 'Truck · up to 30 t', icon: 'veh-lkw-30' },
  { id: 'lkw-40', name: 'LKW bis 40 t', desc: 'Truck · up to 40 t', icon: 'veh-lkw-40' },
  {
    id: 'anhaenger',
    name: 'LKW mit Anhänger',
    desc: 'Truck + trailer · up to 40 t',
    icon: 'veh-anhaenger',
  },
  { id: 'sattelzug', name: 'Sattelzug', desc: 'Semi-trailer · up to 40 t', icon: 'veh-sattelzug' },
  {
    id: 'fahrmischer',
    name: 'Fahrmischer',
    desc: 'Concrete mixer · 8 m³',
    icon: 'veh-fahrmischer',
  },
  { id: 'betonpumpe', name: 'Betonpumpe', desc: 'Concrete pump', icon: 'veh-betonpumpe' },
  { id: 'autokran', name: 'Autokran', desc: 'Mobile crane', icon: 'veh-autokran' },
  {
    id: 'lieferwagen',
    name: 'Lieferwagen',
    desc: 'Low-loader · heavy parts',
    icon: 'veh-lieferwagen',
  },
  { id: 'pkw', name: 'PKW', desc: 'Car · small parts', icon: 'veh-pkw' },
];

export const MATERIALS: Material[] = [
  { id: 'brick', name: 'Brick', unit: 'm³', pack: 'Pallets', group: 'Pallets' },
  { id: 'rebar', name: 'Rebar', unit: 't', pack: 'Bundles', group: 'Bulk' },
  { id: 'pipes', name: 'Pipes', unit: 'pcs', pack: 'Bundles', group: 'Pallets' },
  { id: 'copper', name: 'Copper wire', unit: 'm', pack: 'Drums', group: 'Pallets' },
  { id: 'gravel', name: 'Gravel', unit: 'm³', pack: 'Bulk · tipper', group: 'Bulk' },
  { id: 'sand', name: 'Sand', unit: 'm³', pack: 'Bulk · tipper', group: 'Bulk' },
  { id: 'formwork', name: 'Formwork', unit: 'm²', pack: 'Pallets', group: 'Pallets' },
  { id: 'steel', name: 'Steel', unit: 't', pack: 'Bundles', group: 'Bulk' },
  {
    id: 'concrete',
    name: 'Concrete',
    unit: 'm³',
    pack: 'Bulk · mixer truck',
    group: 'Bulk',
    pinned: true,
  },
  { id: 'cement', name: 'Cement', unit: 'bags', pack: 'Pallets', group: 'Pallets' },
  { id: 'insulation', name: 'Insulation', unit: 'pallets', pack: 'Pallets', group: 'Pallets' },
  {
    id: 'ducts',
    name: 'Ventilation ducts',
    unit: 'pcs',
    pack: 'Crates',
    group: 'Pallets',
    pinned: true,
  },
  { id: 'cable-trays', name: 'Cable trays', unit: 'm', pack: 'Bundles', group: 'Pallets' },
  { id: 'timber', name: 'Timber elements', unit: 'pcs', pack: 'Stacks', group: 'Pallets' },
  { id: 'glass', name: 'Glass panels', unit: 'pcs', pack: 'Racks', group: 'Pallets' },
  { id: 'plaster', name: 'Plasterboard', unit: 'pallets', pack: 'Pallets', group: 'Pallets' },
  { id: 'heat-pump', name: 'Heat pump unit', unit: 'pcs', pack: 'Crate', group: 'Pallets' },
  { id: 'nitrogen', name: 'Nitrogen tank', unit: 'pcs', pack: 'Single load', group: 'Bulk' },
];

export const UNLOADING_POINTS: UnloadingPoint[] = [
  { id: 'UP 01', name: 'UP 01', area: 'Lay Area 25', desc: 'Quick unloading · 2 bays', slot: 20 },
  { id: 'UP 02', name: 'UP 02', area: 'Lay Area 12', desc: 'Street unloading point', slot: 30 },
  {
    id: 'UP 03',
    name: 'UP 03',
    area: 'Yard North',
    desc: 'Closed until 30.11.2026',
    slot: 30,
    disabled: true,
  },
];

export const EQUIPMENT_BOOKABLE: Equipment[] = [
  {
    id: 'crane5',
    name: 'Crane 5',
    icon: 'eq-tower-crane',
    spec: 'Hub 7.5 m · load max 2 t',
    slot: 20,
  },
  {
    id: 'elevator',
    name: 'Elevator',
    icon: 'eq-elevator',
    spec: 'Elevator 1 · load max 200 kg',
    slot: 120,
  },
  {
    id: 'scissor',
    name: 'Scissor lift',
    icon: 'eq-scissor-lift',
    spec: 'Lift 01 · load max 200 kg',
    slot: 30,
  },
  {
    id: 'crane3',
    name: 'Crane 3',
    icon: 'eq-tower-crane',
    spec: 'Booked 12:00 – 16:00',
    slot: 20,
    disabled: true,
  },
];
export const EQUIPMENT_ONSITE: Equipment[] = [
  { id: 'crane1', name: 'Crane 1', icon: 'eq-mobile-crane', spec: 'Hub 7 m · weight 2000 kg' },
  { id: 'forklift2', name: 'Forklift 2', icon: 'eq-forklift', spec: '3000 kg · max load 500 kg' },
  { id: 'forklift3', name: 'Forklift 3', icon: 'eq-forklift', spec: '3000 kg · max load 500 kg' },
  { id: 'telehandler', name: 'Telehandler', icon: 'eq-telehandler', spec: 'Reach 17 m · 4 t' },
];

export const PEOPLE: Person[] = [
  {
    id: 'p1',
    name: 'Max Mustermann',
    org: 'Team pRED',
    phone: '+41 44 220 44 11',
    email: 'max.mustermann@sample.com',
    me: true,
  },
  {
    id: 'p2',
    name: 'Veeti Seppanen',
    org: 'Organization P',
    phone: '+41 44 220 44 12',
    email: 'veeti.seppanen@sample.com',
  },
  {
    id: 'p3',
    name: 'Darrell Steward',
    org: 'B. Braun Medical AG',
    phone: '+41 79 410 22 31',
    email: 'darrell.steward@sample.com',
  },
  {
    id: 'p4',
    name: 'Leonie Brunner',
    org: 'Hälg & Co. AG',
    phone: '+41 71 243 43 43',
    email: 'leonie.brunner@sample.com',
  },
  {
    id: 'p5',
    name: 'Jonas Keller',
    org: 'ERNA AG',
    phone: '+41 61 555 10 20',
    email: 'jonas.keller@sample.com',
  },
  {
    id: 'p6',
    name: 'Aylin Demir',
    org: 'Hydroplant AG',
    phone: '+41 43 300 70 70',
    email: 'aylin.demir@sample.com',
  },
  {
    id: 'p7',
    name: 'Marco Rossi',
    org: 'Biffco Enterprises',
    phone: '+41 31 888 12 12',
    email: 'marco.rossi@sample.com',
  },
];

export const ORGS = [
  'Team pRED',
  'Organization P',
  'Team Intel',
  'Biffco Enterprises',
  'Hydroplant AG',
  'Hälg & Co. AG',
  'B. Braun Medical AG',
  'ERNA AG',
];
export const BUILDINGS = ['Bau 01', 'Bau 02', 'Bau 04', 'Bau 06'];
export const FLOORS = ['UG 04', 'UG 02', 'UG 01', 'EG', 'OG 01', 'OG 02', 'OG 03'];
export const ZONES = [
  'Lay Area 03',
  'Lay Area 12',
  'Lay Area 14',
  'Lay Area 25',
  'Lay Area 26',
  'Yard North',
  'Crane zone',
];
export const TRANSPORT_UNITS = ['EUR pallets', 'Truck loads', 'Containers', 'Bundles', 'm³'];
export const GATES = [
  'Gate A1 – North entrance',
  'Gate A2 – East entrance',
  'Gate B – Service road',
];
export const CANCEL_REASONS = [
  'Delivery postponed',
  'Material not available',
  'Booked twice',
  'Other',
];
export const MATERIAL_UNITS = ['pcs', 'm³', 'm²', 'm', 't', 'kg', 'pallets', 'bags'];

/** Sites in the site switcher (CLM Figma 26049:55842). Only the current one has demo data. */
export const SITES: { name: string; project: string }[] = [
  { name: 'All Sites', project: 'All projects' },
  { name: 'Aerial View Site', project: 'Coopers' },
  { name: 'Augustana College', project: 'Bradly Construction Project' },
  { name: 'Construction site 01', project: 'LYDL' },
  { name: 'Construction site 002', project: 'Coopers' },
  { name: '1000 Org Construction', project: 'Grace Pacific' },
];
export const CURRENT_SITE = 'Augustana College';

/** Booking window limits (the prototype's date inputs). */
export const DATE_MIN = '2026-01-01';
export const DATE_MAX = '2027-12-31';
