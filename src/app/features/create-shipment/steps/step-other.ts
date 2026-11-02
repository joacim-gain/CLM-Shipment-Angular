/** Step 5 · Other info: responsible persons, documents, photos, sustainability (prototype: create.js → step5). */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Person } from '../../../data/clm.model';
import { PhotoViewerDialog } from '../../../shared/dialogs/photo-viewer.dialog';
import { InitialsPipe } from '../../../shared/pipes/initials.pipe';
import { CreateContext } from '../create-context';
import { AddPersonDialog } from '../dialogs/add-person.dialog';
import { PersonPickerData, PersonPickerDialog } from '../dialogs/person-picker.dialog';

type Role = 'onsite' | 'orderResp' | 'deliveryResp';
const MODES = [
  { m: 'Truck', icon: 'local_shipping' },
  { m: 'Train', svg: 'tr-train' },
  { m: 'Ship', svg: 'tr-ship' },
  { m: 'Air', svg: 'tr-air' },
];

@Component({
  selector: 'clm-step-other',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    InitialsPipe,
  ],
  templateUrl: './step-other.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepOther {
  protected readonly ctx = inject(CreateContext);
  private readonly dialog = inject(MatDialog);
  protected readonly d = this.ctx.d;
  protected readonly modes = MODES;
  protected readonly dragOver = signal(false);
  protected readonly people = this.ctx.store.people;

  protected readonly contacts = computed(() => [
    { role: 'createdBy' as const, label: 'Creator', p: this.ctx.store.person(this.d().createdBy) },
    { role: 'onsite' as const, label: 'Onsite contact', p: this.ctx.store.person(this.d().onsite) },
  ]);

  protected pick(role: Role): void {
    this.dialog
      .open<PersonPickerDialog, PersonPickerData, string>(PersonPickerDialog, {
        width: '440px',
        data: {
          title: role === 'onsite' ? 'Onsite contact' : 'Select person',
          people: this.people(),
          current: this.d()[role],
        },
      })
      .afterClosed()
      .subscribe((id) => {
        if (id === 'new') this.addPerson(role);
        else if (id) this.ctx.set({ [role]: id });
      });
  }

  protected addPerson(role?: Role): void {
    this.dialog
      .open(AddPersonDialog, { width: '440px' })
      .afterClosed()
      .subscribe((p?: Omit<Person, 'id'>) => {
        if (!p) return;
        const person = this.ctx.store.addPerson(p);
        if (role) this.ctx.set({ [role]: person.id });
        this.ctx.toast.show(`${person.name} added`);
      });
  }

  // documents & photos
  protected onDrop(e: DragEvent): void {
    e.preventDefault();
    this.dragOver.set(false);
    this.addDocs([...(e.dataTransfer?.files ?? [])]);
  }
  protected onPickDocs(input: HTMLInputElement): void {
    this.addDocs([...(input.files ?? [])]);
    input.value = '';
  }
  private addDocs(files: File[]): void {
    if (!files.length) return;
    this.ctx.set({ docs: [...this.d().docs, ...files.map((f) => this.ctx.store.docFrom(f))] });
    this.ctx.toast.show(`${files.length} document${files.length > 1 ? 's' : ''} attached`);
  }
  protected removeDoc(i: number): void {
    this.ctx.set({ docs: this.d().docs.filter((_, j) => j !== i) });
  }
  protected onPickPhotos(input: HTMLInputElement): void {
    const files = [...(input.files ?? [])];
    input.value = '';
    // kept for this session only; the real app uploads them and stores the returned URLs
    if (files.length)
      this.ctx.set({ photos: [...this.d().photos, ...files.map((f) => URL.createObjectURL(f))] });
  }
  protected removePhoto(i: number): void {
    this.ctx.set({ photos: this.d().photos.filter((_, j) => j !== i) });
  }
  protected openPhoto(i: number): void {
    this.dialog.open(PhotoViewerDialog, {
      data: { photos: this.d().photos, index: i },
      panelClass: 'clm-photo-viewer',
      backdropClass: 'clm-photo-backdrop',
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh',
    });
  }

  // sustainability
  protected originChanged(value: string): void {
    if (value.trim() && !this.d().km) {
      const km = String(5 + ((value.length * 7) % 60));
      this.ctx.set({ km });
      this.ctx.toast.show(`Distance calculated: ${km} km`);
    }
  }
  protected setMulti(multi: boolean): void {
    this.ctx.set({ multi, ...(multi ? {} : { modes: ['Truck'] }) });
  }
  protected toggleMode(m: string): void {
    const modes = this.d().modes.includes(m)
      ? this.d().modes.filter((x) => x !== m)
      : [...this.d().modes, m];
    this.ctx.set({ modes });
  }
}
