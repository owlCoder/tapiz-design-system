import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "dist"), { recursive: true });

// dist/tailwind-theme.css — raw @theme tokens for Tailwind 4 consumers
// Strip BOM if present, copy as-is (Tailwind 4 consumer processes it)
let tailwindTheme = readFileSync(join(root, "src", "tailwind-theme.css"), "utf8");
if (tailwindTheme.charCodeAt(0) === 0xfeff) tailwindTheme = tailwindTheme.slice(1);
writeFileSync(join(root, "dist", "tailwind-theme.css"), tailwindTheme, "utf8");

console.log("Copied src/tailwind-theme.css → dist/tailwind-theme.css");
