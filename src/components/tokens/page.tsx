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
import columns from "./_components/TokensTableLayout";
import { MainTable } from "@/components/common/Table";

import tokens from "@/dummy/token.json";

const NFTPage = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: tokens,
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
        counter={tokens?.length}
        rightContent={
          <SearchInput
            placeholder="Search"
            size={"xl"}
            width="240px"
            mobileStyle={{ width: "100%" }}
          />
        }
      />

      <MainTable table={table} />
    </>
  );
};

export default NFTPage;
