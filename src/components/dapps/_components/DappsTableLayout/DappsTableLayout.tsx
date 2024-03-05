import { TableContentHead, TData } from "@/components/common/Table";
import Avatar from "@/components/common/Avatar";
import styled from "styled-components";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { formatNumber } from "@/utils/formatNumber";
import { Dapps } from "@/models/dapps";
import Image from "next/image";

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

const ChainWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const columnHelper = createColumnHelper<Dapps>();

const columns: ColumnDef<Dapps, Dapps>[] = [
  columnHelper.accessor((row) => row, {
    id: "token",
    header: () => (
      <TableContentHead width={139} textAlign="start" paddingLeft={0}>
        <NumberHead>#</NumberHead>
        <span>Token</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={139} textAlign="start" paddingLeft={0}>
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
    id: "wallets",
    header: () => (
      <TableContentHead width={71}>
        <span>Wallets</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={71}>
        <span>
          {info?.getValue()?.wallets > 0
            ? formatNumber(info?.getValue()?.wallets)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Category",
    header: () => (
      <TableContentHead width={103} textAlign="start">
        <span>Category</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={103} textAlign="start">
        <span>{info?.getValue()?.category}</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Comment",
    header: () => (
      <TableContentHead width={228} textAlign="start">
        <span>Comment</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={228} textAlign="start">
        <span>{info?.getValue()?.comment}</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Chains",
    header: () => (
      <TableContentHead width={68} textAlign="start">
        <span>Chains</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={68} textAlign="start">
        <ChainWrapper>
          {info?.getValue()?.chain?.map(({ icon, name }) => (
            <Image key={name} src={icon} width={16} height={16} alt={name} />
          ))}
        </ChainWrapper>
      </TData>
    ),
  }),
];

export default columns;
