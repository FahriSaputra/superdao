"use client";

import { useState } from "react";
import {
  PaginationState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";

import Header from "@/components/common/Header";
import columns from "./_components/MemberTableLayout";
import { MainTable } from "@/components/common/Table";

import member from "@/dummy/member.json";
import Button from "../common/Button/Button";

const NFTPage = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: member,
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
        title="Members"
        counter={member?.length}
        rightContent={
          <Button
            buttonStyle="secondary"
            style={{ paddingLeft: 16, paddingRight: 16 }}
          >
            <Image
              width={20}
              height={20}
              alt="plus"
              src="/assets/plus.svg"
              style={{ marginRight: 8 }}
            />
            Add members
          </Button>
        }
      />

      <MainTable table={table} pressAble={false} />
    </>
  );
};

export default NFTPage;
