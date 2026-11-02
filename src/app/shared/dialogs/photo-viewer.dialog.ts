/** Full-screen photo viewer with previous / next (prototype: UI.lightbox). */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'clm-photo-viewer',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  host: { '(document:keydown.arrowleft)': 'step(-1)', '(document:keydown.arrowright)': 'step(1)' },
  template: `
    <img [src]="data.photos[index()]" alt="Shipment photo {{ index() + 1 }}" />
    <button mat-icon-button class="close" mat-dialog-close aria-label="Close">
      <mat-icon>close</mat-icon>
    </button>
    @if (data.photos.length > 1) {
      <button mat-icon-button class="prev" (click)="step(-1)" aria-label="Previous photo">
        <mat-icon>chevron_left</mat-icon>
      </button>
      <button mat-icon-button class="next" (click)="step(1)" aria-label="Next photo">
        <mat-icon>chevron_right</mat-icon>
      </button>
      <div class="pos">{{ index() + 1 }} / {{ data.photos.length }}</div>
    }
  `,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
    }
    img {
      max-width: 86vw;
      max-height: 82vh;
      border-radius: 6px;
    }
    button {
      position: absolute;
      --mat-icon-button-icon-color: #fff;
    }
    .close {
      top: 16px;
      right: 16px;
    }
    .prev {
      left: 16px;
      top: 50%;
    }
    .next {
      right: 16px;
      top: 50%;
    }
    .pos {
      position: absolute;
      bottom: 20px;
      color: #fff;
      font-size: 13px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoViewerDialog {
  protected readonly data = inject<{ photos: string[]; index: number }>(MAT_DIALOG_DATA);
  protected readonly index = signal(this.data.index);

  protected step(d: number): void {
    const n = this.data.photos.length;
    this.index.update((i) => (i + d + n) % n);
  }
}
