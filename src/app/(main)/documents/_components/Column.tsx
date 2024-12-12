"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";
import { Link2 } from "lucide-react";
import Link from "next/link";

export type ColumnTypes = {
  id: string;
  organization: string;
  fileUrl: string;
  fileData: string;
  createdAt: string;
};

export const columns: ColumnDef<ColumnTypes>[] = [
  {
    accessorKey: "fileUrl",
    header: "File URL",
    cell: ({ row }) => {
      const s3Url = row.original.fileUrl.split('localhost:3000/').pop();
      return (
        <Link href={row.original.fileUrl} className="flex items-center gap-x-2">
          <Link2 />
        </Link>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
