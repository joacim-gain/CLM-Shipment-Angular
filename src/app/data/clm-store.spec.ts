import { TestBed } from '@angular/core/testing';
import { ClmStore } from './clm-store';

describe('ClmStore', () => {
  let store: ClmStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(ClmStore);
  });

  it('builds the same demo data as the prototype', () => {
    expect(store.wps()).toHaveLength(8);
    expect(store.shipments()).toHaveLength(79);
    expect(store.countsByStatus()).toEqual({
      all: 8,
      overdue: 2,
      active: 4,
      pending: 1,
      completed: 1,
    });
  });

  it('approving a shipment approves its booked equipment and logs it', () => {
    store.setStatus('s908', 'Approved');
    const s = store.shipment('s908')!;
    expect(s.status).toBe('Approved');
    expect(s.equipment.find((e) => e.kind === 'booked')?.state).toBe('approved');
    expect(s.activity.at(-1)?.text).toBe('changed status to Approved');
  });

  it('creates shipments as Open with the next number', () => {
    const base = store.shipment('s908')!;
    const created = store.createShipment({ ...base, name: 'New' }, 'Hello');
    expect(created.status).toBe('Open');
    expect(created.no).toMatch(/-Team pRED$/);
    expect(created.comments[0].text).toBe('Hello');
    expect(store.shipments()).toContain(created);
  });

  it('persists changes and can reset them', () => {
    store.cancel('s908', 'Booked twice', '');
    expect(TestBed.inject(ClmStore).shipment('s908')?.status).toBe('Canceled');
    store.reset();
    expect(store.shipment('s908')?.status).toBe('Open');
  });
});
