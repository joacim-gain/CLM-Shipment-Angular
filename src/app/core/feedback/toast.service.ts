/** Snackbar messages (prototype: UI.toast), with an optional action such as "Undo". */
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class Toast {
  private readonly snackBar = inject(MatSnackBar);

  show(
    message: string,
    opts: { action?: string; onAction?: () => void; duration?: number; error?: boolean } = {},
  ): void {
    const ref = this.snackBar.open(message, opts.action, {
      duration: opts.duration ?? 4200,
      panelClass: opts.error ? 'clm-toast-error' : undefined,
    });
    if (opts.onAction) ref.onAction().subscribe(opts.onAction);
  }

  /** Message with an Undo action. */
  undoable(message: string, undo: () => void): void {
    this.show(message, { action: 'Undo', onAction: undo });
  }

  error(message: string): void {
    this.show(message, { error: true, duration: 3000 });
  }
}
