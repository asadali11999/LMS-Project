"use client";

import * as React from "react";
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "m5gr84i9",
    rollNo: "WD-101",
    name: "Alex Johnson",
    city: "New York",
    batchName: "Batch A",
    status: "Active",
    course: "Web Development",
    trainer: "John Doe",
  },
  {
    id: "3u1reuv4",
    rollNo: "MA-202",
    name: "Sarah Lee",
    city: "Los Angeles",
    batchName: "Batch B",
    status: "Non-Active",
    course: "Mobile App Development",
    trainer: "Jane Smith",
  },
  {
    id: "derv1ws0",
    rollNo: "DS-303",
    name: "Michael Brown",
    city: "Chicago",
    batchName: "Batch C",
    status: "Active",
    course: "Data Science",
    trainer: "Alice Johnson",
  },
  {
    id: "5kma53ae",
    rollNo: "CS-404",
    name: "Emily Clark",
    city: "Houston",
    batchName: "Batch D",
    status: "Non-Active",
    course: "Cybersecurity",
    trainer: "Mark Lee",
  },
  {
    id: "bhqecj4p",
    rollNo: "UX-505",
    name: "David Harris",
    city: "San Francisco",
    batchName: "Batch A",
    status: "Active",
    course: "UI/UX Design",
    trainer: "John Doe",
  },
  {
    id: "z5n7x2pd",
    rollNo: "ML-606",
    name: "Sophia Martinez",
    city: "Seattle",
    batchName: "Batch E",
    status: "Active",
    course: "Machine Learning",
    trainer: "Emily Davis",
  },
  {
    id: "a1r5t3bw",
    rollNo: "AI-707",
    name: "James Wilson",
    city: "Miami",
    batchName: "Batch F",
    status: "Non-Active",
    course: "Artificial Intelligence",
    trainer: "David Kim",
  },
  {
    id: "x9v2t6mn",
    rollNo: "CC-808",
    name: "Olivia Thomas",
    city: "Boston",
    batchName: "Batch G",
    status: "Active",
    course: "Cloud Computing",
    trainer: "Sophia Chen",
  },
  {
    id: "l1d9x2nm",
    rollNo: "DS-809",
    name: "Ethan Walker",
    city: "Austin",
    batchName: "Batch H",
    status: "Non-Active",
    course: "Data Science",
    trainer: "Mark Lee",
  },
  {
    id: "w2p4y6gv",
    rollNo: "WD-810",
    name: "Chloe Scott",
    city: "Denver",
    batchName: "Batch I",
    status: "Active",
    course: "Web Development",
    trainer: "John Doe",
  },

  // Add 90 more entries, varied data
  {
    id: "b7c8m1ae",
    rollNo: "AI-811",
    name: "Nathan Rivera",
    city: "Philadelphia",
    batchName: "Batch J",
    status: "Active",
    course: "Artificial Intelligence",
    trainer: "Jane Smith",
  },
  {
    id: "e8x5z3sn",
    rollNo: "MA-812",
    name: "Lily Adams",
    city: "Phoenix",
    batchName: "Batch K",
    status: "Non-Active",
    course: "Mobile App Development",
    trainer: "Alice Johnson",
  },
  {
    id: "q3z2f9yg",
    rollNo: "WD-813",
    name: "Benjamin Carter",
    city: "Dallas",
    batchName: "Batch L",
    status: "Active",
    course: "Web Development",
    trainer: "David Kim",
  },
  {
    id: "c2l6v8ex",
    rollNo: "UX-814",
    name: "Grace Turner",
    city: "San Diego",
    batchName: "Batch M",
    status: "Non-Active",
    course: "UI/UX Design",
    trainer: "Sophia Chen",
  },
  {
    id: "d4n1w2zr",
    rollNo: "DS-815",
    name: "Ella Baker",
    city: "San Jose",
    batchName: "Batch N",
    status: "Active",
    course: "Data Science",
    trainer: "Emily Davis",
  },
  {
    id: "u9g4k7xt",
    rollNo: "ML-816",
    name: "Noah Green",
    city: "Las Vegas",
    batchName: "Batch O",
    status: "Non-Active",
    course: "Machine Learning",
    trainer: "Mark Lee",
  },
  {
    id: "t2f8v5jp",
    rollNo: "AI-817",
    name: "Lucas Wright",
    city: "Orlando",
    batchName: "Batch P",
    status: "Active",
    course: "Artificial Intelligence",
    trainer: "John Doe",
  },
  {
    id: "g5b1y7xe",
    rollNo: "CC-818",
    name: "Ava Perez",
    city: "Detroit",
    batchName: "Batch Q",
    status: "Non-Active",
    course: "Cloud Computing",
    trainer: "Jane Smith",
  },
  {
    id: "k1v8n4mr",
    rollNo: "DS-819",
    name: "Mia Campbell",
    city: "Nashville",
    batchName: "Batch R",
    status: "Active",
    course: "Data Science",
    trainer: "Alice Johnson",
  },
  {
    id: "n6t3d2yz",
    rollNo: "UX-820",
    name: "Henry Anderson",
    city: "Portland",
    batchName: "Batch S",
    status: "Active",
    course: "UI/UX Design",
    trainer: "Sophia Chen",
  },

  // Continue pattern for 80 more unique entries

  {
    id: "v7p4q5ws",
    rollNo: "AI-899",
    name: "Zoe Ramirez",
    city: "Baltimore",
    batchName: "Batch X",
    status: "Active",
    course: "Artificial Intelligence",
    trainer: "David Kim",
  },
  {
    id: "r3g1t8mv",
    rollNo: "CC-900",
    name: "Andrew Foster",
    city: "Atlanta",
    batchName: "Batch Y",
    status: "Non-Active",
    course: "Cloud Computing",
    trainer: "Sophia Chen",
  },
];

// Trainers array with unique IDs and diverse data

export const columns = [
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
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "batchName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          batchName
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("batchName")}</div>,
  },
  {
    accessorKey: "course",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          course
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("course")}</div>,
  },
  {
    accessorKey: "trainer",
    header: () => <div className="text-right">trainer</div>,
    cell: ({ row }) => {
      const amount = row.getValue("trainer");

      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "city",
    header: () => <div className="text-right">No of city</div>,
    cell: ({ row }) => {
      const amount = row.getValue("city");

      return <div className="text-right font-medium">{amount}</div>;
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Course Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>see Deatail</DropdownMenuItem>
            <DropdownMenuItem>change status </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function StudentsTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection, 
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
