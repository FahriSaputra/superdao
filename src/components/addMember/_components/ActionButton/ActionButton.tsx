"use client";

import Button from "@/components/common/Button/Button";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = () => {
  const router = useRouter();

  return (
    <ButtonWrapper>
      <Button maxWidth={113}>Continue</Button>
      <Button maxWidth={84} buttonStyle="text" onClick={router.back}>
        Back
      </Button>
    </ButtonWrapper>
  );
};

export default ActionButton;
