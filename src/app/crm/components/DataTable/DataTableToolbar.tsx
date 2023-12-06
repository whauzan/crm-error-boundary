import { Input } from "@/components/ui/Input";
import { Table } from "@tanstack/react-table";
import React from "react";
import DataTableFacetedFilter from "./DataTableFacetedFilter";
import { employmentStatus, genders, maritalStatus } from "@/constant";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const DataTableToolbar = <TData,>({ table }: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="my-5 flex items-center justify-between">
      <div className="flex flex-1 flex-col space-x-5 space-y-5 md:flex-row md:items-center md:space-y-0">
        <Input
          placeholder="Search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-11 w-full rounded-lg md:w-[150px] lg:w-[250px]"
        />
        <div className="flex -translate-x-4 flex-col space-x-2 space-y-2  md:translate-x-0 md:flex-row md:items-center md:space-x-4">
          <div className="flex items-center space-x-2">
            {table.getColumn("gender") && (
              <DataTableFacetedFilter
                column={table.getColumn("gender")}
                title="Gender"
                options={genders}
              />
            )}
            {table.getColumn("maritalStatus") && (
              <DataTableFacetedFilter
                column={table.getColumn("maritalStatus")}
                title="Marital Status"
                options={maritalStatus}
              />
            )}
          </div>
          <div className="-translate-x-2 md:translate-x-0">
            {table.getColumn("employmentStatus") && (
              <DataTableFacetedFilter
                column={table.getColumn("employmentStatus")}
                title="Employment"
                options={employmentStatus}
              />
            )}
            {isFiltered && (
              <Button
                variant="ghost"
                onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 lg:px-3"
              >
                Reset
                <X className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableToolbar;
