import React from "react";
import { HeroFrame, Button, Badge, LogoMark } from "@tapizlabs/ui";

export const ProductHero = () => (
  <HeroFrame
    eyebrow="Tapiz LMS"
    title="Attendance, grading and quizzes in one place"
    description="Run your faculty on one platform — QR attendance, score sheets, knowledge checks and office hours, built for professors and assistants."
    actions={
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="primary">Start free</Button>
        <Button variant="secondary">Book a demo</Button>
      </div>
    }
    meta="Free for individual professors — no credit card required."
  />
);

export const HeroWithVisual = () => (
  <HeroFrame
    eyebrow={<Badge>New in 2.0</Badge>}
    title="Score sheets that compute themselves"
    description="Define your formula once — points, weights and thresholds — and Tapiz keeps every student's final grade up to date as results come in."
    actions={<Button variant="primary">See how it works</Button>}
    visual={
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 180,
          borderRadius: 12,
          border: "1px solid var(--tapiz-border, #d1d0d3)",
        }}
      >
        <LogoMark size={72} variant="lms" />
      </div>
    }
  />
);
