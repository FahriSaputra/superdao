"use client";

import styled from "styled-components";

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const Line = styled.div`
  width: 24px;
  height: 2px;
  border-radius: 16px;
  background-color: #717a8c;
`;

interface HamburgerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Hamburger(props: HamburgerProps) {
  return (
    <MenuIcon {...props}>
      <Line />
      <Line />
      <Line />
    </MenuIcon>
  );
}
