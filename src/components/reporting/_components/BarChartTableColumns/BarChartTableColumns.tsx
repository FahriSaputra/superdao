import Image from "next/image";
import { TableContentHead, TData } from "@/components/common/Table";
import Avatar from "@/components/common/Avatar";
import styled from "styled-components";
import type { NFT } from "@/models/nft";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const NumberHead = styled.span`
  display: inline-block;
  min-width: 28px;
  padding-right: 12px;
`;

const NumberData = styled.span`
  display: inline-block;
  min-width: 28px;
  padding-right: 12px;
`;

const CollectionName = styled.span`
  margin-left: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const columnHelper = createColumnHelper<NFT>();

const columns: ColumnDef<NFT, NFT>[] = [
  columnHelper.accessor((row) => row, {
    id: "collection",
    header: () => (
      <TableContentHead
        width={135}
        textAlign="start"
        paddingLeft={0}
        style={{ marginRight: 8 }}
      >
        <span>Page_utm_source</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData
        width={135}
        textAlign="start"
        paddingLeft={0}
        style={{ marginRight: 8 }}
      >
        <span>Layer3</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "rank",
    header: () => (
      <TableContentHead width={79}>
        <span>Rank</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={79}>
        <span>rank</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "target",
    header: () => (
      <TableContentHead width={83}>
        <span>target</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={83}>
        <span>target</span>
      </TData>
    ),
  }),
];

export default columns;
