"use client";

import Image from "next/image";
import { InputHTMLAttributes, useRef } from "react";
import styled from "styled-components";

const InputComponent = styled.input<{
  rightIcon?: boolean;
  leftIcon?: boolean;
  lineHeight: "xl" | "md";
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(208, 220, 245, 0.08);
  border: none;
  outline: none;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: ${({ rightIcon }) => (rightIcon ? "40px" : "16px")};
  padding-left: ${({ leftIcon }) => (leftIcon ? "40px" : "16px")};
  line-height: ${({ lineHeight }) => (lineHeight === "xl" ? "24px" : "20px")};

  &:focus {
    background-color: #3d4450;
  }

  // text style
  flex-grow: 0;
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: left;
  color: #fff;
`;

const Label = styled.label`
  display: inline-block;
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: left;
  margin: 8px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  min-width: 36px;
  padding: 12px 12px 12px 16px;
`;

const RightContentWrapper = styled(ContentWrapper)`
  right: 0;
  left: initial;
  padding: 12px 16px 12px 12px;
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: string;
  leftIcon?: string;
  lineHeight?: "xl" | "md";
  onRightIconClick?: () => void;
  leftIconAlt?: string;
  rightIconAlt?: string;
  leftContent?: React.ReactNode;
}

const Input = (props: IInputProps) => {
  const {
    rightIcon,
    leftIcon,
    lineHeight = "md",
    onRightIconClick,
    leftIconAlt,
    rightIconAlt,
    leftContent,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onLeftIconClick = () => {
    inputRef?.current?.focus();
  };

  const handleRightIconClick = () => {
    onRightIconClick?.();
  };

  return (
    <InputContainer onClick={onLeftIconClick}>
      {leftIcon && leftIconAlt && (
        <ContentWrapper>
          <Image width={16} height={16} alt={leftIconAlt} src={leftIcon} />
        </ContentWrapper>
      )}

      {leftContent && leftContent}

      <InputComponent
        {...rest}
        rightIcon={!!rightIcon}
        leftIcon={!!leftIcon}
        lineHeight={lineHeight}
        ref={inputRef}
      />

      {rightIcon && rightIconAlt && (
        <RightContentWrapper onClick={handleRightIconClick}>
          <Image width={16} height={16} alt={rightIconAlt} src={rightIcon} />
        </RightContentWrapper>
      )}
    </InputContainer>
  );
};

export { Input, Label };
