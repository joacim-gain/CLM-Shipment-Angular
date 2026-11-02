/** Overview tab: booking, weather, materials, equipment, transport, comments (prototype: details.js → overviewHtml). */
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { Shipment, ShipmentEquipment } from '../../../data/clm.model';
import { ClmStore } from '../../../data/clm-store';
import { weatherFor } from '../../../data/weather';

@Component({
  selector: 'clm-overview-tab',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ClmDatePipe,
  ],
  templateUrl: './overview-tab.html',
  styleUrl: './overview-tab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewTab {
  readonly shipment = input.required<Shipment>();

  protected readonly data = inject(ClmStore);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly vehicle = computed(() => this.data.vehicle(this.shipment().vehicle));
  protected readonly weather = computed(() => {
    const s = this.shipment();
    const from = +s.start.slice(0, 2);
    const to = +s.end.slice(0, 2) + (+s.end.slice(3) ? 1 : 0);
    return weatherFor(s.date).map((w) => ({
      ...w,
      label: String(w.hour).padStart(2, '0') + ':00',
      inSlot: w.hour >= from && w.hour < to,
    }));
  });
  protected readonly rainAt = computed(() => this.weather().find((w) => w.icon === 'rain')?.label);
  protected readonly materials = computed(() =>
    this.shipment().materials.map((m) => {
      const ref = this.data.material(m.id);
      return {
        name: ref.name,
        qty: `${m.qty} ${m.unit || ref.unit}`,
        pack: ref.pack || '—',
        note: m.note || '—',
      };
    }),
  );
  protected readonly materialColumns = ['name', 'qty', 'pack', 'note'];
  protected readonly comments = computed(() =>
    this.shipment().comments.map((c) => ({ ...c, person: this.data.person(c.by) })),
  );

  protected readonly comment = inject(NonNullableFormBuilder).control('', [
    Validators.maxLength(250),
    Validators.pattern(/\S/),
  ]);

  protected equipmentPill(e: ShipmentEquipment): { label: string; tone: string } {
    if (e.kind === 'onsite') return { label: 'Available', tone: 'success' };
    if (e.state === 'approved') return { label: 'Approved', tone: 'success' };
    if (e.state === 'rejected') return { label: 'Rejected', tone: 'error' };
    return { label: 'Pending approval', tone: 'warning' };
  }

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  protected postComment(): void {
    const text = this.comment.value.trim();
    if (!text) return;
    this.data.addComment(this.shipment().id, text);
    this.comment.reset();
    this.snackBar.open('Comment posted', undefined, { duration: 3000 });
  }

  protected onCommentKey(e: KeyboardEvent): void {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.postComment();
    }
  }
}
