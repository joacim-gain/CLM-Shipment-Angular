/**
 * App shell: side navigation, top bar, content area (prototype: index.html + app.js).
 * In the main codebase this is usually replaced by the existing CLM shell — only the router outlet matters.
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ClmStore } from '../../data/clm-store';
import { CURRENT_SITE, SITES } from '../../data/reference-data';
import { confirm } from '../../shared/dialogs/confirm.dialog';
import { ClmDatePipe } from '../date/clm-date.pipe';
import { Toast } from '../feedback/toast.service';
import { readLocal, writeLocal } from '../storage/local-store';
import { HubPrefs } from '../../features/hub/hub-prefs';

interface NavItem {
  key: string;
  icon: string;
  label: string;
  link: string;
}

/** Side navigation items — icons are the CLM nav assets from Figma (Side Navigation component). */
const NAV: NavItem[] = [
  { key: 'cockpit', icon: 'nav-layout-b', label: 'Cockpit', link: '/na/cockpit' },
  { key: 'shipments', icon: 'nav-shipping', label: 'Shipments', link: '/shipments' },
  { key: 'equipment', icon: 'nav-equipment', label: 'Equipment', link: '/na/equipment' },
  { key: 'hub', icon: 'nav-account-balance', label: 'Consolidation Hub', link: '/na/hub' },
  { key: 'projects', icon: 'nav-layout-b', label: 'Projects', link: '/na/projects' },
  { key: 'zone', icon: 'nav-blur', label: 'Logistics Zone', link: '/na/zone' },
  { key: 'material', icon: 'nav-layers', label: 'Material Management', link: '/na/material' },
  { key: 'team', icon: 'nav-group-add', label: 'Team', link: '/na/team' },
  { key: 'help', icon: 'nav-help', label: 'Help', link: '/na/help' },
  { key: 'upload', icon: 'nav-upload', label: 'Upload', link: '/upload' },
  { key: 'admin', icon: 'nav-admin', label: 'Administrator', link: '/na/admin' },
];
export const NAV_LABELS: Record<string, string> = Object.fromEntries(
  NAV.map((n) => [n.key, n.label]),
);

const NAV_KEY = 'clm-nav-collapsed';

@Component({
  selector: 'clm-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    ClmDatePipe,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell {
  private readonly router = inject(Router);
  private readonly store = inject(ClmStore);
  private readonly prefs = inject(HubPrefs);
  private readonly dialog = inject(MatDialog);
  private readonly toast = inject(Toast);
  private readonly content = viewChild.required<ElementRef<HTMLElement>>('content');

  protected readonly nav = NAV;
  protected readonly collapsed = signal(readLocal(NAV_KEY, false));
  protected readonly activeNav = signal('shipments');
  protected readonly notifications = this.store.notifications;
  protected readonly unread = signal(true);

  protected readonly site = CURRENT_SITE;
  protected readonly siteProject = SITES.find((s) => s.name === CURRENT_SITE)!.project;
  protected readonly siteQuery = signal('');
  protected readonly sites = computed(() =>
    SITES.filter((s) =>
      (s.name + ' ' + s.project).toLowerCase().includes(this.siteQuery().toLowerCase()),
    ),
  );
  protected readonly languages = ['EN', 'DE', 'FR'] as const;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((e) => {
        const area = e.urlAfterRedirects.split('/')[1]?.split('?')[0];
        this.activeNav.set(area === 'na' ? e.urlAfterRedirects.split('/')[2] : 'shipments');
        this.content().nativeElement.scrollTop = 0;
      });
  }

  protected toggleNav(): void {
    this.collapsed.update((v) => !v);
    writeLocal(NAV_KEY, this.collapsed());
  }

  protected pickSite(name: string): void {
    if (name !== this.site)
      this.toast.show(`Only ${this.site} has demo data. Other sites are not part of this demo.`);
  }

  protected pickLanguage(code: string): void {
    if (code !== 'EN') this.toast.show('Translations are not part of this demo.');
  }

  protected notificationTone(tone: string): string {
    return (
      {
        error: 'var(--color-status-error-fg)',
        success: 'var(--color-status-success-fg)',
        neutral: 'var(--color-icon-default)',
      }[tone] ?? ''
    );
  }

  protected profile(): void {
    this.toast.show('Profile is not part of this demo.');
  }

  protected resetDemo(): void {
    confirm(this.dialog, {
      title: 'Reset demo data?',
      ok: 'Reset',
      danger: true,
      text: 'All changes you made in this browser (new shipments, status changes, uploads…) will be removed and the original demo data restored.',
    }).subscribe((ok) => {
      if (!ok) return;
      this.store.reset();
      this.prefs.reset();
      this.collapsed.set(false);
      writeLocal(NAV_KEY, false);
      this.router.navigate(['/shipments']);
      this.toast.show('Demo data restored');
    });
  }
}
