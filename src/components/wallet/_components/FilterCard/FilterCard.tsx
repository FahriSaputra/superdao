"use client";

import Image from "next/image";
import styled from "styled-components";

const Container = styled.div<{ active?: boolean }>`
  padding: 10px 20px 10px 16px;
  border-radius: 8px;
  background: #252b36;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  background-color: ${({ active }) =>
    active ? "rgba(252, 121, 0, 0.15)" : "#252b36"};

  &:hover {
    background-color: ${({ active }) =>
      active ? "rgba(252, 121, 0, 0.15)" : "#343a46;"};
  }
`;

const Title = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#FC7900" : "#a2a8b4")};
  font-feature-settings: "clig" off, "liga" off;

  /* Subhead · Semibold */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
`;

interface FilterCardProps {
  active?: boolean;
  iconUrl: string;
  activeIconUrl?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const FilterCard = (props: FilterCardProps) => {
  const { active, iconUrl, activeIconUrl, title, onClick } = props;

  return (
    <Container active={active} onClick={onClick}>
      <Image
        width={20}
        height={20}
        src={active && !!activeIconUrl ? activeIconUrl : iconUrl}
        alt={title}
      />
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default FilterCard;
