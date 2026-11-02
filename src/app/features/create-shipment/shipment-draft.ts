/** The shipment being created or edited (prototype: create.js → blank / fromWp / fromShipment). */
import { addDays, mondayOf } from '../../core/date/iso-date';
import {
  Shipment,
  ShipmentDoc,
  ShipmentEquipment,
  ShipmentMaterial,
  WorkingPackage,
} from '../../data/clm.model';
import { GATES } from '../../data/reference-data';

export interface ShipmentDraft {
  mode: 'new' | 'edit';
  editId?: string;
  step: number;
  maxStep: number;
  name: string;
  sender: string;
  express: boolean;
  date: string;
  wpId: string | null;
  /** Started from a working package: it can't be changed */
  wpLocked: boolean;
  recipient: string;
  building: string;
  floor: string;
  zone: string;
  materials: ShipmentMaterial[];
  showAllMaterials: boolean;
  comment: string;
  vehicle: string;
  vehicles: number;
  gate: string;
  plate: string;
  phone: string;
  up: string;
  start: string;
  end: string;
  equipment: ShipmentEquipment[];
  createdBy: string;
  onsite: string;
  orderResp: string;
  deliveryResp: string;
  docs: ShipmentDoc[];
  photos: string[];
  origin: string;
  km: string;
  multi: boolean;
  modes: string[];
  /** Unsaved changes (ask before leaving) */
  dirty: boolean;
  /** First day of the week shown in step 1 */
  weekStart: string;
}

/** Saved draft in the browser ("Save draft") */
export const DRAFT_KEY = 'clm-shipment-draft';

export const STEPS = ['Date', 'Materials', 'Transport', 'Time slot', 'Other info', 'Overview'];

export function blankDraft(today: string, extra: Partial<ShipmentDraft> = {}): ShipmentDraft {
  return {
    mode: 'new',
    step: 1,
    maxStep: 1,
    name: '',
    sender: 'Team pRED',
    express: false,
    date: '',
    wpId: null,
    wpLocked: false,
    recipient: '',
    building: '',
    floor: '',
    zone: '',
    materials: [],
    showAllMaterials: false,
    comment: '',
    vehicle: '',
    vehicles: 1,
    gate: GATES[0],
    plate: '',
    phone: '',
    up: '',
    start: '',
    end: '',
    equipment: [],
    createdBy: 'p1',
    onsite: 'p2',
    orderResp: '',
    deliveryResp: '',
    docs: [],
    photos: [],
    origin: '',
    km: '',
    multi: false,
    modes: ['Truck'],
    dirty: false,
    weekStart: mondayOf(addDays(today, 1)),
    ...extra,
  };
}

/** Prefill destination from the working package. */
export function withWorkingPackage(d: ShipmentDraft, wp: WorkingPackage): ShipmentDraft {
  return {
    ...d,
    wpId: wp.id,
    sender: wp.sender,
    recipient: wp.recipient,
    building: wp.building,
    floor: wp.floor,
    zone: wp.zone,
  };
}

/** Copy everything except date, time slot and comment (duplicate / edit). */
export function fromShipment(d: ShipmentDraft, s: Shipment): ShipmentDraft {
  const c = structuredClone(s);
  return {
    ...d,
    name: c.name,
    sender: c.sender,
    wpId: c.wpId,
    recipient: c.recipient,
    building: c.building,
    floor: c.floor,
    zone: c.zone,
    materials: c.materials,
    comment: '',
    vehicle: c.vehicle,
    vehicles: c.vehicles || 1,
    gate: c.gate,
    plate: c.plate || '',
    phone: c.phone || '',
    up: c.up,
    equipment: c.equipment,
    onsite: c.onsite || 'p2',
    orderResp: c.orderResp || '',
    deliveryResp: c.deliveryResp || '',
    origin: c.origin,
    km: String(c.km || ''),
    modes: c.modes || ['Truck'],
    multi: (c.modes || []).length > 1,
  };
}
