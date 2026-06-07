import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const distFiles = join(dist, "files");

mkdirSync(dist, { recursive: true });
mkdirSync(distFiles, { recursive: true });
copyFileSync(join(root, "src/fonts.css"), join(dist, "fonts.css"));

const builtFontsCss = readdirSync(dist).find((file) => /^fonts-.*\.css$/.test(file));
if (builtFontsCss) {
  const fontsJsPath = join(dist, "fonts.js");
  const fontsJs = readFileSync(fontsJsPath, "utf8").replace(`./${builtFontsCss}`, "./fonts.css");
  writeFileSync(fontsJsPath, fontsJs);
  rmSync(join(dist, builtFontsCss), { force: true });
}

const fontFiles = [
  "ibm-plex-sans-latin-400-normal.woff2",
  "ibm-plex-sans-latin-400-normal.woff",
  "ibm-plex-sans-latin-400-italic.woff2",
  "ibm-plex-sans-latin-400-italic.woff",
  "ibm-plex-sans-latin-500-normal.woff2",
  "ibm-plex-sans-latin-500-normal.woff",
  "ibm-plex-sans-latin-600-normal.woff2",
  "ibm-plex-sans-latin-600-normal.woff",
  "ibm-plex-sans-latin-700-normal.woff2",
  "ibm-plex-sans-latin-700-normal.woff",
  "ibm-plex-sans-cyrillic-400-normal.woff2",
  "ibm-plex-sans-cyrillic-400-normal.woff",
  "ibm-plex-sans-cyrillic-500-normal.woff2",
  "ibm-plex-sans-cyrillic-500-normal.woff",
  "ibm-plex-sans-cyrillic-600-normal.woff2",
  "ibm-plex-sans-cyrillic-600-normal.woff",
  "ibm-plex-sans-cyrillic-700-normal.woff2",
  "ibm-plex-sans-cyrillic-700-normal.woff",
  "ibm-plex-mono-latin-400-normal.woff2",
  "ibm-plex-mono-latin-400-normal.woff",
  "ibm-plex-mono-latin-400-italic.woff2",
  "ibm-plex-mono-latin-400-italic.woff",
  "ibm-plex-mono-latin-500-normal.woff2",
  "ibm-plex-mono-latin-500-normal.woff",
  "ibm-plex-mono-latin-600-normal.woff2",
  "ibm-plex-mono-latin-600-normal.woff",
  "ibm-plex-mono-latin-ext-400-normal.woff2",
  "ibm-plex-mono-latin-ext-400-normal.woff",
  "ibm-plex-mono-latin-ext-500-normal.woff2",
  "ibm-plex-mono-latin-ext-500-normal.woff",
  "ibm-plex-mono-latin-ext-600-normal.woff2",
  "ibm-plex-mono-latin-ext-600-normal.woff",
];

const sourceDirs = [
  join(root, "node_modules/@fontsource/ibm-plex-sans/files"),
  join(root, "node_modules/@fontsource/ibm-plex-mono/files"),
];

for (const fontFile of fontFiles) {
  const source = sourceDirs.map((dir) => join(dir, fontFile)).find(existsSync);
  if (!source) throw new Error(`Missing font asset: ${fontFile}`);
  copyFileSync(source, join(distFiles, fontFile));
}
