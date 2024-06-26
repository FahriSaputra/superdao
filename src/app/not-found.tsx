"use client";

import Button from "@/components/common/Button";
import Spacing from "@/components/common/Spacing";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImageWrapper = styled.div`
  padding: 18px 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.36px;
  margin-top: 16px;
`;

const Desc = styled.p`
  color: #a2a8b4;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  margin-top: 8px;
  font-family: var(--sf-pro-text);
`;

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/not-found/notfound.svg"
          alt="not-found"
          width={160}
          height={163}
        />
      </ImageWrapper>

      <Title>Page not found</Title>

      <Desc>
        You may have used a broken URL
        <br />
        or the page has been removed
      </Desc>

      <Spacing height={40} />

      <Button>Go to homepage</Button>
    </Container>
  );
};

export default NotFound;
