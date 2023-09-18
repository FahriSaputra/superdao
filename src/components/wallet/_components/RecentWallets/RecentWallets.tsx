"use client";

import { useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import RecentCard from "../RecentCard";
import Spacing from "@/components/common/Spacing";
import TOP_WALLETS from "@/dummy/wallets.json";
import { walletFormater } from "@/utils/walletFormatter";

const Container = styled.div`
  margin-bottom: 40px;
`;

const RecentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: hidden;
  transition: 0.3s;
`;

const Shadow = styled.div`
  position: sticky;
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  background: linear-gradient(90deg, rgba(27, 32, 42, 0) 0%, #1b202a 100%);
  right: 0;
`;

/* TODO:
 * - buat fitur slide / currousel
 * - buat fitur recent base on user click
 */

const RecentWallets = () => {
  const [topWallets] = useState(TOP_WALLETS);

  return (
    <Container>
      <Title>Recent</Title>

      <Spacing height={16} />

      <RecentWrapper>
        {...topWallets.map((wallet, index) => (
          <RecentCard
            key={index}
            id={index.toString()}
            iconUrl={wallet?.avatar}
            title={wallet?.name || walletFormater(wallet?.id)}
          />
        ))}

        <Shadow />
      </RecentWrapper>
    </Container>
  );
};

export default RecentWallets;
