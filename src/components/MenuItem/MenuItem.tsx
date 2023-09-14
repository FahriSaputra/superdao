"use client";

import Image from "next/image";
import styled from "styled-components";
import type { IMenuItem } from "@/components/Aside";
import { useMemo } from "react";

const Wrapper = styled.div<{ active: boolean }>`
  padding: 8px 20px;
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

const Content = styled.div`
  display: flex;
  gap: 12px;
  width: calc(100% - 16px);
`;

const Title = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "#FC7900" : "white")};
  font-feature-settings: "clig" off, "liga" off;
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
`;

interface MenuItemProps {
  menu: IMenuItem;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  rightContent?: React.ReactNode;
  title?: React.ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
  const { menu, active, onClick, rightContent, title } = props;

  const renderTitle = useMemo(() => {
    if (!!title) return title;

    return <Title active={active}>{menu?.title}</Title>;
  }, [active, menu?.title, title]);

  return (
    <Wrapper active={active} onClick={onClick}>
      <Content>
        <Image
          src={active ? menu?.activeIcon : menu?.icon}
          width={24}
          height={24}
          alt={menu?.title}
        />
        {renderTitle}
      </Content>

      {rightContent}
    </Wrapper>
  );
}
