"use client";

import Spinner from "@/components/Spinner";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 16px;
`;

const Loading = () => {
  return (
    <Container>
      <Image src="/assets/logo.svg" width={48} height={48} alt="superdao" />

      <Spinner />
    </Container>
  );
};

export default Loading;
