import { Checkbox } from "@/components/ui/Checkbox";
import { Client } from "@/schema/Client.schema";
import { ColumnDef } from "@tanstack/react-table";
import DataTableColumnHeader from "./DataTableColumnHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export const columns: ColumnDef<Client>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="h-5 w-5 translate-y-[2px] rounded-md bg-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="h-5 w-5 translate-y-[2px] rounded-md"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="text-xs font-medium text-[#475467]"
      />
    ),
    cell: ({ row }) => {
      const gender = row.getValue("gender") as string;
      return (
        <div className="flex items-center gap-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={`https://xsgames.co/randomusers/avatar.php?g=${gender.toLowerCase()}`}
              alt="@shadcn"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span className="font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Gender"
        className="text-xs font-medium text-[#475467]"
      />
    ),
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium">{row.getValue("gender")}</span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="DOB"
        className="text-xs font-medium text-[#475467]"
      />
    ),
    cell: ({ row }) => {
      const dob = row.getValue("dob") as string;
      const formattedDob = new Date(dob).toLocaleString("id-ID").split(",")[0];
      return <span className="truncate font-medium">{formattedDob}</span>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "maritalStatus",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Marital Status"
        className="text-xs font-medium text-[#475467]"
      />
    ),
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium">
          {row.getValue("maritalStatus")}
        </span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "employmentStatus",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Employment"
        className="ml-10 text-xs font-medium text-[#475467]"
      />
    ),
    cell: ({ row }) => {
      return (
        <span className="ml-10 truncate font-medium">
          {row.getValue("employmentStatus")}
        </span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
];
