/** Step 3 · Transport: vehicle, access & arrival, site map (prototype: create.js → step3). */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GATES, VEHICLES } from '../../../data/reference-data';
import { PhotoViewerDialog } from '../../../shared/dialogs/photo-viewer.dialog';
import { CreateContext } from '../create-context';
import { recommendedVehicle } from '../create-rules';

const PINS = [
  ['A1', 46, 58],
  ['A2', 52, 64],
  ['A3', 58, 52],
  ['A4', 63, 70],
  ['A5', 41, 72],
] as const;

@Component({
  selector: 'clm-step-transport',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './step-transport.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepTransport {
  protected readonly ctx = inject(CreateContext);
  private readonly dialog = inject(MatDialog);
  protected readonly d = this.ctx.d;
  protected readonly vehicles = VEHICLES;
  protected readonly gates = GATES;
  protected readonly pins = PINS;

  protected readonly recommended = computed(() =>
    recommendedVehicle(this.d().materials.map((m) => m.id)),
  );
  protected readonly recommendedFor = computed(() => {
    const first = this.d().materials[0];
    return first ? this.ctx.store.material(first.id).name.toLowerCase() : '';
  });

  protected pickVehicle(id: string): void {
    this.ctx.set({ vehicle: id }, 'vehicle');
  }
  protected setVehicles(n: number): void {
    this.ctx.set({ vehicles: Math.max(1, Math.min(20, n || 1)) }, 'vehicle');
  }
  protected setPlate(input: HTMLInputElement): void {
    input.value = input.value.toUpperCase();
    this.ctx.set({ plate: input.value });
  }
  protected vehicleName(id: string): string {
    return this.ctx.store.vehicle(id).name;
  }
  protected pin(name: string): void {
    this.ctx.toast.show(`Unloading point ${name} · max. vehicle height 4 m`);
  }

  protected fullscreen(): void {
    this.dialog.open(PhotoViewerDialog, {
      data: { photos: ['img/site-map.jpg'], index: 0 },
      panelClass: 'clm-photo-viewer',
      backdropClass: 'clm-photo-backdrop',
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh',
    });
  }
}
