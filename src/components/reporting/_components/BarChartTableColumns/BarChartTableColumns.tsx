import { TableContentHead, TData } from "@/components/common/Table";
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

const TDataBarChart = styled(TData)`
  padding: 6px 6px 6px 0;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: -0.24px;
  height: fit-content;
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
      <TDataBarChart
        width={135}
        textAlign="start"
        paddingLeft={0}
        style={{ marginRight: 8 }}
      >
        <p>Layer3</p>
      </TDataBarChart>
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
      <TDataBarChart width={79}>
        <p>rank</p>
      </TDataBarChart>
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
      <TDataBarChart width={83}>
        <p>target</p>
      </TDataBarChart>
    ),
  }),
];

export default columns;
