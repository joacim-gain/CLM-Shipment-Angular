/**
 * ClmStore — the single source of data for the Shipments module (signals).
 * Ported from the prototype's store.js (selectors + mutations).
 *
 * Today it is backed by demo data and localStorage, so the app runs without a backend.
 * To connect the API, keep the public methods and swap their bodies for HttpClient calls
 * (see DEV-GUIDE.md → "Connect the API"). Components never touch storage or HTTP directly.
 */
import { Injectable, computed, inject, signal } from '@angular/core';
import { diffDays, fmtDate, relative } from '../core/date/iso-date';
import { TODAY } from '../core/date/today';
import { readLocal, removeLocal, writeLocal } from '../core/storage/local-store';
import {
  Material,
  Person,
  Shipment,
  ShipmentAnnotation,
  ShipmentDoc,
  ShipmentStatus,
  UploadRecord,
  WorkingPackage,
  WorkingPackageDraft,
  WpStatus,
} from './clm.model';
import { ClmData, buildDemoData } from './demo-seed';
import {
  EQUIPMENT_BOOKABLE,
  EQUIPMENT_ONSITE,
  MATERIALS,
  PEOPLE,
  SHIPMENT_STATUS,
  VEHICLES,
  isClosed,
  isInProgress,
} from './reference-data';

const KEY = 'clm-shipments-angular-v1';

interface StoredData extends ClmData {
  extraPeople: Person[];
  extraMaterials: Material[];
  pins: string[];
}

export interface WpStats {
  total: number;
  done: number;
  open: number;
  approved: number;
  canceled: number;
  late: number;
  active: number;
}
export type GroupBy = 'wp' | 'destination' | 'sender' | 'recipient';

@Injectable({ providedIn: 'root' })
export class ClmStore {
  readonly today = inject(TODAY);
  /** The signed-in user (prototype: Max Mustermann). Comes from auth in the real app. */
  readonly currentUserId = 'p1';

  private readonly data = signal<StoredData>(this.load());

  readonly wps = computed(() => this.data().wps);
  readonly shipments = computed(() => this.data().shipments);
  readonly uploads = computed(() => this.data().uploads);
  readonly notifications = computed(() => this.data().notifications);
  readonly people = computed(() => [...PEOPLE, ...this.data().extraPeople]);
  readonly materials = computed(() => [...MATERIALS, ...this.data().extraMaterials]);
  readonly pins = computed(() => this.data().pins);

  // ---------------------------------------------------------------- lookups
  wp(id: string | null | undefined): WorkingPackage | undefined {
    return this.wps().find((w) => w.id === id);
  }
  shipment(id: string | null | undefined): Shipment | undefined {
    return this.shipments().find((s) => s.id === id);
  }
  shipmentsOf(wpId: string): Shipment[] {
    return this.shipments()
      .filter((s) => s.wpId === wpId)
      .sort(byDate);
  }
  person(id: string | null | undefined): Person {
    return this.people().find((p) => p.id === id) ?? { id: '', name: 'Unknown', org: '' };
  }
  vehicle(id: string | null | undefined) {
    return VEHICLES.find((v) => v.id === id) ?? VEHICLES[0];
  }
  material(id: string): Material {
    return (
      this.materials().find((m) => m.id === id) ?? { id, name: id, unit: '', group: 'Pallets' }
    );
  }
  equipment(id: string) {
    return (
      [...EQUIPMENT_BOOKABLE, ...EQUIPMENT_ONSITE].find((e) => e.id === id) ?? {
        id,
        name: id,
        icon: 'eq-general',
        spec: '',
      }
    );
  }
  isPinned(m: Material): boolean {
    return !!m.pinned || this.pins().includes(m.id);
  }

  // ---------------------------------------------------------------- working package status
  wpStats(wp: WorkingPackage): WpStats {
    const list = this.shipments().filter((s) => s.wpId === wp.id);
    const done = list.filter((s) => s.status === 'Completed').length;
    const canceled = list.filter((s) => s.status === 'Canceled' || s.status === 'Rejected').length;
    const open = list.filter((s) => s.status === 'Open').length;
    const approved = list.filter((s) => isInProgress(s.status)).length;
    const late = list.filter((s) => diffDays(s.date, this.today) < 0 && !isClosed(s.status)).length;
    return {
      total: list.length,
      done,
      open,
      approved,
      canceled,
      late,
      active: list.length - canceled,
    };
  }

  wpStatus(wp: WorkingPackage): WpStatus {
    if (wp.completed) return 'completed';
    const st = this.wpStats(wp);
    if (diffDays(wp.to, this.today) < 0 || st.late > 0) return 'overdue';
    if (diffDays(wp.from, this.today) > 0) return 'pending';
    return 'active';
  }

