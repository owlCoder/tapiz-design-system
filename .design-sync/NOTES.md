# design-sync notes — tapiz-design-system (@tapizlabs/ui)

Repo-specific gotchas for future syncs. Config: `.design-sync/config.json`; project: https://claude.ai/design/p/60bdd9a4-7664-4fb1-8676-1cce2ad88ad9

## Build / environment

- **No Storybook anywhere** — package shape, components discovered from `dist/index.d.ts`.
- **`types` field**: component discovery needs a top-level `"types": "./dist/index.d.ts"` in package.json (added 2026-07-12). The exports-map-only declaration is invisible to the converter's ts-morph entry resolution — without it, discovery finds 0 components (`[ZERO_MATCH]` → "tokens-only DS").
- **Tailwind v4 native styling**: `theme.css`/`tailwind-theme.css` use `@theme`/`@utility` — NOT browser-ready. The sync compiles a real stylesheet via `npx @tailwindcss/cli -i .design-sync/tailwind-entry.css -o .design-sync/.cache/tapiz-compiled.css --minify` (wired into `cfg.buildCmd`; entry file is committed). The entry `@source`s `src/**` AND `.design-sync/previews/**` so preview glue classes compile too.
- **npm ci fails with EPERM** on `@tailwindcss/oxide-win32-x64-msvc/*.node` (locked native binary on Windows — editor/AV). `npm install` works; retry ci only after closing whatever holds the lock.
- Icons (~100 lucide re-exports + brand icons) are excluded from component cards via `componentSrcMap` nulls but remain fully importable in the bundle. `LogoMark` keeps a card. NOTE: the icon alias `Alert` (TriangleAlert) is shadowed in the barrel by the feedback `Alert` component — do NOT null `Alert`.
- Playwright chromium installed to `%LOCALAPPDATA%\ms-playwright\chromium-1228` (playwright in `.ds-sync/node_modules`).

## Known render warns (triaged as legitimate)

- `[FONT_MISSING] "Cascadia Mono"` — intentional: it's part of the DS's system-monospace fallback stack (`ui-monospace, 'Cascadia Mono', 'SF Mono', Menlo, Consolas, ...`). No mono font ships by design; production behaves the same.

## Preview authoring

- Import everything (components AND icons) from `"@tapizlabs/ui"`.
- `CardHeader`/`CardBody` take only `children` (no title/subtitle/actions props).
- Content register: LMS/education domain (subjects, attendance, grades, scoresheets).

## Re-sync risks

- The compiled CSS (`.design-sync/.cache/tapiz-compiled.css`) is generated per-machine and gitignored — a fresh clone must run `cfg.buildCmd` before the converter or `cssEntry` is missing.
- `.ds-sync/` staged scripts + its node_modules (esbuild, ts-morph, @types/react, playwright) are gitignored — re-stage + reinstall on fresh clones.
- Tailwind compile scans `src/**` at build time: new utility classes used only by future previews require the rebuild step to pick them up (buildCmd handles this if run).
- npm allow-scripts blocks esbuild/parcel postinstalls in this environment; esbuild still works via its platform package.
