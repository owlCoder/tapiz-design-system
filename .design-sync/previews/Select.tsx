import React from "react";
import { Select } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ maxWidth: 340 }}>
    <Select defaultValue="math">
      <option value="">Choose a subject…</option>
      <option value="math">Mathematics 1</option>
      <option value="prog">Programming Fundamentals</option>
      <option value="db">Database Systems</option>
    </Select>
  </div>
);

export const Invalid = () => (
  <div style={{ maxWidth: 340 }}>
    <Select invalid defaultValue="">
      <option value="">Select exam term (required)</option>
      <option value="jan">January term</option>
      <option value="jun">June term</option>
      <option value="sep">September term</option>
    </Select>
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 340 }}>
    <Select disabled defaultValue="2025">
      <option value="2025">Academic year 2025/26</option>
    </Select>
  </div>
);
