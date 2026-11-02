/** Annotations tab (prototype: details.js → annotationsHtml, addAnnotation). */
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClmDatePipe } from '../../../core/date/clm-date.pipe';
import { AnnotationType, Shipment } from '../../../data/clm.model';
import { ClmStore } from '../../../data/clm-store';
import { AnnotationDialog, AnnotationDraft } from '../dialogs/annotation.dialog';
import { ConfirmData, ConfirmDialog } from '../../../shared/dialogs/confirm.dialog';

const TONES: Record<AnnotationType, { icon: string; tone: string }> = {
  Note: { icon: 'sticky_note_2', tone: 'neutral' },
  Damage: { icon: 'report', tone: 'error' },
  Delay: { icon: 'schedule', tone: 'warning' },
};

@Component({
  selector: 'clm-annotations-tab',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, ClmDatePipe],
  template: `
    @let s = shipment();
    <mat-card appearance="raised" class="clm-card">
      <div class="clm-card-head">
        <div class="grow">
          <mat-card-title>Annotations ({{ s.annotations.length }})</mat-card-title>
          <mat-card-subtitle
            >Notes from the site team about this delivery — damage, delays or anything worth
            remembering.</mat-card-subtitle
          >
        </div>
        <button mat-flat-button (click)="add()"><mat-icon>add</mat-icon>Add annotation</button>
      </div>
      @for (a of s.annotations; track $index; let i = $index) {
        <div class="clm-row-box ann">
          <span class="dic" [class]="tones[a.type].tone"
            ><mat-icon>{{ tones[a.type].icon }}</mat-icon></span
          >
          <div class="grow">
            <div class="head">
              <b>{{ a.title }}</b
              ><span class="clm-pill" [class]="tones[a.type].tone">{{ a.type }}</span>
            </div>
            @if (a.text) {
              <div class="text">{{ a.text }}</div>
            }
            <div class="clm-cap text">
              {{ data.person(a.by).name }} · {{ a.at | clmDate: 'time' }}
            </div>
          </div>
          <button
            mat-icon-button
            class="clm-icon-btn-sm"
            matTooltip="Delete"
            aria-label="Delete annotation"
            (click)="remove(i)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      } @empty {
        <div class="clm-empty">
          <mat-icon>edit_note</mat-icon>
          <b class="title">No annotations yet</b>
          <span>Add the first one, e.g. “Pallet 3 damaged on arrival”.</span>
        </div>
      }
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
    }
    .ann {
      align-items: flex-start;
    }
    .ann > .grow {
      flex: 1;
      min-width: 0;
    }
    .head {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .text {
      margin-top: 4px;
    }
    .dic {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: #f2f2f2;
      color: #54545d;
      display: grid;
      place-items: center;
      flex: none;
    }
    .dic.error {
      background: #ffdbd5;
      color: #b51c00;
    }
    .dic.warning {
      background: #fef3c7;
      color: #92400e;
    }
    .dic mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
    .title {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 500;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnotationsTab {
  readonly shipment = input.required<Shipment>();

  protected readonly data = inject(ClmStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly tones = TONES;

  protected add(): void {
    this.dialog
      .open<AnnotationDialog, void, AnnotationDraft>(AnnotationDialog, {
        width: '440px',
        maxWidth: 'calc(100vw - 48px)',
      })
      .afterClosed()
      .subscribe((a) => {
        if (!a) return;
        this.data.addAnnotation(this.shipment().id, a);
        this.snackBar.open('Annotation added', undefined, { duration: 3000 });
      });
  }

  protected remove(index: number): void {
    const data: ConfirmData = {
      title: 'Delete annotation?',
      text: 'This annotation will be removed.',
      ok: 'Delete',
      danger: true,
    };
    this.dialog
      .open(ConfirmDialog, { width: '440px', data })
      .afterClosed()
      .subscribe((ok) => {
        if (ok) this.data.removeAnnotation(this.shipment().id, index);
      });
  }
}
