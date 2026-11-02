import { TestBed } from '@angular/core/testing';
import { ClmStore } from '../../data/clm-store';
import { buildGroups } from './hub-groups';
import { HubPrefs } from './hub-prefs';

describe('buildGroups', () => {
  let store: ClmStore;
  let prefs: HubPrefs;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(ClmStore);
    prefs = TestBed.inject(HubPrefs);
  });

  it('sorts working packages by status: overdue first', () => {
    const groups = buildGroups(store, prefs.value());
    expect(groups.map((g) => g.status)).toEqual([
      'overdue',
      'overdue',
      'active',
      'active',
      'active',
      'active',
      'pending',
      'completed',
    ]);
  });

  it('filters by status chips and hides completed when asked', () => {
    expect(
      buildGroups(store, { ...prefs.value(), wpStatus: ['pending'] }).map((g) => g.key),
    ).toEqual(['wp4']);
    expect(
      buildGroups(store, { ...prefs.value(), showCompleted: false }).some(
        (g) => g.status === 'completed',
      ),
    ).toBe(false);
  });

  it('searches shipments inside groups', () => {
    const groups = buildGroups(store, { ...prefs.value(), search: '908-Team' });
    expect(groups).toHaveLength(1);
    expect(groups[0].matched).toEqual(['s908']);
  });

  it('groups by destination', () => {
    const groups = buildGroups(store, { ...prefs.value(), groupBy: 'destination' });
    expect(groups.every((g) => g.key.includes(' · '))).toBe(true);
  });
});
