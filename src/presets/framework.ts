export type TapizFrameworkPreset = "enterprise" | "brutal" | "dashboard" | "marketing" | "compact";

export interface TapizPresetDefinition {
  shell: string;
  card: string;
  button: "primary" | "secondary" | "brutal";
  density: "compact" | "comfortable" | "spacious";
}

export const tapizFrameworkPresets: Record<TapizFrameworkPreset, TapizPresetDefinition> = {
  enterprise: {
    shell: "tapiz-enterprise-shell",
    card: "tapiz-enterprise-card",
    button: "primary",
    density: "comfortable",
  },
  brutal: {
    shell: "tapiz-enterprise-shell tapiz-grid-bg",
    card: "tapiz-brutal-card",
    button: "brutal",
    density: "comfortable",
  },
  dashboard: {
    shell: "tapiz-enterprise-shell",
    card: "stat-card",
    button: "secondary",
    density: "compact",
  },
  marketing: {
    shell: "tapiz-enterprise-shell tapiz-noise-bg",
    card: "tapiz-enterprise-card",
    button: "primary",
    density: "spacious",
  },
  compact: {
    shell: "tapiz-enterprise-shell",
    card: "card",
    button: "secondary",
    density: "compact",
  },
};
