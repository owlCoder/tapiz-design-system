import React from "react";
import { Button, Plus, Download } from "@tapizlabs/ui";

export const Variants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Button variant="primary">Save changes</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="danger">Delete course</Button>
    <Button variant="ghost">Dismiss</Button>
    <Button variant="outline-primary">Preview</Button>
    <Button variant="link">Learn more</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Button icon={<Plus />}>New subject</Button>
    <Button variant="secondary" icon={<Download />}>Export report</Button>
  </div>
);

export const States = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Button disabled>Disabled</Button>
    <Button loading>Saving…</Button>
    <Button fullWidth>Full width</Button>
  </div>
);
