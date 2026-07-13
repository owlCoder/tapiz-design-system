import React from "react";
import { Badge } from "@tapizlabs/ui";

export const Variants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
    <Badge variant="default">Enrolled</Badge>
    <Badge variant="success">Passed</Badge>
    <Badge variant="warning">Retake</Badge>
    <Badge variant="danger">Failed</Badge>
    <Badge variant="info">New material</Badge>
    <Badge variant="muted">Archived</Badge>
  </div>
);

export const InContext = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
    <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      Database Systems <Badge variant="info">3 new quizzes</Badge>
    </span>
    <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      Lab attendance <Badge variant="success">12 / 13</Badge>
    </span>
  </div>
);
