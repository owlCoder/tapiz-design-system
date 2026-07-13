import React from "react";
import { EmptyState, Search, Calendar } from "@tapizlabs/ui";

export const NoResults = () => (
  <EmptyState
    icon={<Search size={28} />}
    title="No students found"
    description="No students match your search. Try a different name or index number."
  />
);

export const NoDataYet = () => (
  <EmptyState
    icon={<Calendar size={28} />}
    title="No office hours scheduled"
    description="You haven't published any office hours for this semester yet."
  />
);

export const MessageOnly = () => (
  <EmptyState message="No attendance records for this session." />
);
