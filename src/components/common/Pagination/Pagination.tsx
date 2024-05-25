"use client";

import styled from "styled-components";
import Image from "next/image";
import Dropdown from "../Dropdown";
import { useState } from "react";
import { Table } from "@tanstack/react-table";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 20px 0 20px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const SelectField = styled.div<{
  width?: number;
  pointer?: boolean;
}>`
  flex-grow: 0;
  padding: 4px 16px 4px 16px;
  border-radius: 8px;
  background-color: rgba(208, 220, 245, 0.08);
  display: flex;
  align-items: center;
  gap: 13px;
  ${({ width }) => width && `min-width: ${width}px;`}
  ${({ pointer }) => pointer && `cursor: pointer;`}

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: left;
  color: #fff;
`;

const PaginationText = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.08px;
  text-align: left;
  color: #a2a8b4;
  margin: 0 16px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ArrowWrapper = styled.button<{ left?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  background: transparent;
  border: none;

  opacity: ${({ disabled }) => (disabled ? ".3" : "1")};
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  min-width: 80px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
    cursor: pointer;
  }
`;

interface IPaginationProps {
  rows: number[];
  table: Table<any>;
}

const Pagination = (props: IPaginationProps) => {
  const { rows, table } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const pageCount = table?.getPageCount()?.toLocaleString();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageSize = table.getState().pagination.pageSize;

  const onDropdownClick = () => {
    setDropdownVisible((prev) => !prev);
  };
  const onOutsideDropdownClick = () => {
    setDropdownVisible(false);
  };

  const handleChangePageSize = (pageSize: number) => {
    table.setPageSize(pageSize);
    setDropdownVisible(false);
  };

  return (
    <PaginationContainer>
      <SelectField>
        <span>{currentPage}</span>
      </SelectField>

      <PaginationText>of {pageCount} pages</PaginationText>

      <ArrowContainer>
        <ArrowWrapper
          left
          onClick={table.previousPage}
          disabled={!table.getCanPreviousPage()}
        >
          <Image
            src="/assets/chevron-down.svg"
            width={16}
            height={16}
            alt="arrow-down"
          />
        </ArrowWrapper>

        <ArrowWrapper
          onClick={table.nextPage}
          disabled={!table.getCanNextPage()}
        >
          <Image
            src="/assets/chevron-down.svg"
            width={16}
            height={16}
            alt="arrow-down"
          />
        </ArrowWrapper>
      </ArrowContainer>

      <PaginationText>Rows per page</PaginationText>

      <Dropdown
        visible={dropdownVisible}
        onClick={onDropdownClick}
        onOutsideClick={onOutsideDropdownClick}
        position="top"
        dropdownButton={
          <SelectField width={80} pointer>
            <span>{pageSize}</span>
            <Image
              src="/assets/chevron-down.svg"
              width={16}
              height={16}
              alt="arrow-down"
            />
          </SelectField>
        }
      >
        {rows?.map((pageSize) => (
          <DropdownItem
            key={pageSize}
            onClick={() => handleChangePageSize(pageSize)}
          >
            <p>{pageSize}</p>
          </DropdownItem>
        ))}
      </Dropdown>
    </PaginationContainer>
  );
};

export default Pagination;
