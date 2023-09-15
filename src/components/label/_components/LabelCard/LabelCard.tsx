"use client";

import { fiFormatter } from "@/utils/fiFormater";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
  }
`;

const ImageWrapper = styled.div<{ background: string }>`
  border-radius: 8px 0px 0px 8px;
  line-height: 0;
  background-color: ${({ background }) => background};
`;

const Icon = styled(Image)`
  margin: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.p`
  color: #fff;

  /* Title 3 */
  font-family: var(--sf-pro-text);
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 123.529% */
  letter-spacing: -0.41px;
`;

const Counter = styled.p`
  color: #a2a8b4;

  /* Subhead · Regular */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
`;

interface LabelCardProps {
  title: string;
  counter: number;
  iconUrl: string;
  background: string;
}

const LabelCard = (props: LabelCardProps) => {
  const { title, counter, iconUrl, background } = props;

  return (
    <Container>
      <ImageWrapper background={background}>
        <Icon src={iconUrl} alt={title} width={32} height={32} />
      </ImageWrapper>

      <Wrapper>
        <Title>{title}</Title>
        <Counter>{fiFormatter(counter)}</Counter>
      </Wrapper>
    </Container>
  );
};

export default LabelCard;
