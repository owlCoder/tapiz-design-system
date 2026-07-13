import React from "react";
import { Switch } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ display: "grid", gap: 14, maxWidth: 380 }}>
    <Switch checked onChange={() => {}} label="Email notifications" />
    <Switch checked={false} onChange={() => {}} label="Weekly grade digest" />
  </div>
);

export const WithDescription = () => (
  <div style={{ display: "grid", gap: 14, maxWidth: 420 }}>
    <Switch
      checked
      onChange={() => {}}
      label="Publish scoresheet"
      description="Students can see their points as soon as you enter them."
    />
    <Switch
      checked={false}
      onChange={() => {}}
      label="Allow late submissions"
      description="Accept homework uploads up to 48h after the deadline."
    />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "grid", gap: 14, maxWidth: 380 }}>
    <Switch checked disabled onChange={() => {}} label="Two-factor auth (enforced by faculty)" />
    <Switch checked={false} disabled onChange={() => {}} label="Guest access" />
  </div>
);
