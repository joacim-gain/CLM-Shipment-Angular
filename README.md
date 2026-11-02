# CLM · Shipments (Angular)

The CLM Shipments module in **Angular 22 + Angular Material**, styled with the Amlog design system.
It's a front-end-ready version of the validated prototype: the same screens and behaviour, with demo data so it runs without a backend.

**Start here → [DEV-GUIDE.md](DEV-GUIDE.md)**: the workflow, the code structure, and how to merge it into the main codebase.

## Screens

| Route | Screen |
|---|---|
| `#/shipments` | Hub: timeline, list and cards; status filters, grouping, properties |
| `#/group/wp/:id` | Working package page (also destination, sender, recipient) |
| `#/shipment/:id/:tab` | Shipment details: overview, documents & photos, annotations, activity; status flow |
| `#/create` | Create / edit / duplicate shipment: 6 steps with a live summary |
| `#/upload` | Upload working packages from Excel, with fixes in the table |
| Dialogs | Create / edit working package, start options, cancel, reject, annotation, materials, people |

## Commands

```bash
npm ci                 # install (Node 22.22+ or 24.15+)
npm start              # dev server → http://localhost:4200
npm test               # unit tests (Vitest)
npm run lint           # ESLint (angular-eslint + accessibility rules)
npm run check          # lint + tests + production build
npm run build:demo     # static demo build → dist/clm-shipments-angular/browser
```

## Publish the demo (GitHub Pages)

GitHub Pages can't run the source code; it needs the built app. The workflow in `.github/workflows/deploy-pages.yml` builds it on every push to `main`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

After that, every push runs lint, tests and the build, then publishes the app. You can follow it in the **Actions** tab.

To host it anywhere else, run `npm run build:demo` and copy `dist/clm-shipments-angular/browser/` to the web root.

## Tech

Angular 22 (standalone, signals, zoneless), Angular Material 22 with an M3 theme mapped to the Amlog tokens, strict TypeScript and strict templates, ESLint, Prettier, Vitest.
