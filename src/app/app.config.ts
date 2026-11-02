import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';
import { provideChDateAdapter } from './core/date/ch-date-adapter';
import { provideClmIcons } from './core/icons/clm-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Hash URLs (#/shipments) so the static build works on any web server, e.g. GitHub Pages.
    // In the main codebase, use its existing router setup instead.
    provideRouter(
      routes,
      withHashLocation(),
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    provideChDateAdapter(),
    provideClmIcons(),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { autoFocus: 'first-tabbable', restoreFocus: true, hasBackdrop: true },
    },
    // Production: { provide: TODAY, useFactory: () => new Date().toISOString().slice(0, 10) }  (see core/date/today.ts)
  ],
};
