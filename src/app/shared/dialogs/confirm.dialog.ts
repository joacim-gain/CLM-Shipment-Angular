/**
 * Generic confirm / message dialog (prototype: UI.confirm and UI.modal with plain text).
 * Returns true when the main button is clicked.
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map } from 'rxjs';

export interface ConfirmData {
  title: string;
  sub?: string;
  text: string;
  /** Main button label */
  ok: string;
  /** Second button label; null hides it (message dialog) */
  cancel?: string | null;
  danger?: boolean;
  /** Optional bullet list under the text */
  items?: string[];
  /** Optional icon on the main button */
  okIcon?: string;
}

@Component({
  selector: 'clm-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  host: { class: 'clm-dlg' },
  template: `
    <div class="clm-dlg-head">
      <div class="grow">
        <h2 mat-dialog-title>{{ data.title }}</h2>
        @if (data.sub) {
          <p class="clm-dlg-sub">{{ data.sub }}</p>
        }
      </div>
      <button mat-icon-button [mat-dialog-close]="false" aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <p>{{ data.text }}</p>
      @if (data.items?.length) {
        <ul class="items">
          @for (i of data.items; track $index) {
            <li>{{ i }}</li>
          }
        </ul>
      }
    </mat-dialog-content>
    <mat-dialog-actions>
      @if (data.cancel !== null) {
        <button mat-button [mat-dialog-close]="false">{{ data.cancel ?? 'Cancel' }}</button>
      }
      <button mat-flat-button [class.clm-danger-btn]="data.danger" [mat-dialog-close]="true">
        @if (data.okIcon) {
          <mat-icon>{{ data.okIcon }}</mat-icon>
        }
        {{ data.ok }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .items {
      margin: 8px 0 0;
      padding-left: 20px;
      line-height: 22px;
      color: var(--color-text-primary);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialog {
  protected readonly data = inject<ConfirmData>(MAT_DIALOG_DATA);
}

/** Opens the confirm dialog; emits true when confirmed. */
export function confirm(dialog: MatDialog, data: ConfirmData): Observable<boolean> {
  return dialog
    .open(ConfirmDialog, { width: '440px', maxWidth: 'calc(100vw - 48px)', data })
    .afterClosed()
    .pipe(map((r) => r === true));
}
