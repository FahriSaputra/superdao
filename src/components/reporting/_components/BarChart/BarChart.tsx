"use client";

import { useState } from "react";
import {
  PaginationState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import columns from "../BarChartTableColumns";

import nftCollections from "@/dummy/nft-collection.json";
import { MainTable } from "@/components/common/Table";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled.div`
  padding: 12px 8px 0 20px;
  border-radius: 8px;
  background-color: #252b36;
`;

const Header = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.24px;
  text-align: left;
  color: #a2a8b4;
`;

const BarChart = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: nftCollections,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // onPaginationChange: setPagination,
    // state: {
    //   pagination,
    // },
  });

  return (
    <Container>
      <Wrapper>
        <Header>Page views</Header>
        <MainTable
          table={table}
          hidePagination
          tableRowStyle={{ padding: 0 }}
        />
      </Wrapper>

      <Wrapper>
        <Header>Wallet connections</Header>
        <MainTable
          table={table}
          hidePagination
          tableRowStyle={{ padding: 0 }}
        />
      </Wrapper>

      <Wrapper>
        <Header>Mints</Header>
        <MainTable
          table={table}
          hidePagination
          tableRowStyle={{ padding: 0 }}
        />
      </Wrapper>
    </Container>
  );
};

export default BarChart;
