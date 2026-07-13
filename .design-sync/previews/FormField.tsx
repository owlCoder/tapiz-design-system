import React from "react";
import { FormField, Input, Textarea, Select } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ maxWidth: 360 }}>
    <FormField label="Subject name" htmlFor="ff-subject" required>
      <Input id="ff-subject" defaultValue="Operating Systems" />
    </FormField>
  </div>
);

export const WithHint = () => (
  <div style={{ maxWidth: 360 }}>
    <FormField
      label="Student index number"
      htmlFor="ff-index"
      hint="Format: year/number, e.g. 2021/0233"
    >
      <Input id="ff-index" placeholder="2021/0233" />
    </FormField>
  </div>
);

export const WithError = () => (
  <div style={{ maxWidth: 360 }}>
    <FormField
      label="Points (max 100)"
      htmlFor="ff-points"
      required
      error="Points must be between 0 and 100."
    >
      <Input id="ff-points" type="number" invalid defaultValue={130} />
    </FormField>
  </div>
);

export const ComposedForm = () => (
  <div style={{ display: "grid", gap: 16, maxWidth: 360 }}>
    <FormField label="Exam term" htmlFor="ff-term" required>
      <Select id="ff-term" defaultValue="jun">
        <option value="jan">January term</option>
        <option value="jun">June term</option>
        <option value="sep">September term</option>
      </Select>
    </FormField>
    <FormField label="Note to students" htmlFor="ff-note" hint="Visible on the exam schedule page.">
      <Textarea id="ff-note" rows={2} placeholder="Bring your student ID card…" />
    </FormField>
  </div>
);
