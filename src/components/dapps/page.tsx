"use client";

import { useState } from "react";
import {
  PaginationState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Header from "@/components/common/Header";
import SearchInput from "@/components/common/SearchInput";
import columns from "./_components/DappsTableLayout";
import { MainTable } from "@/components/common/Table";

import dapps from "@/dummy/dapps.json";

const DappsPage = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: dapps,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <>
      <Header
        title="Tokens"
        counter={dapps?.length}
        rightContent={
          <SearchInput placeholder="Search" size={"xl"} width="240px" />
        }
      />

      <MainTable table={table} />
    </>
  );
};

export default DappsPage;
