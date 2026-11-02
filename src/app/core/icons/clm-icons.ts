/**
 * Registers the CLM icon set (exported from Figma) so templates can use <mat-icon svgIcon="clm:ss-open" />.
 * The SVGs live in public/icons/clm and use currentColor, so they take the text colour around them.
 */
import { inject, provideAppInitializer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const CLM_ICON_NAMES = [
  'eq-elevator',
  'eq-excavator',
  'eq-forklift',
  'eq-general',
  'eq-hoist',
  'eq-loader-crane',
  'eq-machine',
  'eq-mobile-crane',
  'eq-passenger-lift',
  'eq-scissor-lift',
  'eq-self-unloading',
  'eq-telehandler',
  'eq-tower-crane',
  'eq-unknown',
  'eq-warning',
  'legend-active',
  'legend-approved',
  'legend-completed',
  'legend-open',
  'legend-overdue',
  'legend-pending',
  'legend-wp-completed',
  'logo-clm',
  'sm-approved',
  'sm-arrived',
  'sm-canceled',
  'sm-completed',
  'sm-intransit',
  'sm-rejected',
  'sm-waiting',
  'ss-approved',
  'ss-arrived',
  'ss-cancelled',
  'ss-completed',
  'ss-intransit',
  'ss-open',
  'ss-rejected',
  'ss-waiting',
  'st-approved',
  'st-cancelled',
  'st-completed',
  'st-intransit',
  'st-parking',
  'st-requested',
  'st-unloading',
  'st-waiting',
  'tr-air',
  'tr-ship',
  'tr-train',
  'veh-anhaenger',
  'veh-autokran',
  'veh-betonpumpe',
  'veh-fahrmischer',
  'veh-lieferwagen',
  'veh-lkw-30',
  'veh-lkw-40',
  'veh-pkw',
  'veh-sattelzug',
  'veh-solo-ab-7-5',
  'veh-solo-bis-7-5',
] as const;

export function provideClmIcons(basePath = 'icons/clm') {
  return provideAppInitializer(() => {
    const registry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    for (const name of CLM_ICON_NAMES) {
      registry.addSvgIconInNamespace(
        'clm',
        name,
        sanitizer.bypassSecurityTrustResourceUrl(`${basePath}/${name}.svg`),
      );
    }
  });
}
