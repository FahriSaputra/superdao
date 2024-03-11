import Image from "next/image";
import styled from "styled-components";
import { IModalHeaderProps } from "./d";

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding: 20px 24px 0 24px;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const HeaderTitle = styled.div`
  font-family: var(--sf-pro-dispay);
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.38px;
  text-align: left;
  color: #fff;
`;

const CloseWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
  }
`;

const ModalHeader = (props: IModalHeaderProps) => {
  const { contentBeforeTitle, hideCloseButton, onCloseClick, title } = props;

  return (
    <HeaderWrapper>
      <TitleWrapper>
        {contentBeforeTitle}
        <HeaderTitle>{title}</HeaderTitle>
      </TitleWrapper>

      {!hideCloseButton && (
        <CloseWrapper onClick={onCloseClick}>
          <Image width={16} height={16} alt="close" src={"/assets/close.svg"} />
        </CloseWrapper>
      )}
    </HeaderWrapper>
  );
};

export default ModalHeader;
