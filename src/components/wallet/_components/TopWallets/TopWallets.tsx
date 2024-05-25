"use client";

import { useCallback, useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import Spacing from "@/components/common/Spacing";
import FilterCard from "../FilterCard";
import { FILTERS } from "../../constants";
import TopWalletCard from "../TopWalletCard";
import TOP_WALLETS from "@/dummy/wallets.json";
import { Wallet } from "@/models/wallet";

const Container = styled.div``;

const FilterWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const TopWalletWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 16px;
`;

const TopWallets = () => {
  const [activeFilter, setActiveFilter] = useState("Rank");

  const [topWallets, setTopWallet] = useState(TOP_WALLETS);

  const compare = (
    a: Wallet,
    b: Wallet,
    key: "balance" | "transactionCount"
  ): number => a[key] - b[key];

  const handleFilter = useCallback((type: string) => {
    setActiveFilter(type);

    let sortedWallets = [...TOP_WALLETS];

    switch (type) {
      case "Balance":
        sortedWallets.sort((a, b) => compare(a, b, "balance")).reverse();
        break;
      case "Transactions":
        sortedWallets
          .sort((a, b) => compare(a, b, "transactionCount"))
          .reverse();
        break;
      case "Twitter":
        sortedWallets = sortedWallets.filter((wallet) => !!wallet?.twitterId);
        break;
      default:
        break;
    }

    setTopWallet(sortedWallets);
  }, []);

  return (
    <Container>
      <Title>Top Wallets</Title>

      <Spacing height={16} />

      <FilterWapper>
        {FILTERS.map((filter) => (
          <FilterCard
            key={filter?.id}
            title={filter?.title}
            iconUrl={filter?.iconUrl}
            activeIconUrl={filter?.activeIconUrl}
            active={activeFilter === filter?.title}
            onClick={() => handleFilter(filter?.title)}
          />
        ))}
      </FilterWapper>

      <Spacing height={20} />

      <TopWalletWrapper>
        {topWallets?.map((wallet) => (
          <TopWalletCard
            key={wallet?.id}
            filter={activeFilter}
            wallet={wallet}
          />
        ))}
      </TopWalletWrapper>
    </Container>
  );
};

export default TopWallets;
