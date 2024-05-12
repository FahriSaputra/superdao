"use client";

import Image from "next/image";
import styled from "styled-components";
import { AUDIENCE_MENU } from "../../type";

const Container = styled.div`
  display: flex;
  padding: 8px 16px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.24px;
  text-align: left;
  color: #a2a8b4;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(208, 220, 245, 0.14);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AddAudienceCellProps extends AUDIENCE_MENU {
  onClick: (menu: AUDIENCE_MENU) => void;
}

const AddAudienceCell = (props: AddAudienceCellProps) => {
  const { title, subtitle, icon, alt, id, onClick } = props;

  return (
    <Container
      onClick={() =>
        onClick({
          title: title,
          subtitle: subtitle,
          icon: icon,
          alt: alt,
          id: id,
        })
      }
    >
      <IconWrapper>
        <Image src={icon} alt={alt} width={20} height={20} />
      </IconWrapper>

      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Container>
  );
};

export default AddAudienceCell;
