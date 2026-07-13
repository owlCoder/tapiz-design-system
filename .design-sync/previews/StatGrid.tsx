import React from "react";
import { StatGrid, MetricCard } from "@tapizlabs/ui";

export const DashboardRow = () => (
  <StatGrid>
    <MetricCard label="Present" value="92%" trend="+4%" trendTone="positive" />
    <MetricCard label="Absent" value="8%" trend="-4%" trendTone="positive" />
    <MetricCard label="Sessions held" value="24" description="Semester to date" />
    <MetricCard label="Avg. arrival" value="09:04" description="Morning lectures" />
  </StatGrid>
);

export const WideColumns = () => (
  <StatGrid minColumnWidth="16rem">
    <MetricCard label="Materials uploaded" value="342" description="PDF, slides and recordings across 12 subjects" />
    <MetricCard label="Storage used" value="4.8 GB" description="Of 10 GB faculty quota" trend="+310 MB" trendTone="neutral" />
    <MetricCard label="Downloads this week" value="1,904" trend="+12%" trendTone="positive" />
  </StatGrid>
);

export const NarrowColumns = () => (
  <StatGrid minColumnWidth="9rem">
    <MetricCard label="Quizzes" value="18" />
    <MetricCard label="Forms" value="7" />
    <MetricCard label="Todos" value="23" />
    <MetricCard label="Grades" value="612" />
    <MetricCard label="Reports" value="41" />
  </StatGrid>
);
