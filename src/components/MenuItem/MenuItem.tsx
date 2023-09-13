"use client";

import Image from "next/image";
import styled from "styled-components";
import type { IMenuItem } from "@/components/Aside";

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
`;

const ArrowWrapper = styled.div<{ expand: boolean }>`
  display: flex;
  align-items: center;
  transform: ${({ expand }) => (expand ? "rotate(180deg)" : "rotate(0)")};
  transition: 0.3s;
`;

interface MenuItemProps {
  menu: IMenuItem;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  expand?: boolean;
  withDropIcon?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { menu, active, expand = false, withDropIcon, onClick } = props;

  return (
    <Wrapper active={active} onClick={onClick}>
      <Content>
        <Image
          src={active ? menu?.activeIcon : menu?.icon}
          width={24}
          height={24}
          alt={menu?.title}
        />
        <Title active={active}>{menu?.title}</Title>
      </Content>

      {withDropIcon && (
        <ArrowWrapper expand={expand}>
          <Image
            src="/assets/chevron-down.svg"
            width={16}
            height={16}
            alt="arrow-down"
          />
        </ArrowWrapper>
      )}
    </Wrapper>
  );
}
