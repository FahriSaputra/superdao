"use client";

import styled from "styled-components";
import SearchItem from "../SearchItem";

const Container = styled.div`
  margin: 4px 0;
`;

const Title = styled.h3`
  color: #a2a8b4;
  font-feature-settings: "clig" off, "liga" off;

  /* Subhead · Semibold */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
  padding: 0 20px 8px 20px;
`;

interface SearchListProps {
  title: string;
}

const SearchList = (props: SearchListProps) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>

      <SearchItem
        href="/"
        title="Ethereum"
        type="Token"
        icon="/assets/explore.svg"
      />
    </Container>
  );
};

export default SearchList;
