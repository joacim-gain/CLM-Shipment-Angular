/**
 * Status filter chip — CLM chip style: icon + zero-padded count + label, tinted by status when selected
 * (prototype: UI.checkChip · app.css .cchip). A toggle button with aria-pressed.
 */
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type ChipTone = 'olive' | 'grey' | 'blue' | 'red' | 'green';

@Component({
  selector: 'clm-check-chip',
  template: `
    <button
      type="button"
      [class]="tone()"
      [class.on]="checked()"
      [attr.aria-pressed]="checked()"
      (click)="pressed.emit()"
    >
      @if (icon()) {
        <img [src]="'fig/' + icon() + '.svg'" width="20" height="20" alt="" />
      }
      <span>{{ count() === null ? '' : pad(count()!) + ' ' }}{{ label() }}</span>
    </button>
  `,
  styleUrl: './check-chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckChip {
  readonly label = input.required<string>();
  readonly count = input<number | null>(null);
  readonly tone = input<ChipTone>('olive');
  readonly checked = input(false);
  /** Image name in public/fig, e.g. 'lg-overdue' */
  readonly icon = input<string>();
  readonly pressed = output<void>();

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
