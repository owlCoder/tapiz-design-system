import React from "react";
import { Textarea } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ maxWidth: 420 }}>
    <Textarea
      rows={4}
      defaultValue="Covered chapters 3–5: normalization, functional dependencies and BCNF. Homework 3 is due next Friday."
    />
  </div>
);

export const Placeholder = () => (
  <div style={{ maxWidth: 420 }}>
    <Textarea rows={3} placeholder="Add feedback for the student's lab report…" />
  </div>
);

export const States = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
    <Textarea rows={2} invalid defaultValue="Announcement text exceeds the 500 character limit…" />
    <Textarea rows={2} disabled defaultValue="Syllabus is locked while the semester is active." />
  </div>
);
