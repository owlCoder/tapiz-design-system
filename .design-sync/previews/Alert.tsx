import React from "react";
import { Alert, Button } from "@tapizlabs/ui";

export const Tones = () => (
  <div style={{ display: "grid", gap: 12 }}>
    <Alert tone="info" title="Scheduled maintenance">
      The grading service will be unavailable on Saturday from 02:00 to 04:00 CET.
    </Alert>
    <Alert tone="success" title="Scores published">
      Results for “Operating Systems — Midterm” are now visible to students.
    </Alert>
    <Alert tone="warning" title="License expiring">
      Your faculty license expires in 14 days. Renew to keep premium features.
    </Alert>
    <Alert tone="danger" title="Import failed">
      3 rows in the uploaded scoresheet could not be parsed. Fix them and retry.
    </Alert>
    <Alert tone="neutral">A neutral note without a title.</Alert>
  </div>
);

export const WithActions = () => (
  <Alert
    tone="warning"
    title="Unsaved changes"
    actions={
      <>
        <Button size="sm">Save now</Button>
        <Button size="sm" variant="ghost">Discard</Button>
      </>
    }
  >
    You have edits in 2 sections that haven’t been saved yet.
  </Alert>
);
