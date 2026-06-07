# Tapiz design system project map

## Important files

- `src/theme.css` — Tailwind v4 theme + semantic Tapiz tokens + light/dark overrides.
- `src/index.ts` — public API exports.
- `src/components/forms` — form primitives (`Button`, `Input`, `Select`, etc.).
- `src/components/shared` — reusable app surfaces and feedback primitives.
- `src/components/table` — generic `DataTable` and row types.
- `src/components/marketing` — generic landing page / enterprise marketing primitives.
- `docs/agent` — compact instructions for coding agents.

## Recommended agent workflow

1. Read `docs/agent/component-usage.md`.
2. Read only the component file that must change.
3. Check `src/index.ts` if a new public export is needed.
4. Check `src/theme.css` only when adding/changing tokens.
5. Run `npm run typecheck` before returning changes.
