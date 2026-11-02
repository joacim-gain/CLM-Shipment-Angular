import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shell } from './core/layout/shell';

@Component({
  selector: 'clm-root',
  imports: [Shell],
  template: `<clm-shell />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
