# Tapiz max framework usage

Use these components when building larger product surfaces:

- Use `StickyBar` for persistent page actions, filters, save bars, and preview banners.
- Use `PageRail` for docs pages, settings subsections, and long form navigation.
- Use `MasonryGrid` for uneven card galleries and feature catalogs.
- Use `Combobox`, `DateRangePicker`, `ColorSwatchPicker`, and `RatingInput` for richer settings and CRUD forms.
- Use `ScoreRing`, `HeatmapGrid`, `FunnelChart`, and `ComparisonMeter` for lightweight analytics without app-specific chart dependencies.
- Use `ApprovalQueue`, `FeatureFlagTable`, `PlanUsage`, `SLAStatus`, `InboxList`, and `ActivityFeed` for admin/enterprise dashboards.
- Use `AnnouncementBar`, `FAQSection`, and `RoadmapList` for landing pages and docs pages.

Rules:

- Do not add app-specific dependencies to `@tapizlabs/ui`.
- Do not use raw hex colors in app pages; use Tapiz tokens or component props.
- Prefer these framework blocks before creating one-off page-specific UI.
