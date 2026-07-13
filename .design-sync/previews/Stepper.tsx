import React from "react";
import { Stepper } from "@tapizlabs/ui";

const enrollmentSteps = [
  { id: "account", label: "Create account", description: "Student identity verified", status: "complete" as const },
  { id: "documents", label: "Upload documents", description: "Transcript and ID card", status: "complete" as const },
  { id: "subjects", label: "Choose subjects", description: "Pick 6 courses for the semester", status: "current" as const },
  { id: "confirm", label: "Confirmation", description: "Faculty manager approval", status: "upcoming" as const },
];

const gradingSteps = [
  { id: "collect", label: "Collect scoresheets", status: "complete" as const },
  { id: "verify", label: "Verify points", description: "2 sheets failed validation", status: "error" as const },
  { id: "publish", label: "Publish grades", status: "upcoming" as const },
];

export const Horizontal = () => (
  <Stepper steps={enrollmentSteps} orientation="horizontal" />
);

export const Vertical = () => (
  <div style={{ maxWidth: 420 }}>
    <Stepper steps={enrollmentSteps} orientation="vertical" />
  </div>
);

export const WithErrorState = () => (
  <Stepper steps={gradingSteps} orientation="horizontal" />
);
