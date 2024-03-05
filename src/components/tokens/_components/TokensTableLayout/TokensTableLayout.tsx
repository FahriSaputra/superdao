import { TableContentHead, TData } from "@/components/common/Table";
import Avatar from "@/components/common/Avatar";
import styled from "styled-components";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Token } from "@/models/token";
import { formatNumber } from "@/utils/formatNumber";

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

const columnHelper = createColumnHelper<Token>();

const columns: ColumnDef<Token, Token>[] = [
  columnHelper.accessor((row) => row, {
    id: "token",
    header: () => (
      <TableContentHead width={196} textAlign="start" paddingLeft={0}>
        <NumberHead>#</NumberHead>
        <span>Token</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={196} textAlign="start" paddingLeft={0}>
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
            ? formatNumber(info?.getValue()?.owners)
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
            ? formatNumber(info?.getValue()?.activeLastMonth)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "price",
    header: () => (
      <TableContentHead width={90}>
        <span>Price, $</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={90}>
        <span>
          {info?.getValue()?.price > 0
            ? formatNumber(info?.getValue()?.price)
            : "-"}
        </span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "market_cap",
    header: () => (
      <TableContentHead width={111}>
        <span>Market cap, $</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={111}>
        <span>
          {info?.getValue()?.marketCap > 0
            ? formatNumber(info?.getValue()?.marketCap)
            : "-"}
        </span>
      </TData>
    ),
  }),
];

export default columns;
