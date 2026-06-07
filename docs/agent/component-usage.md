# Tapiz UI component usage for agents

Use this file before editing app UI. Prefer exported components from `@tapizlabs/ui` over ad-hoc markup.

## Core rules

- Use `PageHeader` at the top of dashboard/admin pages.
- Use `SectionCard` for grouped page content.
- Use `MetricCard` inside `StatGrid` for KPI/dashboard metrics.
- Use `DataTable` for all tabular data. Prefer `variant="enterprise"`, `density="comfortable"`, `stickyHeader`, and `mobileCard` when tables appear in dashboards.
- Use `StatusBadge` for state labels and `Badge` for generic compact labels.
- Use `EmptyState`, `ErrorState`, and `Skeleton` instead of custom placeholder divs.
- Use marketing primitives (`MarketingShell`, `HeroFrame`, `FeatureCard`, `FeatureGrid`, `MockupFrame`, `CTASection`, `ComparisonTable`) for landing pages.

## Token rules

- Never use raw hex colors in app or component classes.
- Use semantic CSS variables such as `--tapiz-bg-surface`, `--tapiz-text-primary`, `--tapiz-border-subtle`, `--tapiz-accent`, `--tapiz-success`, `--tapiz-danger`.
- Keep light and dark theme behavior inside `src/theme.css`; app code should not branch manually for themes.

## Boundary rules

- `@tapizlabs/ui` must stay framework-light and domain-agnostic.
- Do not import router, query, i18n, API clients, auth, or app business models into the design system.
- Domain components belong in the app. Generic components belong here.

## Preferred examples

```tsx
<PageHeader
  variant="enterprise"
  subtitle="Dashboard"
  title="Attendance overview"
  description="Track class activity and recent changes."
  actions={<Button>Export</Button>}
/>

<StatGrid>
  <MetricCard label="Present" value="92%" trend="+4%" trendTone="positive" />
  <MetricCard label="Late" value="8" trend="-2" trendTone="negative" />
</StatGrid>

<DataTable
  variant="enterprise"
  density="comfortable"
  stickyHeader
  data={rows}
  columns={columns}
  rowKey={(row) => row.id}
  emptyState={<EmptyState title="No results" />}
/>
```
