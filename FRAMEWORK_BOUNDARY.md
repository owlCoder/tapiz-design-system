# Tapiz UI Framework Boundary

This document defines what belongs in `@tapiz/ui` and what should remain inside consuming applications.

## Belongs In `@tapiz/ui`

The package is the shared UI framework layer for Tapiz frontends. It should contain:

- design tokens and global theme contract from `theme.css`
- shared font loading
- shared iconography
- reusable React primitives
- generic feedback, modal, table, and form building blocks
- generic page building blocks such as `PageHeader`, `Pagination`, `SearchInput`, `StatusBadge`, and `ActionMenu`
- generic skeleton primitives and reusable loading patterns

Add something to the package when it is:

- reused across multiple Tapiz apps
- visually part of the shared Tapiz language
- not tightly coupled to one app's routes, translations, queries, or storage rules

## Stays App-Specific

The following should remain in consumer apps unless they are intentionally generalized:

- app layout shells like `UILayout`, sidebars, drawers, tenant shells, and role-based navigation
- domain selectors like `SubjectSelector`
- app-specific translation adapters such as wrappers that inject local `i18n` labels
- SEO and document metadata helpers like `SEOHead`
- language/session/settings flows tied to app state or local storage
- page-specific skeleton compositions that represent one screen instead of a reusable primitive
- domain widgets and chart assemblies that depend on product-specific data contracts

## Current Intentional App Adapters

As of this migration, a few local adapters remain by design in `tapiz-reactjs-ui`:

- `SearchInput` wrapper for localized placeholder and clear label
- `Pagination` wrapper for localized labels
- `StatusBadge` wrapper for attendance/admin status mapping

These wrappers are acceptable because they adapt shared framework primitives to app-level language and domain semantics without forking the visual system.

## Rule Of Thumb

If removing product data, routing, and translation concerns still leaves a useful component, it probably belongs in `@tapiz/ui`.
