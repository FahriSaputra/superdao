"use client";

import styled from "styled-components";
import Image from "next/image";
import Hamburger from "../Hamburger";

const MobileHeaderContainer = styled.div`
  width: 100%;
  background-color: #252b36;
  padding: 8px 32px;
  line-height: 0;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

interface MobileHeaderProps {
  onClick: () => void;
}

export default function MobileHeader(props: MobileHeaderProps) {
  const { onClick } = props;

  return (
    <MobileHeaderContainer>
      <Image
        height={36}
        width={140}
        src={"/assets/superdao-logo.svg"}
        alt="superdao"
      />

      <Hamburger onClick={onClick} />
    </MobileHeaderContainer>
  );
}
