# @tapizlabs/ui Design Decisions

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

## 3. Design System: Ink & Ember application language

The pre-2.0 flat brutalist system is retired. Authenticated product UI uses soft, layered semantic surfaces and the shared composition primitives.

| Token | Value | Role |
|---|---|---|
| `--color-ink-*` | near-black purple ramp | Canvas and layered surfaces |
| `--color-primary-*` | skin-aware accent ramp | Navigation, icons, focus, contextual emphasis |
| `--color-signal-*` | skin-aware secondary accent | Secondary identity and signal emphasis |
| `--radius-sm…2xl` | 4 to 20px | Controls through large content surfaces |
| `--tapiz-shadow-sm…lg` | soft elevation | Layering without offset or brutal shadows |
| `--font-display` | Inter Variable | Display and body typography |

**Composition primitives are visual policy.** `PageHeader`, `InfoBanner`, `EmptyState`, and `SidePanel` define the authenticated application language. They use rounded 2xl surfaces, restrained semantic borders, 13 to 14px supporting text, and low-opacity thematic graphics derived from their icon. Product apps must compose these primitives instead of recreating them.

**PageHeader contract:** icon tile, title and subtitle, optional primary action below the subtitle, and one contextual aside on the right. Dashboards may use role-specific heroes; other authenticated pages do not create alternate header layouts.

**Geometry is centralized:** component `size`, `density`, `variant`, and `padding` props own radius, height, internal padding, and borders. Consumer class names are reserved for placement and responsive layout. Compact Button, SegmentedTabs, and ActionMenu triggers share the same 36px control height.

**Dark-first, skin-aware:** the default color scheme is dark, light mode is applied via `html:not(.dark)`, and eight `data-skin` palettes recolor semantic tokens. Component code never assumes a fixed hue.

---

## 4. Typography

**Decision:** Inter Variable for display and body typography, with system monospace for code and technical data.

Supporting product text defaults to 13 to 14px. Sizes below 12px are limited to technical labels, keyboard hints, and tertiary counters.

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

---

## 11. Action and Context Menus

**Decision:** Contextual action lists use the shared `ActionMenu` primitive exclusively.

The trigger inherits the standard `Button` size and radius. The floating menu uses a compact 272px default width, a soft 16px surface radius, 44px minimum item height, icon tiles, subtle scale-in motion, and a separated danger group. Consumer applications may control layout width through `menuStyle`, but must not restyle menu item geometry locally.

Use `danger: true` for destructive actions so the separator, tone, hover state, and focus state remain consistent across products.

---

## 12. Modal and Confirmation Dialogs

**Decision:** Every standard modal and destructive confirmation uses `BaseModal` or `ConfirmDialog`. Consumer applications provide content and semantic icons, but do not override the overlay, container, header, icon tile, action geometry, or radius.

Both primitives share an 80% viewport height cap, a soft 16px surface, restrained borders and shadow, thematic low-opacity graphics derived from the dialog icon, internal scrolling, body scroll locking, focus containment, Escape dismissal, and focus restoration. Confirmation actions use the shared `Button` sizes: cancel is ghost and confirm is primary or danger.

Complex domain workflows may compose their content inside `BaseModal`. A separate portal implementation is reserved for interaction models that cannot fit the modal contract, such as a full-screen scanner or editor, and must still preserve the same accessibility behavior.
