"use client";

import styled from "styled-components";
import Aside from "@/components/Aside";

const Container = styled.main`
  display: flex;
`;

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Aside />
      {children}
    </Container>
  );
}
