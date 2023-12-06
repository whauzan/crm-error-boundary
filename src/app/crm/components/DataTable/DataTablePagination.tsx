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
        <ArrowLeft className="h-5 w-5 md:mr-2" />
        <span className="hidden text-sm font-semibold md:block">Previous</span>
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
        <span className="hidden text-sm font-semibold md:block">Next</span>
        <span className="sr-only">Go to previous page</span>
        <ArrowRight className="h-5 w-5 md:ml-2" />
      </Button>
    </div>
  );
};

export default DataTablePagination;
