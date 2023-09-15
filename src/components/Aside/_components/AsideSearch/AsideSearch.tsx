"use client";

import { useRef, useState } from "react";
import styled from "styled-components";

import SearchInput from "@/components/SearchInput";
import useOutsideClick from "@/hooks/useOutsideClick";
import SearchResult from "./_components/SearchResult";

const Container = styled.div<{ focus: boolean }>`
  ${({ focus }) =>
    focus &&
    `
    position: absolute;
    background-color: #252b36;
    width: 288px;
    height: 100vh;
    z-index: 1;
  `}

  transition: .15s
`;

const SearchWrapper = styled.div<{ focus: boolean }>`
  margin: ${({ focus }) => (focus ? "16px 20px" : "12px 20px 16px 20px")};
`;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 68px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function AsideSearch() {
  const [focus, setFocus] = useState(false);

  const containerRef = useRef(null);

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  useOutsideClick(containerRef, handleOnBlur);

  return (
    <Container focus={focus} ref={containerRef}>
      <SearchWrapper focus={focus}>
        <SearchInput
          placeholder="Audience, wallet, collection..."
          size={"md"}
          onFocus={handleOnFocus}
        />
      </SearchWrapper>

      {focus && (
        <SearchResultWrapper>
          <SearchResult recent result={false} />
        </SearchResultWrapper>
      )}
    </Container>
  );
}
