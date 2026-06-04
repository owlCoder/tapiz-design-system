# @tapizlabs/ui — Design Decisions (Initial Phase)

## Overview

`@tapizlabs/ui` is a shared component library and design system extracted from the `tapiz-reactjs-ui` codebase. This document records the foundational decisions made before any implementation began.

---

## 1. Distribution Model

**Decision:** Published npm package (`@tapizlabs/ui`), not a private workspace-only package.

**Rationale:**
- External consumers need to be able to install and use the Tapiz visual style without access to the monorepo.
- Internal apps (`tapiz-reactjs-ui`, `tapiz-service-platform/dashboard`) benefit from the same distribution path — no special workspace tooling required.
- Publishing forces a clean public API surface: only what is explicitly exported is accessible.

**Trade-off accepted:** Every breaking change requires a version bump and a publish step before consumers can update. This is more friction than a local workspace link, but was a conscious choice over workspace-only distribution.

---

## 2. Styling Strategy: Tailwind v4 + CSS-first Design Tokens

**Decision:** Keep Tailwind v4. Design tokens live exclusively in a `@theme` CSS block. Custom utility classes (`btn-primary`, `card`, `input-field`, etc.) are defined via `@utility`.

**Rationale:**
- Both existing apps already use identical `@theme` + `@utility` blocks — extraction is a copy, not a rewrite.
- Tailwind v4 is CSS-first: `@theme` variables are the source of truth and Tailwind reads them to generate utility classes (`bg-primary-300`, `text-txt-2`, etc.). No JavaScript config needed for tokens.
- `@utility` classes decouple components from long Tailwind strings while keeping styles tree-shakeable at the consumer level.
- External consumers can override any token (e.g. `--color-primary-300`) for rebranding without forking the package.

**Rejected alternatives:**
- Pure CSS / CSS Modules — loses Tailwind utility speed in consumer apps.
- Tailwind JS `preset` as the single distribution unit — still requires duplicating CSS variable declarations; less ergonomic for non-Tailwind consumers.

---

## 3. Design System: Grid Brutalism — Electric Cyan + Signal Lime

**Visual identity established in `tapiz-reactjs-ui/src/index.css`:**

| Token | Value | Role |
|---|---|---|
| `--color-ink-000` | `#050608` | Darkest background |
| `--color-primary-300` | `#5ee7ff` | Main accent (Electric Cyan) |
| `--color-signal-400` | `#d4ff3a` | Shadow/highlight (Signal Lime) |
| `--color-warn` | `#ff7a4d` | Warning state |
| `--color-good` | `#4dd6a3` | Success state |
| `--radius-sm` (and all radii) | `0` | Sharp corners everywhere |
| `--font-display` | IBM Plex Sans | Display and body text |
| Monospace | IBM Plex Mono | Code, data, labels |

**Signature effect:** `btn-primary` uses a 4px solid lime offset shadow (`box-shadow: 4px 4px 0 0 var(--color-signal-400)`) that shifts on hover — the defining visual gesture of the system.

**Dark-first:** the default color scheme is dark. Light mode is applied via `html:not(.dark)` overrides.

---

## 4. Typography

**Decision:** IBM Plex Sans (display + body) and IBM Plex Mono (code/data), loaded via `@fontsource` packages.

**Font weights loaded:**
- IBM Plex Sans: 300, 400, 500, 600, 700 — Latin + Cyrillic subsets
- IBM Plex Mono: 400, 500 — Latin + Cyrillic subsets

**Distribution:** font imports are centralized in `tapiz-design-system/src/fonts.ts` (a single `import "@tapizlabs/ui/fonts"` in consumer `main.tsx`).

---

## 5. Component Scope for v1

**Decision:** All shareable presentational components go into v1 — no staged rollout.

**What goes into the package (generic, domain-free):**

| Category | Components |
|---|---|
| `forms/` | Button, Checkbox, RadioButton, inputs |
| `feedback/` | Spinner, Toast, ToastProvider, StatusBadge, FormError, ErrorBoundary |
| `modals/` | BaseModal, ConfirmDialog |
| `table/` | DataTable, DataTableRow + types |
| `shared/` | EmptyState, PageHeader, Pagination, SearchInput, SectionTitle, InfoBanner, Tooltip |
| `icons/` | Full BaseIcons set |
| `layout/` | DesktopSidebar, MobileDrawerMenu, UILayout (as headless/props-driven shells) |

**What stays in the app (domain-bound):**
- Components that reference routes, i18n namespaces, query keys, or business models.
- Examples: `SubjectSelector`, `CurrentSessionCard`, `NoStudentsState`, `LogoutPanel`, `SEOHead`, `LanguageSwitcher`, all `features/*` code.

**Rule of thumb:** if a component can render given only React props and CSS variables, it belongs in the package. If it needs to know about the application's domain, it stays in the app.

---

## 6. Package Exports Shape

```jsonc
{
  ".":           { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
  "./theme.css": "./dist/theme.css",
  "./fonts":     { "types": "./dist/fonts.d.ts", "import": "./dist/fonts.js" }
}
```

Three entry points only:
- **`.`** — all components and types.
- **`./theme.css`** — design tokens + utility classes (can be used standalone without any JS).
- **`./fonts`** — `@fontsource` imports (side-effect only).

---

## 7. Build Tooling

**Decision:** `tsup` as the library bundler.

**Output:** ESM + `.d.ts` declarations. `react` and `react-dom` are `external` (not bundled). `theme.css` is copied to `dist/` as a static asset.

**Why tsup over alternatives:**
- Zero-config for simple React libraries.
- Native ESM output with declaration maps.
- No Rollup/Webpack configuration overhead for this use case.

---

## 8. Consumer Integration Requirements

Any app consuming `@tapizlabs/ui` must:

1. `@import "@tapizlabs/ui/theme.css"` in its root CSS file (before any app-specific overrides).
2. `import "@tapizlabs/ui/fonts"` in its entry point (`main.tsx`).
3. Import `@tapizlabs/ui/theme.css` in the root CSS. The package now ships a compiled CSS bundle, so consumers do not need an extra `@source` directive.

Point 3 is the most common integration mistake — without it, Tailwind purges class strings that appear only inside the package's compiled JS.

---

## 9. Known Risks Accepted

| Risk | Mitigation |
|---|---|
| Tailwind class purging in consumers | Solved in-package by shipping a compiled CSS bundle |
| Dual React instance | `react`/`react-dom` as `peerDependencies` only |
| Button API divergence (reactjs-ui `@utility` vs dashboard CVA) | Standardize on reactjs-ui version; update dashboard call sites during migration |
| i18n/domain leakage in components | Audit each component before moving: no `react-i18next`, `queryKeys`, or router imports allowed in package components |
| Version bump overhead | Accepted — conscious trade-off of published package vs. workspace link |

---

## 10. Migration Phases (Planned)

| Phase | Goal |
|---|---|
| 0 | Scaffold `tapiz-design-system/` package skeleton |
| 1 | Extract `theme.css` + `fonts.ts` |
| 2 | Move generic components, write barrel export, build + typecheck |
| 3 | Migrate `tapiz-reactjs-ui` to consume `@tapizlabs/ui` |
| 4 | Migrate `tapiz-service-platform/dashboard` to consume `@tapizlabs/ui` |
| 5 | Publish to npm (`npm publish --access public`) |

Full migration plan: [`uiframework.md`](../uiframework.md)
