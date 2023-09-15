"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  min-height: 77px;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
  gap: 8px;
`;

const ImageWrapper = styled.div`
  transform: rotate(90deg);
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: 0.36px;
`;

const Counter = styled.p`
  color: #a2a8b4;
  font-feature-settings: "clig" off, "liga" off;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 0.38px;
`;

interface HeaderProps {
  title: string;
  withBackButton?: boolean;
  contentBeforeTitle?: React.ReactNode;
  rightContent?: React.ReactNode;
  counter?: number;
}

const Header = (props: HeaderProps) => {
  const {
    title,
    withBackButton = false,
    contentBeforeTitle,
    rightContent,
    counter,
  } = props;

  const router = useRouter();

  return (
    <Container>
      <LeftContent>
        {withBackButton && (
          <ImageWrapper onClick={router.back}>
            <Image
              src="/assets/chevron-down.svg"
              alt="back"
              width={24}
              height={24}
            />
          </ImageWrapper>
        )}

        <TitleWrapper>
          {contentBeforeTitle}

          <Title>{title}</Title>
          <Counter>{counter}</Counter>
        </TitleWrapper>
      </LeftContent>

      {rightContent}
    </Container>
  );
};

export default Header;
