import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "dist"), { recursive: true });

// dist/theme.css — src/theme.css with `@import "tailwindcss"` stripped.
// Consumers add tailwindcss themselves; this file contains only
// @theme tokens, @layer base overrides, and @utility definitions.
let theme = readFileSync(join(root, "src", "theme.css"), "utf8");
if (theme.charCodeAt(0) === 0xfeff) theme = theme.slice(1); // strip BOM
theme = theme.replace(/^@import\s+"tailwindcss";\s*\n?/m, "");
writeFileSync(join(root, "dist", "theme.css"), theme, "utf8");
console.log("Written dist/theme.css (tailwindcss import stripped)");

// dist/tailwind-theme.css — raw @theme tokens for Tailwind 4 consumers
let tailwindTheme = readFileSync(join(root, "src", "tailwind-theme.css"), "utf8");
if (tailwindTheme.charCodeAt(0) === 0xfeff) tailwindTheme = tailwindTheme.slice(1);
writeFileSync(join(root, "dist", "tailwind-theme.css"), tailwindTheme, "utf8");
console.log("Written dist/tailwind-theme.css");
