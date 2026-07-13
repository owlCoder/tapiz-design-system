import React from "react";
import { Accordion, Badge } from "@tapizlabs/ui";

const syllabus = [
  {
    id: "week1",
    title: "Week 1 — Introduction to Databases",
    meta: <Badge>2 materials</Badge>,
    content: (
      <p style={{ margin: 0 }}>
        Relational model, tables, keys. Reading: chapters 1–2 of the course
        script plus the ER-diagram exercise sheet.
      </p>
    ),
  },
  {
    id: "week2",
    title: "Week 2 — SQL Fundamentals",
    meta: <Badge>4 materials</Badge>,
    content: (
      <p style={{ margin: 0 }}>
        SELECT, JOIN and aggregation. Lab: querying the university enrollment
        dataset.
      </p>
    ),
  },
  {
    id: "week3",
    title: "Week 3 — Normalization",
    content: <p style={{ margin: 0 }}>Functional dependencies, 1NF through BCNF.</p>,
  },
  {
    id: "makeup",
    title: "Make-up colloquium (locked)",
    disabled: true,
    content: <p style={{ margin: 0 }}>Opens after the first colloquium.</p>,
  },
];

export const SingleOpen = () => (
  <Accordion items={syllabus} openIds={["week2"]} onToggle={() => {}} />
);

export const MultipleOpen = () => (
  <Accordion
    items={syllabus}
    openIds={["week1", "week3"]}
    allowMultiple
    onToggle={() => {}}
  />
);
