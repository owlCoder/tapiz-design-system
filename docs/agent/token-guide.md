# Tapiz token guide

`src/theme.css` is the source of truth. New UI should use semantic tokens, not raw palette tokens.

## Surfaces

- `--tapiz-bg-page` page background
- `--tapiz-bg-surface` card/table/modal background
- `--tapiz-bg-surface-muted` table headers, subtle panels, hover rows
- `--tapiz-bg-surface-raised` elevated surfaces

## Borders and focus

- `--tapiz-border-subtle` normal separators
- `--tapiz-border-strong` important outline / brutalism border
- `--tapiz-border-focus` focus state

## Text

- `--tapiz-text-primary` headings and important content
- `--tapiz-text-secondary` body text
- `--tapiz-text-muted` meta text
- `--tapiz-text-disabled` disabled/low emphasis

## Accents and status

- `--tapiz-accent`, `--tapiz-accent-hover`, `--tapiz-accent-soft`
- `--tapiz-success`, `--tapiz-warning`, `--tapiz-danger`, `--tapiz-info`

## Enterprise brutalism

Use `variant="brutal"` only for key landing/CTA surfaces or deliberate emphasis. Avoid making every card brutal.
