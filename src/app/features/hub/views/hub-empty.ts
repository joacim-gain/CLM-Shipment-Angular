/** "No results" state shared by the hub views. */
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HubPrefs } from '../hub-prefs';

@Component({
  selector: 'clm-hub-empty',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="clm-empty">
      <mat-icon>search_off</mat-icon>
      <b>No results</b>
      <span>{{
        prefs().search
          ? 'Nothing matches “' + prefs().search + '”.'
          : 'No working packages match the selected status.'
      }}</span>
      <button mat-stroked-button (click)="clearFilters.emit()">
        <mat-icon>filter_alt_off</mat-icon>Clear filters
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubEmpty {
  protected readonly prefs = inject(HubPrefs).value;
  readonly clearFilters = output<void>();
}
