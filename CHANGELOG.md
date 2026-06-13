# Changelog

All notable changes to `@tapizlabs/ui` should be documented in this file.

The format is based on Keep a Changelog and the package follows Semantic Versioning for published releases.

## [Unreleased]

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
