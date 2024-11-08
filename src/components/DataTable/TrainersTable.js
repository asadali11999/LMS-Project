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
    id: "j3kd8j4f",
    name: "John Doe",
    batchName: "Batch A",
    batchSize: 30,
    status: "Active",
    specialty: "Web Development",
  },
  {
    id: "k8d9v1pf",
    name: "Jane Smith",
    batchName: "Batch B",
    batchSize: 25,
    status: "Non-Active",
    specialty: "Mobile Development",
  },
  {
    id: "p9l2t8xk",
    name: "Alice Johnson",
    batchName: "Batch C",
    batchSize: 28,
    status: "Active",
    specialty: "Data Science",
  },
  {
    id: "d1c8m3bv",
    name: "Mark Lee",
    batchName: "Batch D",
    batchSize: 22,
    status: "Non-Active",
    specialty: "Cybersecurity",
  },
  {
    id: "f7n3o6bg",
    name: "Emily Davis",
    batchName: "Batch E",
    batchSize: 35,
    status: "Active",
    specialty: "Machine Learning",
  },
  {
    id: "x4k2d7qt",
    name: "David Kim",
    batchName: "Batch F",
    batchSize: 30,
    status: "Non-Active",
    specialty: "Artificial Intelligence",
  },
  {
    id: "r5t8m9pl",
    name: "Sophia Chen",
    batchName: "Batch G",
    batchSize: 25,
    status: "Active",
    specialty: "Cloud Computing",
  },
  {
    id: "g8v5l2fh",
    name: "James Brown",
    batchName: "Batch H",
    batchSize: 32,
    status: "Active",
    specialty: "Blockchain Development",
  },
  {
    id: "y2o3v5qj",
    name: "Michael Scott",
    batchName: "Batch I",
    batchSize: 20,
    status: "Active",
    specialty: "Project Management",
  },
  {
    id: "b7v1m5wp",
    name: "Sarah Williams",
    batchName: "Batch J",
    batchSize: 18,
    status: "Non-Active",
    specialty: "Web Design",
  },
  {
    id: "u3x6m8jt",
    name: "Jessica Miller",
    batchName: "Batch K",
    batchSize: 27,
    status: "Active",
    specialty: "Game Development",
  },
  {
    id: "h4w9t2sr",
    name: "Chris Evans",
    batchName: "Batch L",
    batchSize: 23,
    status: "Non-Active",
    specialty: "Cloud Security",
  },
  {
    id: "z1j5n4pf",
    name: "Olivia Taylor",
    batchName: "Batch M",
    batchSize: 30,
    status: "Active",
    specialty: "Big Data",
  },
  {
    id: "a6v2l7gb",
    name: "Daniel Hernandez",
    batchName: "Batch N",
    batchSize: 26,
    status: "Non-Active",
    specialty: "Software Engineering",
  },
  {
    id: "f9r2b3tk",
    name: "Grace Lee",
    batchName: "Batch O",
    batchSize: 28,
    status: "Active",
    specialty: "IoT Development",
  },
  {
    id: "c3n9h8vn",
    name: "Liam Clark",
    batchName: "Batch P",
    batchSize: 22,
    status: "Non-Active",
    specialty: "Data Analytics",
  },
  {
    id: "o7j9m2gh",
    name: "Sophia White",
    batchName: "Batch Q",
    batchSize: 25,
    status: "Active",
    specialty: "UX/UI Design",
  },
  {
    id: "s2v3n6kt",
    name: "Noah Lewis",
    batchName: "Batch R",
    batchSize: 30,
    status: "Active",
    specialty: "Blockchain Development",
  },
  {
    id: "t8x9k1zh",
    name: "Charlotte Adams",
    batchName: "Batch S",
    batchSize: 20,
    status: "Non-Active",
    specialty: "Software Architecture",
  },
  {
    id: "w6n4p3yt",
    name: "Aiden Davis",
    batchName: "Batch T",
    batchSize: 29,
    status: "Active",
    specialty: "Full Stack Development",
  },
  {
    id: "j2b8z6lr",
    name: "Lucas Jackson",
    batchName: "Batch U",
    batchSize: 24,
    status: "Non-Active",
    specialty: "Cybersecurity",
  },
  {
    id: "v1m3t4kh",
    name: "Amelia Walker",
    batchName: "Batch V",
    batchSize: 31,
    status: "Active",
    specialty: "AI and Machine Learning",
  },
  {
    id: "l7b9r3hd",
    name: "Ethan White",
    batchName: "Batch W",
    batchSize: 22,
    status: "Non-Active",
    specialty: "Cloud Computing",
  },
  {
    id: "q5h2f8tq",
    name: "Mason Taylor",
    batchName: "Batch X",
    batchSize: 30,
    status: "Active",
    specialty: "Web Design",
  },
  {
    id: "p6o8d2nw",
    name: "Isabella Harris",
    batchName: "Batch Y",
    batchSize: 27,
    status: "Active",
    specialty: "Data Science",
  },
  {
    id: "u4n5v7ts",
    name: "Elijah Young",
    batchName: "Batch Z",
    batchSize: 25,
    status: "Non-Active",
    specialty: "Mobile Development",
  },
  {
    id: "y3x6c1rw",
    name: "Zoe King",
    batchName: "Batch AA",
    batchSize: 29,
    status: "Active",
    specialty: "Software Development",
  },
  {
    id: "m2o8k5ld",
    name: "Ava Robinson",
    batchName: "Batch AB",
    batchSize: 28,
    status: "Non-Active",
    specialty: "Game Development",
  },
  {
    id: "e7g3r1jl",
    name: "James Miller",
    batchName: "Batch AC",
    batchSize: 30,
    status: "Active",
    specialty: "Database Management",
  },
  {
    id: "t5u9j6vk",
    name: "Maya Allen",
    batchName: "Batch AD",
    batchSize: 22,
    status: "Non-Active",
    specialty: "Big Data",
  },
  {
    id: "d8p3s2vl",
    name: "Benjamin Harris",
    batchName: "Batch AE",
    batchSize: 28,
    status: "Active",
    specialty: "Cloud Security",
  },
  {
    id: "n7j5w4gf",
    name: "Grace Thompson",
    batchName: "Batch AF",
    batchSize: 25,
    status: "Active",
    specialty: "Network Engineering",
  },
  {
    id: "r9b4t1nx",
    name: "Henry Davis",
    batchName: "Batch AG",
    batchSize: 24,
    status: "Non-Active",
    specialty: "IoT",
  },
  {
    id: "s6l2f8hk",
    name: "Oliver Garcia",
    batchName: "Batch AH",
    batchSize: 26,
    status: "Active",
    specialty: "AI",
  },
  {
    id: "k4n1p6hw",
    name: "Emily Wright",
    batchName: "Batch AI",
    batchSize: 29,
    status: "Non-Active",
    specialty: "UX/UI Design",
  },
  {
    id: "w3r2j5tm",
    name: "Charlotte Moore",
    batchName: "Batch AJ",
    batchSize: 31,
    status: "Active",
    specialty: "Web Development",
  },
  {
    id: "x1g8h7zs",
    name: "Jackson Harris",
    batchName: "Batch AK",
    batchSize: 30,
    status: "Non-Active",
    specialty: "Cybersecurity",
  },
  {
    id: "p2n4v3jt",
    name: "Sophie Lee",
    batchName: "Batch AL",
    batchSize: 28,
    status: "Active",
    specialty: "Game Development",
  },
  {
    id: "u5j6c9pw",
    name: "Amelia Kim",
    batchName: "Batch AM",
    batchSize: 32,
    status: "Active",
    specialty: "Blockchain",
  },
  {
    id: "l7t5d8pf",
    name: "Lucas Brown",
    batchName: "Batch AN",
    batchSize: 25,
    status: "Non-Active",
    specialty: "Full Stack",
  },
  {
    id: "o9w3g7nz",
    name: "Mia Perez",
    batchName: "Batch AO",
    batchSize: 27,
    status: "Active",
    specialty: "Data Science",
  },
  {
    id: "f3v9k2ft",
    name: "Ethan Clark",
    batchName: "Batch AP",
    batchSize: 30,
    status: "Non-Active",
    specialty: "Mobile Development",
  },
  {
    id: "m7y3s8tq",
    name: "Isla Rodriguez",
    batchName: "Batch AQ",
    batchSize: 28,
    status: "Active",
    specialty: "Cloud Computing",
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
    accessorKey: "specialty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          specialty
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("specialty")}</div>,
  },
  
  {
    accessorKey: "batchSize",
    header: () => <div className="text-right">No of batchSize</div>,
    cell: ({ row }) => {
      const amount = row.getValue("batchSize");

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

export function TrainersTable() {
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
