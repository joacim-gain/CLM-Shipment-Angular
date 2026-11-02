/**
 * Working package card in the folder shape (Amlog DS/Pattern/Working Package Card · prototype: UI.wpCard).
 * Used in the hub's card view and in step 1 of create shipment.
 */
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WpStatus } from '../../data/clm.model';
import { tradeColor, tradeDark } from '../../data/reference-data';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { WpStatusIcon } from './wp-status';

export interface WpCardCounts {
  open: number;
  approved: number;
  completed: number;
  draft: number;
}

@Component({
  selector: 'clm-wp-card',
  imports: [MatIconModule, MatTooltipModule, HighlightPipe, WpStatusIcon],
  template: `
    <div class="ftab" [class.dark-t]="dark()" [style.background]="tabBackground()">
      {{ tabLabel() || trade() }}
    </div>
    <div class="fbody">
      <div class="ft">
        <span
          class="t"
          [matTooltip]="title()"
          [innerHTML]="title() | clmHighlight: highlight()"
        ></span>
        @if (selected()) {
          <span class="chk"><mat-icon>check</mat-icon></span>
        } @else if (status(); as st) {
          <clm-wp-icon [status]="st" [size]="18" />
        }
      </div>
      <div class="fl">
        <img src="fig/wp-building.svg" width="20" height="20" alt="" />{{ building() }}
      </div>
      <div class="fl">
        <img src="fig/wp-floor.svg" width="20" height="20" alt="" />{{ floor() }}
      </div>
      <div class="fl">{{ dates() }}</div>
      <div class="fsub">{{ sender() }}</div>
      <div class="fstats">
        <span matTooltip="Open"><img src="fig/wp-open.svg" alt="" />{{ counts().open }}</span>
        <span matTooltip="Approved / in progress"
          ><img src="fig/wp-approved.svg" alt="" />{{ counts().approved }}</span
        >
        <span matTooltip="Completed"
          ><img src="fig/wp-completed.svg" alt="" />{{ counts().completed }}</span
        >
        <span matTooltip="Draft / canceled"
          ><img src="fig/chip-draft.svg" alt="" />{{ counts().draft }}</span
        >
      </div>
    </div>
  `,
  host: {
    role: 'button',
    tabindex: '0',
    '[class.sel]': 'selected()',
    '(click)': 'activate.emit()',
    '(keydown.enter)': 'activate.emit()',
  },
  styleUrl: './wp-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WpCard {
  readonly title = input.required<string>();
  readonly trade = input<string>('');
  /** Text in the folder tab; defaults to the trade */
  readonly tabLabel = input<string>();
  /** Tab colour override (e.g. olive for non-WP groups); defaults to the trade colour */
  readonly tabColor = input<string>();
  readonly building = input('');
  readonly floor = input('');
  readonly dates = input('');
  readonly sender = input('');
  readonly counts = input<WpCardCounts>({ open: 0, approved: 0, completed: 0, draft: 0 });
  readonly status = input<WpStatus | null>(null);
  readonly selected = input(false);
  readonly highlight = input('');
  readonly activate = output<void>();

  protected readonly tabBackground = computed(() => this.tabColor() || tradeColor(this.trade()));
  protected readonly dark = computed(() => !this.tabColor() && tradeDark(this.trade()));
}
