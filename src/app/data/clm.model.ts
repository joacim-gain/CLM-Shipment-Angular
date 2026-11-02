/**
 * CLM Shipments domain model. Mirrors the prototype's data (clm-shipments-demo/assets/js/data.js).
 * Check the field names against the real API before wiring it up (see DEV-GUIDE.md → "Connect the API").
 */
import { IsoDate } from '../core/date/iso-date';

export type Trade =
  'Lüftung' | 'Baumeister' | 'Rückbau' | 'Holzbau' | 'Heizung/Kühlung' | 'Elektro';
export interface TradeMeta {
  color: string;
  dark?: boolean;
  short: string;
}

// ---------- shipment status (CLM Figma 28587:11774 — the only statuses that exist) ----------
export type ShipmentStatus =
  | 'Open'
  | 'Approved'
  | 'Waiting'
  | 'In Transit'
  | 'Arrived & Unloading'
  | 'Completed'
  | 'Canceled'
  | 'Rejected';
export interface StatusMeta {
  label: string;
  /** Bar / status button colour */
  color: string;
  /** Drawn as an outlined bar on the timeline */
  outline?: boolean;
  /** Light pill background + dark text and icon */
  bg: string;
  fg: string;
  /** clm icon name */
  icon: string;
}

// ---------- working package ----------
export type WpStatus = 'overdue' | 'active' | 'pending' | 'completed';
export interface WpStatusMeta {
  label: string;
  icon: string;
  tone: string;
  dot: string;
}

export interface WorkingPackage {
  id: string;
  title: string;
  trade: Trade;
  sender: string;
  recipient: string;
  building: string;
  floor: string;
  zone: string;
  from: IsoDate;
  to: IsoDate;
  /** Free text, e.g. "420 m³". "—" when empty. */
  volume: string;
  units: string;
  unitsQty: number;
  completed?: boolean;
}
export type WorkingPackageDraft = Omit<WorkingPackage, 'id' | 'completed'>;

// ---------- shipment ----------
export interface ShipmentMaterial {
  id: string;
  qty: number;
  unit: string;
  note?: string;
  pallets?: number;
  l?: string;
  w?: string;
  h?: string;
  weight?: number;
}
export interface ShipmentEquipment {
  id: string;
  kind: 'booked' | 'onsite';
  /** HH:mm */
  start: string;
  end: string;
  /** Booked (special) equipment needs approval */
  state?: 'pending' | 'approved' | 'rejected';
  /** On-site equipment: number of pulls / lifts */
  pulls?: number;
  ton?: string;
}
export interface ShipmentComment {
  by: string;
  at: string;
  text: string;
}
export interface ShipmentDoc {
  name: string;
  type: string;
  size: string;
  by: string;
  at: string;
}
export type AnnotationType = 'Note' | 'Damage' | 'Delay';
export interface ShipmentAnnotation {
  type: AnnotationType;
  title: string;
  text: string;
  by: string;
  at: string;
}
export interface ShipmentActivity {
  at: string;
  by: string;
  text: string;
  icon: string;
}

export interface Shipment {
  id: string;
  no: string;
  name: string;
  wpId: string;
  date: IsoDate;
  /** HH:mm */
  start: string;
  end: string;
  status: ShipmentStatus;
  reason?: string;
  sender: string;
  recipient: string;
  building: string;
  floor: string;
  zone: string;
  /** Unloading point id, e.g. "UP 01" */
  up: string;
  vehicle: string;
  vehicles: number;
  materials: ShipmentMaterial[];
  equipment: ShipmentEquipment[];
  createdBy: string;
  /** yyyy-MM-ddTHH:mm */
  created: string;
  onsite?: string;
  orderResp?: string;
  deliveryResp?: string;
  gate: string;
  plate?: string;
  phone?: string;
  modes?: string[];
  origin: string;
  km: number;
  comments: ShipmentComment[];
  docs: ShipmentDoc[];
  /** Image URLs */
  photos: string[];
  annotations: ShipmentAnnotation[];
  activity: ShipmentActivity[];
  /** Shows the "Shipment created" banner once after creation */
  justCreated?: boolean;
}

// ---------- reference data ----------
export interface Person {
  id: string;
  name: string;
  org: string;
  phone?: string;
  email?: string;
  me?: boolean;
}
export interface Vehicle {
  id: string;
  name: string;
  desc: string;
  icon: string;
}
export interface Material {
  id: string;
  name: string;
  unit: string;
  pack?: string;
  group: 'Pallets' | 'Bulk';
  pinned?: boolean;
}
export interface UnloadingPoint {
  id: string;
  name: string;
  area: string;
  desc: string;
  slot: number;
  disabled?: boolean;
}
export interface Equipment {
  id: string;
  name: string;
  icon: string;
  spec: string;
  slot?: number;
  disabled?: boolean;
}

// ---------- uploads & notifications ----------
export type UploadStatus = 'Succeeded' | 'Failed' | 'Processing' | 'Partly imported';
export interface UploadRecord {
  id: string;
  name: string;
  by: string;
  on: IsoDate;
  rows: number;
  status: UploadStatus;
  errors?: string[];
}
export interface AppNotification {
  icon: string;
  tone: 'error' | 'success' | 'neutral';
  html: string;
  at: string;
  link: string;
}
