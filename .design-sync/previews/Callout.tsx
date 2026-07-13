import React from "react";
import { Callout, Button } from "@tapizlabs/ui";

export const Tones = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <Callout tone="info" title="Semester rollover">
      Winter semester 2026 starts on October 1. Subjects can be cloned from last year in one click.
    </Callout>
    <Callout tone="success" title="Backup complete">
      All score sheets and attendance records were exported to your faculty archive.
    </Callout>
    <Callout tone="warning" title="Unsynced grades">
      3 score sheets have local changes that haven't been published to students yet.
    </Callout>
    <Callout tone="danger" title="License expiring">
      Your university license expires in 7 days. Teaching tools will switch to read-only after that.
    </Callout>
    <Callout tone="neutral" title="Maintenance window">
      Tapiz Cloud will undergo maintenance on Sunday between 02:00 and 04:00 CET.
    </Callout>
  </div>
);

export const WithActions = () => (
  <Callout
    tone="warning"
    title="Quiz has ungraded answers"
    actions={
      <div style={{ display: "flex", gap: 8 }}>
      <Button size="sm" variant="primary">Review answers</Button>
      <Button size="sm" variant="secondary">Dismiss</Button>
      </div>
    }
  >
    12 free-text answers in "Databases — Midterm quiz" still need manual grading before results can be published.
  </Callout>
);
