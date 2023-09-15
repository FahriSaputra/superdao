"use client";

import styled from "styled-components";

const SearchInput = styled.input<{ width?: string; size: "xl" | "md" }>`
  padding: 8px 16px 8px 36px;
  border-radius: 8px;
  border: none;
  background: rgba(208, 220, 245, 0.08) url("/assets/search.svg") no-repeat
    scroll 12px;
  background-size: 16px;
  background-position-y: center;
  width: ${({ width }) => (width ? `${width}` : "100%")};

  color: #717a8c;
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${({ size }) => (size === "xl" ? "24px" : "20px")};
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }
`;

export default SearchInput;
