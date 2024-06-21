"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef } from "react";
import styled from "styled-components";
import { IModalContainerProps } from "./d";

const Backdrop = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(27, 32, 42, 0.84);

  @media only screen and (max-width: 768px) {
    width: 100vw;
    position: fixed;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalWrapper = styled.div`
  background-color: #252b36;
  border-radius: 12px;
  min-width: 400px;

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 48px);
    min-width: 0;
  }
`;

const ModalContainer = (
  props: React.PropsWithChildren<IModalContainerProps>
) => {
  const { children, onOutsideClick } = props;

  const modalRef = useRef(null);

  useOutsideClick(modalRef, onOutsideClick);

  return (
    <Backdrop>
      <Container>
        <ModalWrapper ref={modalRef}>{children}</ModalWrapper>
      </Container>
    </Backdrop>
  );
};

export default ModalContainer;
