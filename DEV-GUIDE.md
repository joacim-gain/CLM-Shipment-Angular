# CLM Shipments · Dev guide

The Shipments module, built in **Angular 22 + Angular Material**, from the prototype that UX, BA and the client already validated.
Same screens, same behaviour, same Amlog design tokens. It runs without a backend, so you can try everything before wiring the API.

> **TL;DR:** run it → read the 4 folders → merge one feature per PR → swap the store's demo data for API calls.

---

## 1. The workflow

```
 Prototype                 This repo                         Your codebase
 (validated UI + flows) →  Angular + Material + DS theme  →  merged feature by feature, on your API
                           tests · lint · strict types       your review, your release
```

| Who | Owns |
|---|---|
| **UX** | Screens, interactions, wording, DS tokens. Answers "how should this behave?" |
| **Dev** | Architecture, API, security, performance, the merge, and the final code |
| **BA** | Business rules: they all live in a few files (see §6) |

**Per feature, one loop:**
1. **Walkthrough** (30 min): UX shows the flow in the running app.
2. **Merge**: one feature, one PR (§4).
3. **Connect**: swap demo data for API calls (§5).
4. **Check**: compare with the live demo side by side.
5. **Release**.

---

## 2. Run it (2 minutes)

```bash
npm ci
npm start              # http://localhost:4200
npm run check          # lint + unit tests + production build
npm run build:demo     # static build for any web server (hash URLs, relative paths)
```

Node 22.22+ or 24.15+.

---

## 3. Code structure

```
src/
├─ styles/                  Global styles only
│  ├─ _clm-base.scss          Amlog DS tokens as CSS variables (1:1 with Figma)
│  ├─ _amlog-theme.scss       Tokens → Angular Material theme (+ per-component overrides)
│  ├─ _amlog-material-sizing  DS sizes Material has no token for (32px inputs, dropdown panel…)
│  └─ _clm-patterns.scss      Shared CLM patterns, all prefixed `clm-`
└─ app/
   ├─ core/                 App-wide plumbing (no business logic)
   │  ├─ date/               ISO date helpers, Swiss date adapter (dd.mm.yyyy), calendar header, TODAY token
   │  ├─ forms/              "Show errors after submit" matcher
   │  ├─ icons/              CLM SVG icon set → <mat-icon svgIcon="clm:…">
   │  ├─ feedback/           Snackbar (Toast) with Undo
   │  └─ layout/             Demo app shell (side nav, top bar) + back navigation
   ├─ data/                 The domain
   │  ├─ clm.model.ts        Types: Shipment, WorkingPackage, …
   │  ├─ reference-data.ts   Statuses, colours, status flow, lists
   │  ├─ clm-store.ts        ★ The only data entry point (signals). Swap its internals for HTTP.
   │  └─ demo-seed.ts        Demo data (keep it for tests)
   ├─ shared/               Reusable UI: status pill, WP card, check chip, view switch, dialogs, pipes
   └─ features/             One folder per screen, lazy-loaded
      ├─ hub/                Shipments: timeline / list / cards, filters, properties
      ├─ group/              Working package (or destination / sender / recipient) page
      ├─ shipment-details/   Details: tabs, details panel, status flow, dialogs
      ├─ create-shipment/    6-step create / edit flow (rules in create-rules.ts)
      ├─ working-package/    Create / edit working package dialog
      └─ upload/             Excel import with in-table fixes
```

**One rule:** components never touch storage or HTTP. Data flows **ClmStore → page → components**.

---

## 4. Merge into the main codebase

Merge it in this order. Every step builds and works on its own.

