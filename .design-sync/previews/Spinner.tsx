import React from "react";
import { Spinner } from "@tapizlabs/ui";

export const Sizes = () => (
  <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
    <Spinner size="w-3 h-3" />
    <Spinner size="w-4 h-4" />
    <Spinner size="w-6 h-6" />
    <Spinner size="w-8 h-8" />
  </div>
);

export const Colors = () => (
  <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
    <Spinner size="w-6 h-6" color="text-primary-700" />
    <Spinner size="w-6 h-6" color="text-signal" />
    <Spinner size="w-6 h-6" color="text-txt-4" />
  </div>
);

export const InlineWithText = () => (
  <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
    <Spinner size="w-4 h-4" />
    <span>Loading scoresheet for Database Systems…</span>
  </div>
);
