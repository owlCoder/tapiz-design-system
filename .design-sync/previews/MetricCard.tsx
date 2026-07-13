import React from "react";
import { MetricCard, StatGrid, Users, GraduationCap, Calendar, Trophy } from "@tapizlabs/ui";

export const Basic = () => (
  <StatGrid>
    <MetricCard label="Enrolled students" value="1,284" description="Fall semester 2026" />
    <MetricCard label="Average grade" value="8.4" description="Across all subjects" />
  </StatGrid>
);

export const WithTrends = () => (
  <StatGrid>
    <MetricCard label="Attendance" value="92%" trend="+4%" trendTone="positive" description="vs last week" />
    <MetricCard label="Pending submissions" value="37" trend="+12" trendTone="negative" description="Databases 2 project" />
    <MetricCard label="Office hours booked" value="18" trend="0" trendTone="neutral" description="This week" />
    <MetricCard label="Quiz pass rate" value="76%" trend="-3%" trendTone="warning" description="Operating Systems" />
  </StatGrid>
);

export const WithIcons = () => (
  <StatGrid>
    <MetricCard label="Active students" value="412" icon={<Users />} trend="+21" trendTone="positive" />
    <MetricCard label="Graduates" value="96" icon={<GraduationCap />} description="Class of 2026" />
    <MetricCard label="Lectures held" value="128" icon={<Calendar />} description="Semester to date" />
    <MetricCard label="Top scorer" value="9.8" icon={<Trophy />} description="Milica Petrović" />
  </StatGrid>
);

export const RaisedVariant = () => (
  <StatGrid>
    <MetricCard variant="raised" label="Exam registrations" value="248" trend="+18%" trendTone="positive" description="June exam period" />
    <MetricCard variant="raised" label="Failed prerequisites" value="14" trend="-6" trendTone="positive" description="vs January period" />
  </StatGrid>
);