| Step | What | Notes |
|---|---|---|
| **0** | Check versions | Built on Angular / Material **22**. The theming API needs Material **19+**. |
| **1** | Styles | Copy `src/styles/`, and use them in your `styles.scss` as in ours. If you already have a Material theme, include `amlog-theme.apply()` only inside the CLM area. |
| **2** | Core + shared | Copy `core/date`, `core/forms`, `core/icons`, `core/feedback`, `shared/`, and the icons in `public/icons/clm`. Add the providers from `app.config.ts`. |
| **3** | Data | Copy `data/`. Keep the `ClmStore` method names and replace their bodies with API calls (§5). |
| **4** | Features, one PR each | Suggested order: `shipment-details` → `group` → `hub` → `working-package` → `upload` → `create-shipment` (largest). Copy the matching lines from `app.routes.ts`. |
| **5** | Shell | **Don't** copy `core/layout/shell`. Use your app shell. Set `--clm-shell-top` to your top bar height. |
| **6** | Remove demo-only parts | See §7. |

---

## 5. Connect the API

Everything goes through **`data/clm-store.ts`**. Keep the public methods and change only their bodies:

```ts
// before (demo)                              // after (your API)
setStatus(id, status, reason?) {              setStatus(id, status, reason?) {
  this.update(id, (s) => { … });                this.http.patch(`/api/shipments/${id}/status`, { status, reason })
}                                                 .subscribe((s) => this.replace(s));
                                              }
```

- **Reads:** `wps`, `shipments`, `uploads`, `notifications`, `people`, `materials` are signals. Load them from the API (or move to `httpResource`).
- **Writes:** `createShipment`, `saveShipment`, `setStatus`, `cancel`, `addComment`, `addDocs`, `addPhotos`, `addAnnotation`, `importWorkingPackages`, `addWorkingPackage`, `updateWorkingPackage`, `addPerson`, `addMaterial`.
- **Mocked today:** availability (`create-rules.ts → busyAt / equipmentBusy`), weather (`data/weather.ts`, `create-rules.ts → dayWeather / hourWeather`), and Excel parsing (`upload-rows.ts → simulatedRows`).
- **Field names** mirror the prototype (`clm.model.ts`). Rename them once, there, to match the API.

---

## 6. Business rules (BA confirms)

All of them are in plain functions, with unit tests:

| File | Rules |
|---|---|
| `data/reference-data.ts` | The 8 shipment statuses and colours, the allowed next statuses (`STATUS_FLOW`), locked statuses |
| `data/clm-store.ts` | Working package status (overdue / active / pending / completed), approval also approves booked equipment |
| `features/create-shipment/create-rules.ts` | Express days, closed weekends, validation per step, free slots, overlaps, recommended vehicle |
| `features/upload/upload-rows.ts` | Required columns, date format, unknown trade or building |
| `features/hub/hub-groups.ts` | Grouping, sorting, search, status filters |

---

## 7. Demo-only (remove or replace)

- **`TODAY` token:** fixed to 25.10.2026. Provide the real date (`core/date/today.ts`).
- **localStorage persistence** in `ClmStore`, and **"Reset demo data"** in the shell menu.
- **Mock data:** `demo-seed.ts`, weather, availability, simulated `.xlsx` parsing, simulated download.
- **"Not part of this demo" messages:** site switcher, languages, profile, other modules (`features/not-available`).
- **Photos** are kept as `blob:` URLs for the session. Upload them, and store the URLs.

---

## 8. Conventions

- **Components:** standalone, `OnPush`, signals, `input()` / `output()`, `@if` / `@for` control flow, lazy routes.
- **Checks:** strict TypeScript + strict templates (extended diagnostics are errors), ESLint (angular-eslint, accessibility rules on), Prettier, Vitest.
- **Material** is used wherever it fits: buttons, form fields, select, datepicker, dialog, menu, tabs, table, snackbar, tooltip, chips, checkbox, slide toggle, button toggle.
- **Custom components** cover only CLM patterns Material doesn't have: timeline, WP folder card, status pill, check chip, drop zone, slot grid.
- **Global classes** are prefixed `clm-`. Component styles stay next to the component.
- **Visual source of truth:** the Amlog DS in Figma. Tokens in `_clm-base.scss` match it 1:1.

**Intended differences from the prototype:**
- Dates use the Material datepicker with a Swiss adapter: type `20.10.2026`, or pick from the calendar.
- Dropdowns use the Material panel, styled like the CLM dropdown.
- Errors appear after "Next" or "Save", as in the prototype.
