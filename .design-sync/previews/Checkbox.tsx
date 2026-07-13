import React from "react";
import { Checkbox } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ display: "grid", gap: 10 }}>
    <Checkbox label="Attended lab exercise 4" defaultChecked />
    <Checkbox label="Submitted homework 2" />
    <Checkbox label="Signed the exam sheet" defaultChecked />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
    <Checkbox size="sm" label="Small — notify by email" defaultChecked />
    <Checkbox size="md" label="Medium — notify by email" defaultChecked />
    <Checkbox size="lg" label="Large — notify by email" defaultChecked />
  </div>
);

export const States = () => (
  <div style={{ display: "grid", gap: 10 }}>
    <Checkbox label="Grades published (locked)" defaultChecked disabled />
    <Checkbox label="Attendance closed" disabled />
    <Checkbox />
  </div>
);
