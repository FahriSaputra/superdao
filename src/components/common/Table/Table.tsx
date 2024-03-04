"use client";

import styled from "styled-components";

const TableContainer = styled.div`
  overflow: scroll;
  border-radius: 8px;
  width: 100%;
  background: #252b36;
  padding: 8px 0 20px 0;
  margin-bottom: 56px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const TRow = styled.tr<{ bgHovered?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  ${({ bgHovered }) =>
    bgHovered &&
    `&:hover {
        background-color: #333a46;
        cursor: pointer;
      }`}
`;

const TableContentHead = styled.th<{
  width?: number;
  textAlign?: string;
  paddingLeft?: number;
}>`
  padding: 8px 12px 8px 12px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  color: #717a8c;
  min-width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : "")};
`;

const TData = styled.td<{
  width?: number;
  textAlign?: string;
  paddingLeft?: number;
}>`
  padding: 8px 12px 8px 12px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.24px;
  min-width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) =>
    textAlign ? `${textAlign}` : "flex-end"};
`;

export { TableContainer, Table, TRow, TableContentHead, TData };
