// Predefined skins — metadata for skin pickers. The actual colors live in
// theme.css (`html[data-skin=...]` blocks); this file only carries the ids
// and preview swatches so apps can render a chooser without hardcoding hex.

export const TAPIZ_SKIN_IDS = [
  "default",
  "ocean",
  "forest",
  "rose",
  "graphite",
  "sand",
  "crimson",
  "aurora",
] as const;

export type TapizSkinId = (typeof TAPIZ_SKIN_IDS)[number];

export interface TapizSkinPreview {
  /** Surface/background swatch. */
  surface: string;
  /** Primary accent swatch. */
  accent: string;
  /** Signal/highlight swatch. */
  signal: string;
}

export interface TapizSkin {
  id: TapizSkinId;
  preview: {
    dark: TapizSkinPreview;
    light: TapizSkinPreview;
  };
}

export const TAPIZ_SKINS: readonly TapizSkin[] = [
  {
    id: "default",
    preview: {
      dark: { surface: "#171321", accent: "#a989f5", signal: "#fc6d26" },
      light: { surface: "#ffffff", accent: "#7759c2", signal: "#e24329" },
    },
  },
  {
    id: "ocean",
    preview: {
      dark: { surface: "#121724", accent: "#7fb5f2", signal: "#17b3a3" },
      light: { surface: "#ffffff", accent: "#2f6ab6", signal: "#0f9184" },
    },
  },
  {
    id: "forest",
    preview: {
      dark: { surface: "#121a14", accent: "#7ed6a3", signal: "#f59e0b" },
      light: { surface: "#ffffff", accent: "#2b8a57", signal: "#b45309" },
    },
  },
  {
    id: "rose",
    preview: {
      dark: { surface: "#1f1319", accent: "#f290b8", signal: "#e0a80c" },
      light: { surface: "#ffffff", accent: "#cc5382", signal: "#854d0e" },
    },
  },
  {
    id: "graphite",
    preview: {
      dark: { surface: "#141418", accent: "#a8b3c2", signal: "#fc6d26" },
      light: { surface: "#ffffff", accent: "#5c687c", signal: "#e24329" },
    },
  },
  {
    id: "sand",
    preview: {
      dark: { surface: "#1e1812", accent: "#eda87c", signal: "#14b8a6" },
      light: { surface: "#ffffff", accent: "#ab5c2e", signal: "#0d9488" },
    },
  },
  {
    id: "crimson",
    preview: {
      dark: { surface: "#201315", accent: "#f28b8b", signal: "#e0a80c" },
      light: { surface: "#ffffff", accent: "#b83b3b", signal: "#854d0e" },
    },
  },
  {
    id: "aurora",
    preview: {
      dark: { surface: "#121a1b", accent: "#6fd9c4", signal: "#9d7bef" },
      light: { surface: "#ffffff", accent: "#1b8a76", signal: "#6a45c0" },
    },
  },
];

/** Apply a skin by setting `data-skin` on the root element ("default" clears it). */
export function applyTapizSkin(
  id: TapizSkinId,
  root: HTMLElement = document.documentElement,
): void {
  if (id === "default") delete root.dataset.skin;
  else root.dataset.skin = id;
}

/** Remove any active skin, restoring the default Ink & Ember brand. */
export function clearTapizSkin(root: HTMLElement = document.documentElement): void {
  delete root.dataset.skin;
}