  /** Short note under the booking window, e.g. "Ends in 3 weeks" or "2 shipments late". */
  wpWindowNote(wp: WorkingPackage): { text: string; error: boolean } {
    const s = this.wpStatus(wp);
    const st = this.wpStats(wp);
    if (s === 'completed') return { text: 'Completed ' + fmtDate(wp.to), error: false };
    if (s === 'overdue') {
      return st.late && diffDays(wp.to, this.today) >= 0
        ? { text: `${st.late} shipment${st.late > 1 ? 's' : ''} late`, error: true }
        : { text: 'Ended ' + relative(wp.to, this.today), error: true };
    }
    if (s === 'pending') return { text: 'Starts ' + relative(wp.from, this.today), error: false };
    return { text: 'Ends ' + relative(wp.to, this.today), error: false };
  }

  readonly countsByStatus = computed(() => {
    const c: Record<WpStatus | 'all', number> = {
      all: this.wps().length,
      overdue: 0,
      active: 0,
      pending: 0,
      completed: 0,
    };
    this.wps().forEach((w) => c[this.wpStatus(w)]++);
    return c;
  });

  // ---------------------------------------------------------------- grouping
  groupKey(s: Shipment, by: GroupBy): string {
    if (by === 'wp') return s.wpId;
    if (by === 'destination') return `${s.building} · ${s.floor}`;
    if (by === 'sender') return s.sender;
    return s.recipient;
  }

  nextShipmentNo(sender: string): string {
    const max = Math.max(...this.shipments().map((s) => parseInt(s.no, 10) || 0));
    const org = sender.split(' ').slice(-1)[0];
    return `${max + 1}-${org === 'pRED' ? 'Team pRED' : org}`;
  }

  // ---------------------------------------------------------------- working packages
  addWorkingPackage(draft: WorkingPackageDraft): WorkingPackage {
    const wp: WorkingPackage = { id: 'wp' + Date.now(), ...draft };
    this.patch((d) => {
      d.wps.push(wp);
    });
    return wp;
  }

  updateWorkingPackage(id: string, draft: WorkingPackageDraft): void {
    this.patch((d) => {
      const wp = d.wps.find((w) => w.id === id);
      if (wp) Object.assign(wp, draft);
    });
  }

  importWorkingPackages(
    list: WorkingPackageDraft[],
    upload: Omit<UploadRecord, 'id'>,
  ): WorkingPackage[] {
    const created = list.map((w, i) => ({ id: `wpu${Date.now()}${i}`, ...w }));
    this.patch((d) => {
      d.wps.push(...created);
      d.uploads.unshift({ id: 'u' + Date.now(), ...upload });
    });
    return created;
  }

  // ---------------------------------------------------------------- shipments
  createShipment(
    s: Omit<
      Shipment,
      'id' | 'no' | 'status' | 'createdBy' | 'created' | 'activity' | 'comments' | 'annotations'
    >,
    comment: string,
  ): Shipment {
    const now = this.now();
    const shipment: Shipment = {
      ...s,
      id: 's' + Date.now(),
      no: this.nextShipmentNo(s.sender),
      status: 'Open',
      createdBy: this.currentUserId,
      created: now,
      comments: comment ? [{ by: this.currentUserId, at: now, text: comment }] : [],
      annotations: [],
      activity: [
        { at: now, by: this.currentUserId, text: 'created the shipment', icon: 'add_circle' },
      ],
      justCreated: true,
    };
    this.patch((d) => {
      d.shipments.push(shipment);
    });
    return shipment;
  }

  saveShipment(id: string, changes: Partial<Shipment>, comment: string): void {
    this.update(id, (s) => {
      Object.assign(s, changes);
      if (comment) s.comments.push({ by: this.currentUserId, at: this.now(), text: comment });
      this.log(s, 'edited the shipment', 'edit');
    });
  }

  setStatus(id: string, status: ShipmentStatus, reason?: string): void {
    this.update(id, (s) => {
      s.status = status;
      if (reason) s.reason = reason;
      // Approving or rejecting the shipment does the same to its booked special equipment.
      if (status === 'Approved')
        s.equipment.forEach((e) => {
          if (e.kind === 'booked') e.state = 'approved';
        });
      if (status === 'Rejected')
        s.equipment.forEach((e) => {
          if (e.kind === 'booked') e.state = 'rejected';
        });
      this.log(s, `changed status to ${status}`, status === 'Rejected' ? 'block' : 'sync_alt');
    });
  }

  restoreStatus(id: string, status: ShipmentStatus): void {
    this.update(id, (s) => {
      s.status = status;
      this.log(s, `changed status back to ${status}`, 'undo');
    });
  }

  cancel(id: string, reason: string, comment: string): void {
    this.update(id, (s) => {
      s.status = 'Canceled';
      s.reason = reason + (comment ? ' — ' + comment : '');
      this.log(s, 'canceled the shipment', 'block');
    });
  }

