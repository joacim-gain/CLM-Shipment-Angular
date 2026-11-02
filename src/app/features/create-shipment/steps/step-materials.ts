/** Step 2 · Materials: destination, materials, comment (prototype: create.js → step2). */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Material, ShipmentMaterial } from '../../../data/clm.model';
import { BUILDINGS, FLOORS, ORGS, ZONES } from '../../../data/reference-data';
import { CreateContext } from '../create-context';
import { recommendedVehicle } from '../create-rules';
import {
  MaterialQtyData,
  MaterialQtyDialog,
  MaterialQtyResult,
} from '../dialogs/material-qty.dialog';
import { NewMaterialDialog } from '../dialogs/new-material.dialog';

type MatFilter = 'All' | 'Pinned' | 'Bulk' | 'Pallets';
const PREVIEW = 11;

@Component({
  selector: 'clm-step-materials',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './step-materials.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepMaterials {
  protected readonly ctx = inject(CreateContext);
  private readonly dialog = inject(MatDialog);
  protected readonly d = this.ctx.d;
  protected readonly destination = [
    { key: 'recipient', label: 'Recipient', options: ORGS },
    { key: 'building', label: 'Building', options: BUILDINGS },
    { key: 'floor', label: 'Floor', options: FLOORS },
    { key: 'zone', label: 'Laydown area', options: ZONES },
  ] as const;
  protected readonly filters: MatFilter[] = ['All', 'Pinned', 'Bulk', 'Pallets'];
  protected readonly filter = signal<MatFilter>('All');
  protected readonly query = signal('');

  protected readonly list = computed(() => {
    const q = this.query().trim().toLowerCase();
    const f = this.filter();
    return this.ctx.store
      .materials()
      .filter(
        (m) =>
          (f === 'All' || (f === 'Pinned' ? this.ctx.store.isPinned(m) : m.group === f)) &&
          (!q || m.name.toLowerCase().includes(q)),
      );
  });
  protected readonly collapsible = computed(
    () => this.list().length > PREVIEW && this.filter() === 'All' && !this.query().trim(),
  );
  protected readonly shown = computed(() =>
    this.collapsible() && !this.d().showAllMaterials ? this.list().slice(0, PREVIEW) : this.list(),
  );
  protected readonly selected = computed(() =>
    this.d().materials.map((m, i) => ({ m, i, ref: this.ctx.store.material(m.id) })),
  );

  protected selectedOf(id: string): ShipmentMaterial | undefined {
    return this.d().materials.find((m) => m.id === id);
  }

  protected setField(key: 'recipient' | 'building' | 'floor' | 'zone', value: string): void {
    this.ctx.set({ [key]: value });
  }

  protected setQty(i: number, value: string): void {
    const materials = this.d().materials.map((m, j) =>
      j === i ? { ...m, qty: Math.max(1, +value || 1) } : m,
    );
    this.ctx.set({ materials }, 'materials');
  }

  protected remove(i: number): void {
    const removed = this.d().materials[i];
    this.ctx.set({ materials: this.d().materials.filter((_, j) => j !== i) }, 'materials');
    this.ctx.toast.undoable(`${this.ctx.store.material(removed.id).name} removed`, () =>
      this.ctx.set({ materials: [...this.d().materials, removed] }, 'materials'),
    );
  }

  protected openMaterial(m: Material): void {
    const i = this.d().materials.findIndex((x) => x.id === m.id);
    this.dialog
      .open<MaterialQtyDialog, MaterialQtyData, MaterialQtyResult>(MaterialQtyDialog, {
        width: '440px',
        data: {
          material: m,
          current: i >= 0 ? this.d().materials[i] : null,
          pinned: this.ctx.store.isPinned(m),
        },
      })
      .afterClosed()
      .subscribe((r) => {
        if (!r) return;
        if (r.action === 'remove') {
          this.ctx.set({ materials: this.d().materials.filter((_, j) => j !== i) }, 'materials');
          return;
        }
        const materials =
          i >= 0
            ? this.d().materials.map((x, j) => (j === i ? r.value : x))
            : [...this.d().materials, r.value];
        if (!m.pinned) this.ctx.store.setPinned(m.id, r.pinned);
        const vehicle = this.d().vehicle || recommendedVehicle(materials.map((x) => x.id)) || '';
        this.ctx.set({ materials, vehicle }, 'materials');
      });
  }

  protected newMaterial(): void {
    this.dialog
      .open(NewMaterialDialog, { width: '440px', data: { name: this.query() } })
      .afterClosed()
      .subscribe((m?: Omit<Material, 'id'>) => {
        if (!m) return;
        const created = this.ctx.store.addMaterial(m);
        this.query.set('');
        this.openMaterial(created);
      });
  }

  protected selectedDetail(m: ShipmentMaterial, pack: string | undefined): string {
    return [
      pack,
      m.pallets ? `${m.pallets} EUR pallets` : '',
      m.weight ? `${m.weight} kg` : '',
      m.note,
    ]
      .filter(Boolean)
      .join(' · ');
  }
}
