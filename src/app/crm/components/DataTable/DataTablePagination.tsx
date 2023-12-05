import { Button } from "@/components/ui/Button";
import { Table } from "@tanstack/react-table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import NumberPagination from "./NumberPagination";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

const DataTablePagination = <TData,>({
  table,
}: DataTablePaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-between rounded-b-xl border border-t-0 border-[#EAECF0] p-4">
      <Button
        variant={"outlined"}
        size={"sm"}
        className="rounded-lg"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        <span className="text-sm font-semibold">Previous</span>
        <span className="sr-only">Go to previous page</span>
      </Button>
      <div className="flex items-center gap-x-0.5">
        <NumberPagination table={table} />
      </div>
      <Button
        variant={"outlined"}
        size={"sm"}
        className="rounded-lg"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <span className="text-sm font-semibold">Next</span>
        <span className="sr-only">Go to previous page</span>
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default DataTablePagination;
