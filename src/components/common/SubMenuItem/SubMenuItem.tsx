"use client";

import styled from "styled-components";
import type { ISubMenuItem } from "@/components/common/Aside";
import Link from "next/link";

const Wrapper = styled(Link)<{ active: boolean }>`
  padding: 6px 20px 6px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  background-color: ${({ active }) =>
    active ? "rgba(252, 121, 0, 0.15)" : ""};

  &:hover {
    background-color: ${({ active }) =>
      active ? "rgba(252, 121, 0, 0.15)" : "rgba(208, 220, 245, 0.08)"};
  }
`;

const Title = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "#FC7900" : "#b9bfcb")};

  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
`;

const RightText = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "rgba(252, 121, 0, 0.70)" : "#a2a8b4")};
  text-align: right;

  /* Body · Regular */
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
`;

interface SubMenuItemProps {
  subMenu: ISubMenuItem;
  active: boolean;
}

export default function SubMenuItem(props: SubMenuItemProps) {
  const { subMenu, active } = props;

  const linkTo = subMenu?.linkTo;

  return (
    <Wrapper active={active} href={linkTo}>
      <Title active={active}>{subMenu?.title}</Title>
    </Wrapper>
  );
}
