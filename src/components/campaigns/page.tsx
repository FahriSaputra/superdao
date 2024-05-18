"use client";

import Button from "@/components/common/Button/Button";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 32px 16px;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  flex-grow: 0;
  font-family: var(--sf-pro-display);
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.36px;
  text-align: center;
  color: #fff;
  padding: 16px 0 8px 0;
`;

const Desc = styled.p`
  flex-grow: 0;
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: center;
  color: #a2a8b4;
  text-indent: 8px;
  margin-bottom: 32px;
`;

const CampaignsPage = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src="/assets/feed-empty.svg"
          width={228}
          height={200}
          alt="feed-empty"
        />

        <Title>Campaigns will be available soon</Title>
        <Desc>
          This feature is designed for convenient communication with customers
          and setting up campaigns directly from Superdao. Please wait until
          it’s ready or contact us to be among the first to get access
        </Desc>

        <Button>Contact us</Button>
      </Wrapper>
    </Container>
  );
};

export default CampaignsPage;
