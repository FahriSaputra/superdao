import Image from "next/image";
import { TableContentHead, TData } from "@/components/common/Table";
import Avatar from "@/components/common/Avatar";
import { fiFormatter } from "@/utils/fiFormater";
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
      <TableContentHead width={235} textAlign="start" paddingLeft={0}>
        <NumberHead>#</NumberHead>
        <span>Collection</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={235} textAlign="start" paddingLeft={0}>
        <NumberData>{info?.getValue()?.id}</NumberData>
        <Avatar
          src={info?.getValue()?.avatar}
          width={28}
          height={28}
          alt="avatar"
        />
        <CollectionName>{info?.getValue()?.name}</CollectionName>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "owners",
    header: () => (
      <TableContentHead width={73}>
        <span>Owners</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={73}>
        <span>
          {info?.getValue()?.owners > 0
            ? fiFormatter(info?.getValue()?.owners, 1)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Active 30d",
    header: () => (
      <TableContentHead width={93}>
        <span>Active 30D</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={93}>
        <span>
          {info?.getValue()?.activeLastMonth > 0
            ? fiFormatter(info?.getValue()?.activeLastMonth, 1)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "items",
    header: () => (
      <TableContentHead width={60}>
        <span>Items</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={60}>
        <span>
          {info?.getValue()?.items > 0
            ? fiFormatter(info?.getValue()?.items, 1)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "floor_price",
    header: () => (
      <TableContentHead width={126}>
        <span>Floor price, ETH</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={126}>
        <span>
          {info?.getValue()?.floorPrice > 0
            ? fiFormatter(info?.getValue()?.floorPrice, 1)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "chain",
    header: () => (
      <TableContentHead width={61}>
        <span>Chain</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={61}>
        <Image
          src={info?.getValue()?.chain}
          width={20}
          height={20}
          alt={info?.getValue()?.chain}
        />
      </TData>
    ),
  }),
];

export default columns;
