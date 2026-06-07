# Tapiz UI framework usage

Use the framework primitives to avoid hand-building layout and interaction patterns in product code.

## App pages

- Use `AppShell` for the main app frame.
- Use `TopNav` for global product navigation.
- Use `SidebarNav` for section navigation.
- Use `Breadcrumbs` above `PageHeader` when the page is nested.
- Use `PageHeader`, `StatGrid`, `MetricCard`, `SectionCard`, and `DataTable` for dashboard pages.

## Forms

- Use `FormField` to wrap labels, hints, validation errors, and inputs.
- Use `InputGroup` for prefix/suffix controls.
- Use `Switch` for boolean settings.
- Use `ToggleGroup` for compact segmented choices.

## Interaction

- Use `Tabs` for page-local sections.
- Use `Accordion` for dense progressive disclosure.
- Use `Stepper` for onboarding or multi-step creation flows.
- Use `Drawer` for contextual edit/detail panels.
- Use `CommandMenu` for keyboard-first navigation and quick actions.

## Marketing

- Use `MarketingShell`, `HeroFrame`, `FeatureGrid`, `LogoCloud`, `StatsBand`, `PricingCard`, `TestimonialCard`, and `CTASection`.

## Rules

- Do not use raw hex colors in consumers.
- Do not create product-domain components in this package.
- Do not import routing, query, i18n, or app state libraries into this package.
- Prefer exported Tapiz components before writing custom Tailwind structures.
