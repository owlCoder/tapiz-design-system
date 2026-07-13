import React from "react";
import { TestimonialCard } from "@tapizlabs/ui";

export const ProfessorQuotes = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <TestimonialCard
      quote="QR attendance alone saved me ten minutes of every lecture. My assistants stopped chasing paper lists entirely."
      author="Dr. Milena Petrović"
      role="Professor of Computer Science, University of Novi Sad"
    />
    <TestimonialCard
      quote="The score sheet formulas match our rulebook exactly. Students see their standing in real time — grade disputes basically disappeared."
      author="Prof. Aleksandar Jović"
      role="Faculty of Electrical Engineering"
    />
  </div>
);

export const CompactQuote = () => (
  <div style={{ maxWidth: 420 }}>
    <TestimonialCard
      quote="We rolled Tapiz out to three departments in a week. The university license made onboarding painless."
      author="Ivana Kostić"
      role="Faculty Manager, FTN"
    />
  </div>
);
