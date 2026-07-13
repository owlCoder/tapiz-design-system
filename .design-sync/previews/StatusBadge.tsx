import React from "react";
import { StatusBadge } from "@tapizlabs/ui";

export const Semantic = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
    <StatusBadge variant="success" label="Grade published" />
    <StatusBadge variant="warning" label="Awaiting review" />
    <StatusBadge variant="danger" label="Exam failed" />
    <StatusBadge variant="info" label="Draft" />
    <StatusBadge variant="default" label="Not graded" />
  </div>
);

export const Lifecycle = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
    <StatusBadge variant="active" label="Semester active" />
    <StatusBadge variant="pending" label="Enrollment pending" />
    <StatusBadge variant="inactive" label="Course archived" />
  </div>
);
