/**
 * Shared state of the create / edit page, provided by the page and injected by every step:
 * the draft, its errors, and helpers to change it.
 */
import { Injectable, computed, inject, signal } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { TODAY } from '../../core/date/today';
import { Toast } from '../../core/feedback/toast.service';
import { ClmStore } from '../../data/clm-store';
import { CreateShipmentFlow } from './create-shipment-flow';
import { StepErrors, stepErrors } from './create-rules';
import { ShipmentDraft } from './shipment-draft';

@Injectable()
export class CreateContext {
  readonly flow = inject(CreateShipmentFlow);
  readonly store = inject(ClmStore);
  readonly today = inject(TODAY);
  readonly toast = inject(Toast);

  /** The draft (the page only renders while one exists) */
  readonly d = computed(() => this.flow.draft() as ShipmentDraft);
  /** Errors are shown after a failed "Next", like the prototype */
  readonly showErrors = signal(false);
  readonly errors = computed<StepErrors>(() =>
    stepErrors(this.d().step, this.d(), this.today, this.store.shipments()),
  );
  /** Last changed summary row, for the flash in the summary panel */
  readonly changed = signal<string | null>(null);

  private readonly matchers = new Map<string, ErrorStateMatcher>();

  set(change: Partial<ShipmentDraft>, flash?: string): void {
    this.flow.update(change);
    if (flash) {
      this.changed.set(flash);
      setTimeout(() => this.changed.set(null), 1000);
    }
  }

  /** Error text of a field, once errors are shown */
  err(key: string): string | undefined {
    return this.showErrors() ? this.errors()[key] : undefined;
  }

  /** ErrorStateMatcher for a mat-form-field bound to a draft field (no form control needed) */
  matcher(key: string): ErrorStateMatcher {
    let m = this.matchers.get(key);
    if (!m) {
      m = { isErrorState: () => !!this.err(key) };
      this.matchers.set(key, m);
    }
    return m;
  }
}
