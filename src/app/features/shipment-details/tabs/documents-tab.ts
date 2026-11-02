/** Documents & photos tab (prototype: details.js → docsHtml). Upload, download, delete with Undo, photo viewer. */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { Shipment } from '../../../data/clm.model';
import { ClmStore } from '../../../data/clm-store';
import { ConfirmData, ConfirmDialog } from '../../../shared/dialogs/confirm.dialog';
import { PhotoViewerDialog } from '../../../shared/dialogs/photo-viewer.dialog';
import { ShipmentActions } from '../shipment-actions';

@Component({
  selector: 'clm-documents-tab',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, ClmDatePipe],
  templateUrl: './documents-tab.html',
  styleUrl: './documents-tab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsTab {
  readonly shipment = input.required<Shipment>();

  protected readonly data = inject(ClmStore);
  private readonly actions = inject(ShipmentActions);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly dragOver = signal(false);
  protected readonly docTypes = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx';

  protected onDrop(e: DragEvent): void {
    e.preventDefault();
    this.dragOver.set(false);
    this.addDocs([...(e.dataTransfer?.files ?? [])]);
  }

  protected onPick(input: HTMLInputElement, kind: 'docs' | 'photos'): void {
    const files = [...(input.files ?? [])];
    input.value = '';
    if (kind === 'docs') this.addDocs(files);
    else if (files.length) {
      // Kept for this session only; the real app uploads them and stores the returned URLs.
      this.data.addPhotos(
        this.shipment().id,
        files.map((f) => URL.createObjectURL(f)),
      );
      this.snackBar.open('Photo added', undefined, { duration: 3000 });
    }
  }

  protected download(name: string): void {
    // Real app: fetch the file URL from the API. The prototype only simulates this.
    this.snackBar.open(`Downloading “${name}” is simulated in this draft.`, undefined, {
      duration: 3000,
    });
  }

  protected deleteDoc(index: number): void {
    const s = this.shipment();
    const data: ConfirmData = {
      title: 'Delete document?',
      text: `“${s.docs[index].name}” will be removed from this shipment.`,
      ok: 'Delete',
      danger: true,
    };
    this.dialog
      .open(ConfirmDialog, { width: '440px', data })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;
        const doc = this.data.removeDoc(s.id, index);
        this.actions.undoable('Document deleted', () => this.data.restoreDoc(s.id, doc));
      });
  }

  protected removePhoto(index: number): void {
    const id = this.shipment().id;
    const url = this.data.removePhoto(id, index);
    this.actions.undoable('Photo removed', () => this.data.restorePhoto(id, index, url));
  }

  protected openPhoto(index: number): void {
    this.dialog.open(PhotoViewerDialog, {
      data: { photos: this.shipment().photos, index },
      panelClass: 'clm-photo-viewer',
      backdropClass: 'clm-photo-backdrop',
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh',
    });
  }

  private addDocs(files: File[]): void {
    if (!files.length) return;
    this.data.addDocs(this.shipment().id, files);
    this.snackBar.open(`${files.length} document${files.length > 1 ? 's' : ''} added`, undefined, {
      duration: 3000,
    });
  }
}
