"use client";

import styled from "styled-components";
import Aside from "@/components/common/Aside";

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.div`
  background-color: #1b202a;
  width: calc(100% - 288px);
  padding: 0 32px;
  overflow-y: scroll;
`;

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Aside />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
