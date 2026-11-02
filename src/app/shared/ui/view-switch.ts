/** Icon-only view switcher (prototype .vswitch) on mat-button-toggle-group. */
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface ViewOption {
  value: string;
  icon: string;
  label: string;
  disabled?: boolean;
  disabledHint?: string;
}

@Component({
  selector: 'clm-view-switch',
  imports: [MatButtonToggleModule, MatIconModule, MatTooltipModule],
  template: `
    <mat-button-toggle-group
      [value]="value()"
      (change)="value.set($event.value)"
      [hideSingleSelectionIndicator]="true"
      aria-label="View"
    >
      @for (o of options(); track o.value) {
        <mat-button-toggle
          [value]="o.value"
          [disabled]="!!o.disabled"
          [matTooltip]="o.disabled ? (o.disabledHint ?? '') : o.label"
          [attr.aria-label]="o.label"
        >
          <mat-icon>{{ o.icon }}</mat-icon>
        </mat-button-toggle>
      }
    </mat-button-toggle-group>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    mat-button-toggle-group {
      border: 1px solid var(--color-olive-200);
      border-radius: var(--radius-large);
      --mat-button-toggle-height: 36px;
      --mat-button-toggle-divider-color: var(--color-olive-200);
      --mat-button-toggle-shape: 8px;
      --mat-button-toggle-text-color: #a3a3a8;
      --mat-button-toggle-selected-state-background-color: var(--color-surface-selected);
      --mat-button-toggle-selected-state-text-color: #6a6a63;
      --mat-button-toggle-disabled-state-text-color: #d6d6d9;
      --mat-button-toggle-disabled-state-background-color: #fff;
      --mat-button-toggle-state-layer-color: var(--color-action-primary);
    }
    mat-button-toggle-group.mat-button-toggle-group-appearance-standard {
      border: 1px solid var(--color-olive-200);
    }
    :host ::ng-deep .mat-button-toggle-label-content {
      padding: 0 !important;
      width: 48px;
      display: grid !important;
      place-items: center;
      line-height: 36px !important;
    }
    mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSwitch {
  readonly options = input.required<ViewOption[]>();
  readonly value = model.required<string>();
}
