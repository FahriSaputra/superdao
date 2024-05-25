import { TableContentHead, TData } from "@/components/common/Table";
import Avatar from "@/components/common/Avatar";
import styled from "styled-components";
import type { Member } from "@/models/member";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
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

const MoreWrapper = styled.div`
  border-radius: 100px;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #343a46;
  }
`;

const columnHelper = createColumnHelper<Member>();

const columns: ColumnDef<Member, Member>[] = [
  columnHelper.accessor((row) => row, {
    id: "Member",
    header: () => (
      <TableContentHead width={166} textAlign="start" paddingLeft={0}>
        <NumberHead>#</NumberHead>
        <span>Member</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={166} textAlign="start" paddingLeft={0}>
        <NumberData>{info?.getValue()?.id}</NumberData>
        <Avatar
          src={info?.getValue()?.iconUrl}
          width={28}
          height={28}
          alt="avatar"
        />
        <CollectionName>{info?.getValue()?.name}</CollectionName>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "Role",
    header: () => (
      <TableContentHead width={78} textAlign="left">
        <span>Role</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={78} textAlign="left">
        <span>{info?.getValue()?.role || "-"}</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "assigned_by",
    header: () => (
      <TableContentHead width={107} textAlign="left">
        <span>Assigned by</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={107} textAlign="left">
        <span>{info?.getValue()?.assigned || "-"}</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "join_date",
    header: () => (
      <TableContentHead width={109} textAlign="left">
        <span>Join date</span>
      </TableContentHead>
    ),
    cell: (info) => (
      <TData width={109} textAlign="left">
        <span>{info?.getValue()?.join_date}</span>
      </TData>
    ),
  }),
  columnHelper.accessor((row) => row, {
    id: "action",
    header: () => (
      <TableContentHead width={36}>
        <span></span>
      </TableContentHead>
    ),
    cell: () => (
      <TData width={36}>
        <MoreWrapper>
          <Image src="/assets/more.svg" width={28} height={28} alt="more" />
        </MoreWrapper>
      </TData>
    ),
  }),
];

export default columns;
