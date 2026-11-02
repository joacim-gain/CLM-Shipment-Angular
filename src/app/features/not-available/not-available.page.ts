/** Areas outside the Shipments module (prototype: app.js → notAvailable). */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NAV_LABELS } from '../../core/layout/shell';

const ICONS: Record<string, string> = {
  cockpit: 'dashboard',
  equipment: 'precision_manufacturing',
  hub: 'account_balance',
  projects: 'dashboard',
  zone: 'blur_circular',
  material: 'layers',
  team: 'group_add',
  help: 'help',
  admin: 'group',
};

@Component({
  selector: 'clm-not-available-page',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  template: `
    <div class="clm-page">
      <div class="clm-na-page">
        <mat-icon>{{ icon() }}</mat-icon>
        <h2>{{ title() }}</h2>
        <p>
          This area is not part of this demo.<br />The demo covers the <b>Shipments</b> module
          end-to-end.
        </p>
        <a mat-flat-button routerLink="/shipments" class="go"
          ><mat-icon>local_shipping</mat-icon>Go to Shipments</a
        >
      </div>
    </div>
  `,
  styles: `
    .go {
      margin-top: 16px;
      justify-self: center;
    }
    p {
      line-height: 22px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAvailablePage {
  readonly area = input('');
  protected readonly icon = computed(() => ICONS[this.area()] ?? 'info');
  protected readonly title = computed(() => NAV_LABELS[this.area()] ?? 'CLM');
}
