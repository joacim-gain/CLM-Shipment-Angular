/** "Shipment created" — open it, or approve it right away (prototype: create.js → create). Returns true for Approve. */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { Shipment } from '../../../data/clm.model';

@Component({
  selector: 'clm-shipment-created-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, ClmDatePipe],
  host: { class: 'clm-dlg' },
  template: `
    <div class="clm-dlg-head">
      <div class="grow"><h2 mat-dialog-title>Shipment created</h2></div>
    </div>
    <mat-dialog-content>
      <p class="name">{{ s.name }}</p>
      <p>{{ s.no }} · {{ s.date | clmDate: 'day' }} · {{ s.start }} – {{ s.end }} · {{ s.up }}</p>
      <p class="note">
        The shipment is <b>Open</b> and waiting for approval. You can approve it right away if
        you’re responsible for this site.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">
        <mat-icon>open_in_new</mat-icon>Open shipment
      </button>
      <button mat-flat-button [mat-dialog-close]="true"><mat-icon>check</mat-icon>Approve</button>
    </mat-dialog-actions>
  `,
  styles: `
    .name {
      color: var(--color-text-primary) !important;
      font-weight: 500;
      margin-bottom: 4px !important;
    }
    .note {
      margin-top: 12px !important;
    }
    b {
      font-weight: 500;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentCreatedDialog {
  protected readonly s = inject<Shipment>(MAT_DIALOG_DATA);
}
