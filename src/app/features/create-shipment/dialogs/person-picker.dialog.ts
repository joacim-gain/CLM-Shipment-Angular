/** Pick a person (prototype: create.js → personPicker). Returns the person id, 'new' to add someone, or nothing. */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Person } from '../../../data/clm.model';
import { InitialsPipe } from '../../../shared/pipes/initials.pipe';

export interface PersonPickerData {
  title: string;
  people: Person[];
  current: string;
}

@Component({
  selector: 'clm-person-picker-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    InitialsPipe,
  ],
  host: { class: 'clm-dlg' },
  template: `
    <div class="clm-dlg-head">
      <div class="grow">
        <h2 mat-dialog-title>{{ data.title }}</h2>
      </div>
      <button mat-icon-button mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content>
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="clm-search search">
        <mat-icon matPrefix>search</mat-icon>
        <input
          matInput
          placeholder="Search by name or organization"
          (input)="query.set($any($event.target).value)"
          cdkFocusInitial
          aria-label="Search people"
        />
      </mat-form-field>
      <mat-radio-group
        class="list"
        [value]="picked()"
        (change)="picked.set($event.value)"
        aria-label="People"
      >
        @for (p of list(); track p.id) {
          <mat-radio-button [value]="p.id">
            <span class="person"
              ><span class="clm-avatar sm">{{ p.name | clmInitials }}</span>
              <span
                ><b>{{ p.name }}</b
                ><small>{{ p.org }} · {{ p.phone }}</small></span
              ></span
            >
          </mat-radio-button>
        } @empty {
          <div class="clm-cap">No person found</div>
        }
      </mat-radio-group>
      <button mat-button class="add" [mat-dialog-close]="'new'">
        <mat-icon>person_add</mat-icon>Add new person
      </button>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button [disabled]="!picked()" [mat-dialog-close]="picked()">Select</button>
    </mat-dialog-actions>
  `,
  styles: `
    .search {
      width: 100%;
      margin-bottom: 10px;
    }
    .list {
      display: flex;
      flex-direction: column;
      max-height: 300px;
      overflow: auto;
    }
    .list mat-radio-button {
      border-bottom: 1px solid #f0f0f0;
      padding: 4px 0;
    }
    .person {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: 18px;
    }
    .person b {
      font-weight: 500;
      display: block;
    }
    .person small {
      display: block;
      color: var(--color-text-secondary);
      font-size: 12px;
    }
    .add {
      margin-top: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonPickerDialog {
  protected readonly data = inject<PersonPickerData>(MAT_DIALOG_DATA);
  protected readonly ref = inject(MatDialogRef);
  protected readonly query = signal('');
  protected readonly picked = signal(this.data.current);
  protected readonly list = computed(() => {
    const q = this.query().toLowerCase();
    return this.data.people.filter((p) => !q || (p.name + p.org).toLowerCase().includes(q));
  });
}
