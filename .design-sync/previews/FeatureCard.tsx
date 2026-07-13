import React from "react";
import { FeatureCard, QrCode, GraduationCap, Book, Shield } from "@tapizlabs/ui";

export const FeatureTrio = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
    <FeatureCard
      icon={<QrCode size={22} />}
      title="QR attendance"
      description="Students scan a rotating QR code in class — attendance is recorded in seconds, no roll call."
    />
    <FeatureCard
      icon={<GraduationCap size={22} />}
      title="Score sheets"
      description="Formula-driven grading with weights and thresholds. Final grades update as results land."
    />
    <FeatureCard
      icon={<Book size={22} />}
      title="Knowledge checks"
      description="Build quizzes from your material bank and see per-topic mastery across the whole cohort."
    />
  </div>
);

export const VariantsAndEyebrow = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <FeatureCard
      variant="surface"
      eyebrow="Security"
      icon={<Shield size={22} />}
      title="Single sign-on"
      description="One Tapiz account across LMS, Boards and Whiteboard — OAuth2 with PKCE."
    />
    <FeatureCard
      variant="raised"
      eyebrow="For faculties"
      title="License management"
      description="Bind a license to a faculty or the whole university and every member is covered."
    >
      <p style={{ margin: "8px 0 0", fontSize: 13, opacity: 0.7 }}>
        Includes usage snapshots and audit trail.
      </p>
    </FeatureCard>
  </div>
);
