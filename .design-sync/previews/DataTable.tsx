import React from "react";
import { DataTable, Badge, Button } from "@tapizlabs/ui";

interface StudentRow {
  id: string;
  name: string;
  index: string;
  subject: string;
  grade: number;
  attendance: number;
  status: "passed" | "pending" | "failed";
}

const students: StudentRow[] = [
  { id: "s1", name: "Milica Petrović", index: "2021/0154", subject: "Databases 2", grade: 10, attendance: 96, status: "passed" },
  { id: "s2", name: "Nikola Jovanović", index: "2021/0212", subject: "Databases 2", grade: 8, attendance: 88, status: "passed" },
  { id: "s3", name: "Ana Kovačević", index: "2022/0037", subject: "Operating Systems", grade: 7, attendance: 74, status: "passed" },
  { id: "s4", name: "Stefan Ilić", index: "2020/0301", subject: "Operating Systems", grade: 5, attendance: 52, status: "failed" },
  { id: "s5", name: "Jelena Marković", index: "2022/0119", subject: "Web Programming", grade: 9, attendance: 91, status: "passed" },
  { id: "s6", name: "Luka Stanković", index: "2023/0044", subject: "Web Programming", grade: 6, attendance: 63, status: "pending" },
];

const statusVariant: Record<StudentRow["status"], "success" | "warning" | "danger"> = {
  passed: "success",
  pending: "warning",
  failed: "danger",
};

const columns = [
  { id: "name", header: "Student", cell: (r: StudentRow) => r.name, sortable: true, sortAccessor: (r: StudentRow) => r.name },
  { id: "index", header: "Index", cell: (r: StudentRow) => r.index },
  { id: "subject", header: "Subject", cell: (r: StudentRow) => r.subject },
  { id: "grade", header: "Grade", align: "center" as const, cell: (r: StudentRow) => r.grade, sortable: true, sortAccessor: (r: StudentRow) => r.grade },
  { id: "attendance", header: "Attendance", align: "right" as const, cell: (r: StudentRow) => `${r.attendance}%` },
  { id: "status", header: "Status", cell: (r: StudentRow) => <Badge variant={statusVariant[r.status]}>{r.status}</Badge> },
];

export const Enterprise = () => (
  <DataTable
    data={students}
    columns={columns}
    rowKey={(row) => row.id}
    variant="enterprise"
    density="comfortable"
    stickyHeader
  />
);

export const CompactUnstriped = () => (
  <DataTable
    data={students.slice(0, 4)}
    columns={columns.slice(0, 4)}
    rowKey={(row) => row.id}
    density="compact"
    striped={false}
  />
);

export const WithRowActions = () => (
  <DataTable
    data={students.slice(0, 4)}
    columns={columns.slice(0, 4)}
    rowKey={(row) => row.id}
    rowActions={() => (
      <Button size="xs" variant="outline-secondary">
        Edit grade
      </Button>
    )}
  />
);

export const LoadingAndEmpty = () => (
  <div style={{ display: "grid", gap: 16 }}>
    <DataTable data={[]} columns={columns.slice(0, 4)} rowKey={(row: StudentRow) => row.id} isLoading loadingRows={3} />
    <DataTable
      data={[]}
      columns={columns.slice(0, 4)}
      rowKey={(row: StudentRow) => row.id}
      emptyState={<span>No exam registrations for this period yet.</span>}
    />
  </div>
);
