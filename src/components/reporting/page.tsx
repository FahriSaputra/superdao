"use client";

import { useState } from "react";
import {
  PaginationState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Header from "@/components/common/Header";
import columns from "./_components/ReportingTableColumns";

import nftCollections from "@/dummy/nft-collection.json";
import { MainTable } from "../common/Table";
import { useSearchParams } from "next/navigation";
import TopTableContent from "./_components/TopTableContent";
import BarChart from "./_components/BarChart";
import Spacing from "../common/Spacing";

const ReportingPage = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: nftCollections,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const searchParams = useSearchParams();

  const name = searchParams?.get("name") || "";

  return (
    <>
      <Header title={name} />

      <BarChart />

      <Spacing height={20} />

      <MainTable table={table} topContent={<TopTableContent />} />
    </>
  );
};

export default ReportingPage;
