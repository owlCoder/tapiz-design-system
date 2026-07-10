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
  "inter-latin-wght-normal.woff2",
  "inter-latin-ext-wght-normal.woff2",
  "inter-cyrillic-wght-normal.woff2",
  "inter-latin-wght-italic.woff2",
  "inter-latin-ext-wght-italic.woff2",
  "inter-cyrillic-wght-italic.woff2",
];

const sourceDirs = [
  join(root, "node_modules/@fontsource-variable/inter/files"),
];

for (const fontFile of fontFiles) {
  const source = sourceDirs.map((dir) => join(dir, fontFile)).find(existsSync);
  if (!source) throw new Error(`Missing font asset: ${fontFile}`);
  copyFileSync(source, join(distFiles, fontFile));
}
