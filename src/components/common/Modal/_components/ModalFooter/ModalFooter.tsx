"use client";

import styled from "styled-components";
import Button from "@/components/common/Button/Button";
import { IModalFooterProps } from "./d";

const FooterContainer = styled.div`
  padding: 16px 24px;
  background-color: #343a46;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const FooterWrapper = styled.div`
  display: flex;
`;

const ModalFooter = (props: IModalFooterProps) => {
  const { primaryButton, secondaryButton } = props;

  return (
    <FooterContainer>
      <FooterWrapper>
        {secondaryButton?.children && primaryButton?.children && (
          <Button {...secondaryButton} type="text">
            {secondaryButton?.children}
          </Button>
        )}

        {primaryButton?.children && (
          <Button {...primaryButton}>{primaryButton?.children}</Button>
        )}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default ModalFooter;
