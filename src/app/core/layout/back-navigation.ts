/** "Back" arrow behaviour: return to the previous screen in this app, or to a fallback (prototype: goBack). */
import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackNavigation {
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private inAppNavigations = 0;

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.inAppNavigations++);
  }

  back(fallback: unknown[] = ['/shipments']): void {
    if (this.inAppNavigations > 1) this.location.back();
    else this.router.navigate(fallback);
  }
}