  addComment(id: string, text: string): void {
    this.update(id, (s) => {
      s.comments.push({ by: this.currentUserId, at: this.now(), text });
      this.log(s, 'added a comment', 'chat');
    });
  }

  addDocs(id: string, files: File[]): void {
    this.update(id, (s) => {
      s.docs.push(...files.map((f) => this.docFrom(f)));
      this.log(s, `uploaded ${files.length} document${files.length > 1 ? 's' : ''}`, 'upload_file');
    });
  }

  removeDoc(id: string, index: number): ShipmentDoc {
    let removed!: ShipmentDoc;
    this.update(id, (s) => {
      [removed] = s.docs.splice(index, 1);
      this.log(s, `deleted ${removed.name}`, 'delete');
    });
    return removed;
  }

  restoreDoc(id: string, doc: ShipmentDoc): void {
    this.update(id, (s) => {
      s.docs.push(doc);
    });
  }

  addPhotos(id: string, urls: string[]): void {
    this.update(id, (s) => {
      s.photos.push(...urls);
      this.log(s, `added ${urls.length} photo${urls.length > 1 ? 's' : ''}`, 'add_a_photo');
    });
  }

  removePhoto(id: string, index: number): string {
    let removed!: string;
    this.update(id, (s) => {
      [removed] = s.photos.splice(index, 1);
    });
    return removed;
  }

  restorePhoto(id: string, index: number, url: string): void {
    this.update(id, (s) => {
      s.photos.splice(index, 0, url);
    });
  }

  addAnnotation(id: string, a: Pick<ShipmentAnnotation, 'type' | 'title' | 'text'>): void {
    this.update(id, (s) => {
      s.annotations.push({ ...a, by: this.currentUserId, at: this.now() });
      this.log(s, 'added an annotation', 'edit_note');
    });
  }

  removeAnnotation(id: string, index: number): void {
    this.update(id, (s) => {
      s.annotations.splice(index, 1);
    });
  }

  dismissCreatedBanner(id: string): void {
    this.update(id, (s) => {
      delete s.justCreated;
    });
  }

  // ---------------------------------------------------------------- reference data the user can extend
  addPerson(p: Omit<Person, 'id'>): Person {
    const person = { id: 'px' + Date.now(), ...p };
    this.patch((d) => {
      d.extraPeople.push(person);
    });
    return person;
  }

  addMaterial(m: Omit<Material, 'id'>): Material {
    const material = { id: 'm' + Date.now(), ...m };
    this.patch((d) => {
      d.extraMaterials.push(material);
    });
    return material;
  }

  setPinned(materialId: string, pinned: boolean): void {
    this.patch((d) => {
      d.pins = pinned
        ? [...new Set([...d.pins, materialId])]
        : d.pins.filter((x) => x !== materialId);
    });
  }

  /** Demo only: forget all local changes. */
  reset(): void {
    removeLocal(KEY);
    this.data.set(this.fresh());
  }

  // ---------------------------------------------------------------- helpers
  docFrom(f: File): ShipmentDoc {
    return {
      name: f.name,
      type: (f.name.split('.').pop() || 'FILE').toUpperCase(),
      size: fileSize(f.size),
      by: this.currentUserId,
      at: this.now(),
    };
  }

  /** Local time as yyyy-MM-ddTHH:mm (demo: on the demo "today"). */
  now(): string {
    const t = new Date();
    return `${this.today}T${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
  }

  private update(id: string, change: (s: Shipment) => void): void {
    this.patch((d) => {
      const s = d.shipments.find((x) => x.id === id);
      if (s) change(s);
    });
  }

  /** Every write goes through here: copy, change, store, persist. */
  private patch(change: (d: StoredData) => void): void {
    const next = structuredClone(this.data());
    change(next);
    this.data.set(next);
    writeLocal(KEY, next);
  }

  private log(s: Shipment, text: string, icon: string): void {
    s.activity.push({ at: this.now(), by: this.currentUserId, text, icon });
  }

  private fresh(): StoredData {
    return { ...buildDemoData(), extraPeople: [], extraMaterials: [], pins: [] };
  }

  private load(): StoredData {
    const stored = readLocal<StoredData | null>(KEY, null);
    if (!stored) return this.fresh();
    // statuses outside the Figma legend (older saved data) fall back to Open
    stored.shipments.forEach((s) => {
      if (!SHIPMENT_STATUS[s.status]) s.status = 'Open';
    });
    return stored;
  }
}

export function byDate(a: Shipment, b: Shipment): number {
  return a.date.localeCompare(b.date) || a.start.localeCompare(b.start);
}

export function fileSize(bytes: number): string {
  return bytes > 1e6
    ? (bytes / 1e6).toFixed(1) + ' MB'
    : Math.max(1, Math.round(bytes / 1e3)) + ' KB';
}
