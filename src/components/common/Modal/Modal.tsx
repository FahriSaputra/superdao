"use client";

import ModalHeader, { IModalHeaderProps } from "./_components/ModalHeader";
import ModalFooter, { IModalFooterProps } from "./_components/ModalFooter";
import ModalContainer, {
  IModalContainerProps,
} from "./_components/ModalContainer";
import ModalBody from "./_components/ModalBody";

interface IModalProps
  extends IModalHeaderProps,
    IModalFooterProps,
    IModalContainerProps {
  visible: boolean;
  withoutPaddingHorizontal?: boolean;
}

const Modal = (props: React.PropsWithChildren<IModalProps>) => {
  const {
    visible,
    children,
    primaryButton,
    secondaryButton,
    contentBeforeTitle,
    hideCloseButton,
    onCloseClick,
    title,
    onOutsideClick,
    withoutPaddingHorizontal,
  } = props;

  if (!visible) return;

  return (
    <ModalContainer onOutsideClick={onOutsideClick}>
      <ModalHeader
        title={title}
        onCloseClick={onCloseClick}
        hideCloseButton={hideCloseButton}
        contentBeforeTitle={contentBeforeTitle}
      />

      <ModalBody withoutPaddingHorizontal={withoutPaddingHorizontal}>
        {children}
      </ModalBody>

      {primaryButton?.children && (
        <ModalFooter
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      )}
    </ModalContainer>
  );
};

export default Modal;
