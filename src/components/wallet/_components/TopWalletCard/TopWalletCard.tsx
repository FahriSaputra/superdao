"use client";

import { useMemo } from "react";
import Avatar from "@/components/common/Avatar";
import styled from "styled-components";
import { Wallet } from "@/models/wallet";
import { fiFormatter } from "@/utils/fiFormater";
import { walletFormater } from "@/utils/walletFormatter";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-radius: 8px;
  background: #252b36;
  cursor: pointer;

  &:hover {
    background: #343a46;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const TopTitleWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
`;

const Title = styled.p`
  color: white;
  font-feature-settings: "clig" off, "liga" off;

  /* Headline · Semibold */
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rank = styled.p`
  color: #32d74b;

  /* Body · Regular */
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const SubTitle = styled.p`
  color: #a2a8b4;

  /* Subhead · Regular */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background: #465065;
`;

interface TopWalletCardProps {
  filter: string;
  wallet: Wallet;
}

const TopWalletCard = (props: TopWalletCardProps) => {
  const { filter, wallet } = props;

  const descDetail = useMemo(() => {
    const filterType = filter.toLocaleLowerCase();

    if (filterType === "transactions") {
      return {
        first: wallet?.transactionCount
          ? `${fiFormatter(wallet?.transactionCount)} all `
          : "-",
        second: wallet?.transactionLastMount
          ? `${fiFormatter(wallet?.transactionLastMount)} last mount`
          : "-",
      };
    }

    if (filterType === "twitter") {
      return {
        first: wallet?.twitterId || "-",
        second: wallet?.twitterFollowers
          ? fiFormatter(wallet?.twitterFollowers)
          : "-",
      };
    }

    return {
      first: wallet?.balance ? `$${fiFormatter(wallet?.balance)}` : "-",
      second: wallet?.nftCount > 0 ? `${wallet?.nftCount} NFTs` : "-",
    };
  }, [
    filter,
    wallet?.balance,
    wallet?.nftCount,
    wallet?.transactionCount,
    wallet?.transactionLastMount,
    wallet?.twitterId,
    wallet?.twitterFollowers,
  ]);

  return (
    <Container>
      <Avatar
        width={40}
        height={40}
        src={wallet?.avatar}
        alt={wallet?.name || wallet?.id}
      />

      <Wrapper>
        <TopTitleWrapper>
          <Title>{wallet?.name || walletFormater(wallet?.id)}</Title>
          <Rank>{wallet?.rank}</Rank>
        </TopTitleWrapper>

        <BottomWrapper>
          <SubTitle>{descDetail?.first}</SubTitle>
          <Dot />
          <span>
            <SubTitle>{descDetail?.second}</SubTitle>
          </span>
        </BottomWrapper>
      </Wrapper>
    </Container>
  );
};

export default TopWalletCard;
