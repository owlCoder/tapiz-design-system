# Changelog

All notable changes to `@tapizlabs/ui` should be documented in this file.

The format is based on Keep a Changelog and the package follows Semantic Versioning for published releases.

## [Unreleased]

### Changed
- `PageHeader` now provides the canonical authenticated-page composition with an icon tile, title/subtitle/action stack, optional right-side `aside`, soft surface, and thematic edge graphics.
- `InfoBanner`, `EmptyState`, `ErrorState`, and `SidePanel` now share the rounded, softer-border application style and readable 13 to 14px supporting typography.
- `EmptyState` now accepts an optional `action` and `size`; `SidePanel` derives subtle background graphics from its icon.
- `Button` sizes now use fixed DS heights, and `SegmentedTabs` shares the same compact/standard height scale so adjacent controls align without consumer overrides.
- `ActionMenu` now uses the canonical compact menu surface with softer borders, icon tiles, danger grouping, active-trigger feedback, reduced default width, and scale-in motion.
- `BaseModal` and `ConfirmDialog` now share the canonical rounded overlay surface, thematic edge graphics, readable typography, DS-sized actions, scroll locking, focus containment, Escape handling, and focus restoration.

## [2.3.11] - 2026-07-20

### Fixed
- `LandingNavbarShell` mobile menu now opens full-screen (`inset: 0`, no max-height cap) instead of a short dropdown-style panel anchored under the header, matching the LMS landing page's mobile drawer UX. Blur/backdrop-filter on the drawer is unchanged.

## [2.3.0] - 2026-07-12

### Removed
- **Breaking:** `LogoMark` component removed (`src/components/icons/LogoIcons.tsx` deleted, export dropped from `src/components/icons/index.ts`). Every product now owns its brand glyph as a local `EcosystemLogoMark` component instead of importing a shared one — already ported in `tapiz-lms`, `tapiz-boards`, `tapiz-cloud-status`, `tapiz-sentinel`. Consumers still pinned to `^0.x`/`^2.2.x` ranges are unaffected; only a `^2.3.0`+ upgrade picks this up.

## [2.2.0] - 2026-07-10

### Added
- Four more predefined skins: `graphite` (neutral gray + steel accent), `sand` (warm desert + terracotta), `crimson` (ruby accent + gold signal), `aurora` (mint accent + violet signal) — 8 skins total including default Ink & Ember

## [2.1.0] - 2026-07-10

### Added
- **Predefined skins**: `theme.css` ships `data-skin` palette overrides (`ocean`, `forest`, `rose`) that re-color the primitive ramps in both light and dark mode; no attribute = default Ink & Ember. Apply with `applyTapizSkin(id)` / `clearTapizSkin()`; picker metadata (ids + preview swatches) exported as `TAPIZ_SKINS` / `TAPIZ_SKIN_IDS` with `TapizSkinId`/`TapizSkin` types
- `Palette` lucide icon re-export

### Changed
- `theme.css` semantic tokens now derive fully from the primitive ramps (`--tapiz-bg-surface-inverse`, `--tapiz-text-inverse`, `--tapiz-accent-contrast`, `--tapiz-bg-overlay`, `--tapiz-bg-surface-raised`, and the whole light block) — same resolved values as before, but skins only need to override primitives

### Added
- npm-ready README with package setup, exports, examples, and publishing guidance
- shared support for landing icon exports such as `Star`, `AppleIcon`, and `GooglePlayIcon`

## [0.2.9] - 2026-06-13

### Added
- `LogoMark` gains a `"playground"` variant — Tapiz "T" with a shell prompt `>_` glyph (chevron in signal yellow, white cursor) for the Tapiz Playground product

### Changed
- shared `Button` accepts icon component references in addition to rendered nodes
- shared `ConfirmDialog` supports both `description` and compatibility `message` props
- consumer apps are now migrated to shared theme, fonts, and shared UI primitives

## [0.2.6] - 2026-06-12

### Fixed
- `PasswordInput` inner input no longer renders its own focus signal bar; the wrapper's `focus-within` signal stays at the field's left edge even when the wrapper has extra padding (e.g. `pl-10` for an inline icon)

## [0.2.5] - 2026-06-12

### Fixed
- `PasswordInput` reveal toggle now works: an Eye/EyeOff icon button switches the input between password and text (previously a static "Show" label with no behavior)

## [0.2.4] - 2026-06-12

### Added
- `theme.css`: `html.theme-switching` transition guard — apps add the class on `<html>` during a theme toggle (and remove it a frame later) to switch the theme instantly instead of per-element transition lag
