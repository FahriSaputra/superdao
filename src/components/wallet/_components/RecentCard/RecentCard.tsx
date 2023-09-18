"use client";

import Avatar from "@/components/common/Avatar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  border-radius: 8px;
  background: #252b36;
  cursor: pointer;

  &:hover {
    background-color: #343a46;
  }
`;

const Name = styled.p`
  color: white;
  font-feature-settings: "clig" off, "liga" off;

  /* Subhead · Semibold */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
`;

interface RecentCardProps {
  id: string;
  title: string;
  iconUrl: string;
}

const RecentCard = (props: RecentCardProps) => {
  return (
    <Container id={props?.id}>
      <Avatar src={props?.iconUrl} alt="avatar" width={24} height={24} />
      <Name>{props?.title}</Name>
    </Container>
  );
};

export default RecentCard;
