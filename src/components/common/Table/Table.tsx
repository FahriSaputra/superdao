"use client";

import { Table as TableData, flexRender } from "@tanstack/react-table";
import Pagination from "../Pagination";

import styled from "styled-components";

const TableContainer = styled.div`
  overflow: scroll;
  border-radius: 8px;
  width: 100%;
  background: #252b36;
  padding: 8px 0 20px 0;
  margin-bottom: 56px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const TRow = styled.tr<{ bgHovered?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  ${({ bgHovered }) =>
    bgHovered &&
    `&:hover {
        background-color: #333a46;
        cursor: pointer;
      }`}
`;

const TableContentHead = styled.th<{
  width?: number;
  textAlign?: string;
  paddingLeft?: number;
}>`
  padding: 10px 12px 8px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  color: #717a8c;
  min-width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : "end")};
`;

const TData = styled.td<{
  width?: number;
  textAlign?: string;
  paddingLeft?: number;
}>`
  padding: 8px 12px 8px 12px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.24px;
  min-width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) =>
    textAlign ? `${textAlign}` : "flex-end"};
`;

interface IMainTableProps {
  table: TableData<any>;
  rowsPerPages?: number[];
}

const MainTable = (props: IMainTableProps) => {
  const { table, rowsPerPages = [10, 15, 25] } = props;

  const rowLength = table.getRowModel().rows.length;
  const pageCount = table.getPageCount();

  const showPagination = rowLength > 10 || pageCount > 1;

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

      {showPagination && <Pagination table={table} rows={rowsPerPages} />}
    </TableContainer>
  );
};

export { TableContainer, Table, TRow, TableContentHead, TData, MainTable };
