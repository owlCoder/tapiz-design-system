# Tapiz UI (@tapizlabs/ui 2.x "Ink & Ember") — build conventions

React 19 design system for the Tapiz education platform (LMS, dashboards, marketing sites). Near-black purple ink, purple primary, ember-orange signal, Inter Variable, 4–20px radii. **No provider is required** — every component works standalone. Import components AND icons from the one barrel: `import { Button, DataTable, Plus, Search } from "@tapizlabs/ui"`.

## Theme, dark mode, skins

- Light theme is the default (no class needed). Dark theme = add class `dark` to `<html>`.
- Optional color skins: set `data-skin` on `<html>` to one of `ocean | forest | rose | graphite | sand | crimson | aurora`, or call the exported `applyTapizSkin(id)` / `clearTapizSkin()` (`TAPIZ_SKINS` lists them).

## Styling idiom: Tailwind v4 utilities over Tapiz tokens

Style your own layout glue with Tailwind classes built from the DS palette (all compiled into `styles.css`). The core class families (use these, never raw hex):

- **Ink surfaces**: `bg-ink-000` … `bg-ink-500` (near-black purple ramp; dark-mode surfaces)
- **Text**: `text-txt-1` (strongest) … `text-txt-4` (subtle)
- **Borders**: `border-border`, `border-border-hi`
- **Primary (purple)**: `bg-primary-500`, `text-primary-400`, etc. (`primary-50`…`primary-950`)
- **Signal (ember orange)**: `signal-300`/`signal-400`/`signal-500`; status: `text-warn`, `text-good`
- **Semantic CSS vars** for inline/dynamic values: `var(--tapiz-bg-surface)`, `var(--tapiz-text-primary)`, `var(--tapiz-border-subtle)`, `var(--tapiz-accent)`, `var(--tapiz-success)`, `var(--tapiz-danger)`
- **DS utility classes** (pre-built looks): `btn-primary`, `btn-secondary`, `btn-danger`, `input-field`, `card`, `card-hover`, `stat-card`, `form-panel`, `skeleton` — but prefer the real components (`Button`, `Input`, `Card`) over these classes.
- Fonts: `Inter Variable` ships with the bundle; mono is a system stack (`ui-monospace, Cascadia Mono, …`) by design.

## Composition rules (from the DS team's own guides — see `guidelines/`)

- `PageHeader` tops every dashboard page; `SectionCard` groups page content.
- KPIs: `MetricCard` inside `StatGrid`.
- All tabular data: `DataTable` with `variant="enterprise" density="comfortable" stickyHeader` and `rowKey={(row) => row.id}`.
- State labels: `StatusBadge`; generic labels: `Badge`. Placeholders: `EmptyState` / `ErrorState` / `Skeleton` — never custom divs.
- Landing pages: `MarketingShell`, `HeroFrame`, `FeatureCard`/`FeatureGrid`, `MockupFrame`, `CTASection`, `ComparisonTable`, `PricingCard`, `TestimonialCard`.
- Toasts need the one context component: wrap in `ToastProvider`, fire via `useToast()`.

## Idiomatic snippet

```tsx
import { PageHeader, Button, StatGrid, MetricCard, DataTable, EmptyState } from "@tapizlabs/ui";

<div className="min-h-screen bg-ink-000 text-txt-1 p-6 space-y-6">
  <PageHeader variant="enterprise" subtitle="Dashboard" title="Attendance overview"
    description="Track class activity and recent changes." actions={<Button>Export</Button>} />
  <StatGrid>
    <MetricCard label="Present" value="92%" trend="+4%" trendTone="positive" />
    <MetricCard label="Late" value="8" trend="-2" trendTone="negative" />
  </StatGrid>
  <DataTable variant="enterprise" density="comfortable" stickyHeader
    data={rows} columns={columns} rowKey={(row) => row.id}
    emptyState={<EmptyState title="No results" />} />
</div>
```

Before styling anything custom, read `styles.css` (tokens + compiled utilities) and the per-component `*.prompt.md`; the `guidelines/` folder carries the DS team's usage and do-not rules.
