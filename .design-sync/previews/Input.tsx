import React from "react";
import { Input } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 340 }}>
    <Input placeholder="Search students…" />
    <Input defaultValue="Software Engineering 101" />
  </div>
);

export const States = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 340 }}>
    <Input invalid defaultValue="not-an-email" />
    <Input disabled defaultValue="ETF Belgrade (locked)" />
    <Input readOnly defaultValue="Index no. 2021/0233" />
  </div>
);

export const InputTypes = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 340 }}>
    <Input type="email" placeholder="student@university.edu" />
    <Input type="number" defaultValue={87} min={0} max={100} />
    <Input type="date" defaultValue="2026-07-12" />
  </div>
);
