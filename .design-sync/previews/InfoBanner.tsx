import React from "react";
import { InfoBanner } from "@tapizlabs/ui";

export const Variants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <InfoBanner
      variant="info"
      title="Grades published"
      description="Final grades for Operating Systems were published to all 142 enrolled students."
    />
    <InfoBanner
      variant="warn"
      title="Attendance window closing"
      description="The QR attendance session for today's lecture closes in 5 minutes."
    />
    <InfoBanner
      variant="lock"
      title="Faculty plan required"
      description="Analytics and cohort reports are available on the Faculty plan and above."
    />
  </div>
);

export const TextOnly = () => (
  <InfoBanner text="Score sheet formulas are recalculated automatically when new results are entered." />
);
