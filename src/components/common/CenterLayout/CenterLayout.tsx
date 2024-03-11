"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 560px;
  width: 100%;
`;

const CenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default CenterLayout;
