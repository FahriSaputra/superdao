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

const MoreWrapper = styled.div`
  border-radius: 100px;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #343a46;
  }
`;

const columnHelper = createColumnHelper<NFT>();

const columns: ColumnDef<NFT, NFT>[] = [
  columnHelper.accessor((row) => row, {
    id: "collection",
    header: () => (
      <TableContentHead width={195} textAlign="start" paddingLeft={0}>
        <NumberHead>#</NumberHead>
        <span>Wallet</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={195} textAlign="start" paddingLeft={0}>
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
    id: "rank",
    header: () => (
      <TableContentHead width={56}>
        <span>Rank</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={56}>
        <span>rank</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "target",
    header: () => (
      <TableContentHead width={135}>
        <span>target</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={135}>
        <span>target</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Source",
    header: () => (
      <TableContentHead width={117}>
        <span>Source</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={117}>
        <span>Source</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Labels",
    header: () => (
      <TableContentHead width={204}>
        <span>Labels</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={204}>
        <span>Labels</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "balance",
    header: () => (
      <TableContentHead width={91}>
        <span>Balance, $</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={91}>
        <Image
          src={info?.getValue()?.chain}
          width={20}
          height={20}
          alt={info?.getValue()?.chain}
        />
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "nft",
    header: () => (
      <TableContentHead width={56}>
        <span>NFTs</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={56}>
        <Image
          src={info?.getValue()?.chain}
          width={20}
          height={20}
          alt={info?.getValue()?.chain}
        />
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "contacts",
    header: () => (
      <TableContentHead width={106}>
        <span>Contacts</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={106}>
        <Image
          src={info?.getValue()?.chain}
          width={20}
          height={20}
          alt={info?.getValue()?.chain}
        />
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "action",
    header: () => (
      <TableContentHead width={40}>
        <span></span>
      </TableContentHead>
    ),
    cell: () => (
      <TData width={40}>
        <MoreWrapper>
          <Image src="/assets/more.svg" width={28} height={28} alt="more" />
        </MoreWrapper>
      </TData>
    ),
  }),
];

export default columns;
