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
import NFTTable from "./_components/NFTTable";
import columns from "./_components/TableColumns/TableColumns";

import nftCollections from "@/dummy/nft-collection.json";

const NFTPage = () => {
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

  return (
    <>
      <Header
        title="NFT collections"
        counter={nftCollections?.length}
        rightContent={
          <SearchInput placeholder="Search" size={"xl"} width="240px" />
        }
      />

      <NFTTable table={table} />
    </>
  );
};

export default NFTPage;
