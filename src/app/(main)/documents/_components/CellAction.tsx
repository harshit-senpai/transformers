"use client";

import { Button } from "@/components/ui/button";
import { Eye, GitGraph, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { ColumnTypes } from "./Column";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface CellActionProps {
  data: ColumnTypes;
}

export const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push(`/documents/${data.id}/analytics`)}>
            <GitGraph className="mr-2 h-4 w-4" />
            Analytics
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/documents/${data.id}`)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};
