import React from "react";
import { Tabs, Badge } from "@tapizlabs/ui";

const items = [
  {
    id: "materials",
    label: "Materials",
    content: (
      <p style={{ margin: 0 }}>
        12 lecture decks and 4 lab handouts published for Algorithms and Data
        Structures this semester.
      </p>
    ),
  },
  {
    id: "grades",
    label: "Grades",
    badge: <Badge>3 new</Badge>,
    content: <p style={{ margin: 0 }}>Latest colloquium results are in review.</p>,
  },
  {
    id: "attendance",
    label: "Attendance",
    content: <p style={{ margin: 0 }}>Attendance for Tuesday lab group.</p>,
  },
  {
    id: "archive",
    label: "Archive",
    disabled: true,
    content: <p style={{ margin: 0 }}>Archived semesters.</p>,
  },
];

export const LineVariant = () => (
  <Tabs items={items} activeId="materials" onChange={() => {}} variant="line" />
);

export const BoxedVariant = () => (
  <Tabs items={items} activeId="grades" onChange={() => {}} variant="boxed" />
);
