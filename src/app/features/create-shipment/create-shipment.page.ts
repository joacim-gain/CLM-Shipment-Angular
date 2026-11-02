/**
 * Create / edit shipment — 5 steps + overview, with a live summary panel.
 * Ported from the CLM prototype: clm-shipments-demo/assets/js/views/create.js
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { BackNavigation } from '../../core/layout/back-navigation';
import { Shipment } from '../../data/clm.model';
import { HubPrefs } from '../hub/hub-prefs';
import { CreateContext } from './create-context';
import { isStepValid, stepErrors } from './create-rules';
import { CreateSummary } from './create-summary';
import { ShipmentCreatedDialog } from './dialogs/shipment-created.dialog';
import { STEPS, ShipmentDraft } from './shipment-draft';
import { StepDate } from './steps/step-date';
import { StepMaterials } from './steps/step-materials';
import { StepOther } from './steps/step-other';
import { StepOverview } from './steps/step-overview';
import { StepTimeslot } from './steps/step-timeslot';
import { StepTransport } from './steps/step-transport';

@Component({
  selector: 'clm-create-shipment-page',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CreateSummary,
    StepDate,
    StepMaterials,
    StepTransport,
    StepTimeslot,
    StepOther,
    StepOverview,
  ],
  providers: [CreateContext],
  templateUrl: './create-shipment.page.html',
  styleUrl: './create-shipment.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateShipmentPage {
  protected readonly ctx = inject(CreateContext);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly backNav = inject(BackNavigation);
  private readonly hubPrefs = inject(HubPrefs);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly head = viewChild<ElementRef<HTMLElement>>('head');

  protected readonly steps = STEPS;
  protected readonly d = this.ctx.flow.draft;
  protected readonly edit = computed(() => this.d()?.mode === 'edit');
  protected readonly panelTop = signal(24);

  protected readonly stepStates = computed(() => {
    const d = this.d();
    if (!d) return [];
    return STEPS.map((label, i) => {
      const n = i + 1;
      const state =
        n < d.step || (n <= d.maxStep && n !== d.step && this.valid(n))
          ? 'done'
          : n === d.step
            ? 'cur'
            : n <= d.maxStep
              ? ''
              : 'locked';
      return { n, label, state, lineDone: n <= d.maxStep && n - 1 < d.step };
    });
  });

  protected readonly nextLabel = computed(() => {
    const d = this.d()!;
    return d.step === 6
      ? d.mode === 'edit'
        ? 'Save changes'
        : 'Create shipment'
      : d.step === 5
        ? 'Review'
        : 'Next';
  });

  constructor() {
    // opened without a draft (e.g. page reload): go back to the hub
    if (!this.d()) queueMicrotask(() => this.router.navigate(['/shipments'], { replaceUrl: true }));
    // the summary panel sticks under the header
    effect((onCleanup) => {
      const el = this.head()?.nativeElement;
      if (!el) return;
      const observer = new ResizeObserver(() => this.panelTop.set(el.offsetHeight + 24));
      observer.observe(el);
      onCleanup(() => observer.disconnect());
    });
  }

  // ---------------------------------------------------------------- navigation between steps
  protected go(n: number): void {
    const d = this.d();
    if (!d || n < 1 || n > 6) return;
    this.ctx.flow.update({ step: n, maxStep: Math.max(d.maxStep, n) }, false);
    this.ctx.showErrors.set(false);
    this.scrollTop();
  }

  protected clickStep(n: number): void {
    const d = this.d()!;
    if (n <= d.maxStep || (n === d.maxStep + 1 && this.valid(d.step))) this.go(n);
  }

  protected primary(): void {
    const d = this.d()!;
    if (d.step === 6) {
      if (d.mode === 'edit') this.save();
      else this.create();
      return;
    }
    if (!this.valid(d.step)) {
      this.showErrors();
      return;
    }
    this.go(d.step + 1);
  }

  protected leave(): void {
    const d = this.d();
    if (d?.mode === 'edit' && d.editId) this.router.navigate(['/shipment', d.editId]);
    else if (d?.wpLocked && d.wpId) this.router.navigate(['/group', 'wp', d.wpId]);
    else this.backNav.back();
  }

  protected save(): void {
    if (!this.validateAll()) return;
    const d = this.d()!;
    this.ctx.store.saveShipment(d.editId!, this.toShipment(d), d.comment.trim());
    this.ctx.flow.update({ dirty: false }, false);
    this.router.navigate(['/shipment', d.editId], { replaceUrl: true });
    this.ctx.toast.show('Changes saved');
  }

  protected create(): void {
    if (!this.validateAll()) return;
    const d = this.d()!;
    const s = this.ctx.store.createShipment(
      this.toShipment(d) as Omit<
        Shipment,
        'id' | 'no' | 'status' | 'createdBy' | 'created' | 'activity' | 'comments' | 'annotations'
      >,
      d.comment.trim(),
    );
    this.ctx.flow.discardSavedDraft();
    this.ctx.flow.update({ dirty: false }, false);
    this.hubPrefs.update((p) => ({ expanded: { ...p.expanded, ['wp:' + s.wpId]: true } }));
    this.dialog
      .open(ShipmentCreatedDialog, { width: '440px', disableClose: true, data: s })
      .afterClosed()
      .subscribe((approve) => {
        if (approve) {
          this.ctx.store.setStatus(s.id, 'Approved');
          this.ctx.toast.show('Shipment approved');
        }
        this.router.navigate(['/shipment', s.id], { replaceUrl: true });
      });
  }

  // ---------------------------------------------------------------- validation
  private valid(step: number): boolean {
    return isStepValid(step, this.d()!, this.ctx.today, this.ctx.store.shipments());
  }

  private validateAll(): boolean {
    for (let i = 1; i <= 5; i++) {
      if (!this.valid(i)) {
        this.go(i);
        this.showErrors();
        this.ctx.toast.error(`Please complete step ${i} · ${STEPS[i - 1]}`);
        return false;
      }
    }
    return true;
  }

  private showErrors(): void {
    this.ctx.showErrors.set(true);
    const first = Object.values(
      stepErrors(this.d()!.step, this.d()!, this.ctx.today, this.ctx.store.shipments()),
    )[0];
    if (first) this.ctx.toast.error(first);
    setTimeout(() =>
      this.host.nativeElement
        .querySelector('.has-error, .mat-form-field-invalid')
        ?.scrollIntoView({ block: 'center', behavior: 'smooth' }),
    );
  }

  private scrollTop(): void {
    this.host.nativeElement.closest('.content')?.scrollTo({ top: 0 });
  }

  private toShipment(d: ShipmentDraft): Partial<Shipment> {
    return {
      name: d.name.trim(),
      wpId: d.wpId!,
      date: d.date,
      start: d.start,
      end: d.end,
      sender: d.sender,
      recipient: d.recipient,
      building: d.building,
      floor: d.floor,
      zone: d.zone,
      up: d.up,
      vehicle: d.vehicle,
      vehicles: d.vehicles,
      materials: d.materials,
      equipment: d.equipment,
      onsite: d.onsite,
      orderResp: d.orderResp,
      deliveryResp: d.deliveryResp,
      gate: d.gate,
      plate: d.plate,
      phone: d.phone,
      origin: d.origin,
      km: +d.km || 0,
      modes: d.modes,
      docs: d.docs,
      photos: d.photos,
    };
  }
}
