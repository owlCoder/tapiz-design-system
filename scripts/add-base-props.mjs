import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = new URL("../src/components", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const ICON_FILES = new Set(["ActionIcons.tsx", "AuthIcons.tsx", "BaseIcons.tsx", "FeedbackIcons.tsx", "FormsIcons.tsx", "LayoutIcons.tsx", "LogoIcons.tsx", "NavigationIcons.tsx", "SettingsIcons.tsx", "StatusIcons.tsx"]);

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) files.push(full);
  }
  return files;
}

let changed = 0;
let skipped = 0;

for (const file of walk(ROOT)) {
  const name = file.split(/[/\\]/).pop();
  if (ICON_FILES.has(name)) { skipped++; continue; }

  let src = readFileSync(file, "utf8");

  if (!src.includes("className?: string")) { skipped++; continue; }

  // Skip if already uses BaseProps
  if (src.includes("BaseProps")) { skipped++; continue; }

  // Find all interfaces that contain className?: string
  const interfaceRegex = /(export\s+)?interface\s+(\w+Props)\s*(?:extends\s+[^{]+)?\s*\{([^}]*className\?:\s*string[^}]*)\}/gs;
  let found = false;
  let modified = src.replace(interfaceRegex, (match, exp = "", name, body) => {
    const hasExtends = /extends/.test(match.split("{")[0]);
    const decl = hasExtends
      ? match.replace(/\{/, "{ ") // already extends something - skip adding extends
      : `${exp}interface ${name} extends BaseProps {${body}}`;

    // Remove "className?: string;" line from body
    const cleaned = decl.replace(/^[ \t]*className\?:\s*string;?[ \t]*\n?/m, "");
    if (cleaned !== match) found = true;
    return cleaned;
  });

  if (!found) { skipped++; continue; }

  // Add import after last existing import line
  const importLine = `import type { BaseProps } from "../../types";`;
  const lastImportIdx = [...modified.matchAll(/^import\s.+;\n/gm)].at(-1);
  if (lastImportIdx) {
    const pos = lastImportIdx.index + lastImportIdx[0].length;
    modified = modified.slice(0, pos) + importLine + "\n" + modified.slice(pos);
  } else {
    modified = importLine + "\n" + modified;
  }

  writeFileSync(file, modified, "utf8");
  changed++;
  console.log("Updated:", relative(ROOT, file));
}

console.log(`\nDone: ${changed} updated, ${skipped} skipped.`);
