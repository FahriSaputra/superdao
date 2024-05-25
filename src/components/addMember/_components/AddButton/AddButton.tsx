"use client";

import { Label } from "@/components/common/Input";
import Button from "@/components/common/Button/Button";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const RoundedButton = styled(Button)`
  border-radius: 100%;
  padding: 8px;
`;

interface AddButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const AddButton = (props: AddButtonProps) => {
  return (
    <Container {...props}>
      <RoundedButton buttonStyle="secondary" id="add">
        <Image src="/assets/plus.svg" width={24} height={24} alt="plus" />
      </RoundedButton>
      <Label>Add more</Label>
    </Container>
  );
};

export default AddButton;
