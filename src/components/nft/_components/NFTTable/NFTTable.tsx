"use client";

import { Table, TableContainer, TRow } from "@/components/common/Table";
import Pagination from "@/components/common/Pagination";

import { flexRender } from "@tanstack/react-table";
import { Table as TableData } from "@tanstack/react-table";

interface INFTTableProps {
  table: TableData<any>;
}

const NFTTable = (props: INFTTableProps) => {
  const { table } = props;

  return (
    <TableContainer>
      <Table>
        <thead>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <TRow key={headerGroup.id}>
              {headerGroup.headers.map((header) =>
                flexRender(header.column.columnDef.header, header.getContext())
              )}
            </TRow>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TRow key={row.id} bgHovered>
              {row
                .getVisibleCells()
                .map((cell) =>
                  flexRender(cell.column.columnDef.cell, cell.getContext())
                )}
            </TRow>
          ))}
        </tbody>
      </Table>

      <Pagination table={table} rows={[10, 15, 25]} />
    </TableContainer>
  );
};

export default NFTTable;
