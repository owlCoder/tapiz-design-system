import React from "react";
import { LogoMark } from "@tapizlabs/ui";

const products = [
  "lms",
  "boards",
  "whiteboard",
  "playground",
  "cloud",
  "specs",
  "pulse",
  "sentinel",
] as const;

const Swatch = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
    {children}
    <span style={{ fontSize: 11, opacity: 0.7 }}>{label}</span>
  </div>
);

export const ProductVariants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
    {products.map((v) => (
      <Swatch key={v} label={v}>
        <LogoMark size={56} variant={v} />
      </Swatch>
    ))}
  </div>
);

export const Tones = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
    <Swatch label="solid">
      <LogoMark size={64} tone="solid" variant="lms" />
    </Swatch>
    <Swatch label="outline">
      <LogoMark size={64} tone="outline" variant="lms" />
    </Swatch>
    <Swatch label="glyph">
      <LogoMark size={64} tone="glyph" variant="lms" />
    </Swatch>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
    <LogoMark size={24} variant="lms" />
    <LogoMark size={40} variant="lms" />
    <LogoMark size={64} variant="lms" />
    <LogoMark size={96} variant="lms" />
  </div>
);
