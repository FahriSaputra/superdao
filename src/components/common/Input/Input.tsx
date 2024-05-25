"use client";

import Image from "next/image";
import { CSSProperties, InputHTMLAttributes, useRef, useState } from "react";
import styled from "styled-components";

const InputComponent = styled.input<{
  rightIcon?: boolean;
  leftIcon?: boolean;
  lineHeight: "xl" | "md";
  type?: string;
  fileNameChoosen?: string;
  placeholder?: string;
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
  /* cursor: pointer; */

  &::placeholder {
    color: #717a8c;
  }

  &:focus {
    background-color: #3d4450;
    font-family: var(--sf-pro-text);
  }
  ${({ type, fileNameChoosen, placeholder }) =>
    type === "file" &&
    `
    &::before {
    content: "${fileNameChoosen || placeholder}";
    flex-grow: 0;
    font-family: var(--sf-pro-text);
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.24px;
    text-align: left;
    color: #717a8c;
  }
  `}

  &::file-selector-button {
    display: none;
  }

  ${({ type }) =>
    type === "file" &&
    `
    font-size: 0px !important;
  `}

  ${({ type }) =>
    (type === "file" || type === "button") &&
    `
    cursor: pointer;
  `}


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
  cursor: pointer;
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
  cursor: pointer;
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: string;
  leftIcon?: string;
  lineHeight?: "xl" | "md";
  onRightIconClick?: () => void;
  leftIconAlt?: string;
  rightIconAlt?: string;
  leftContent?: React.ReactNode;
  containerStyle?: CSSProperties;
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
    containerStyle,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [fileNameChoosen, setFileNameChoosen] = useState<string>("");

  const onLeftIconClick = () => {
    inputRef?.current?.focus();
  };

  const handleRightIconClick = () => {
    onRightIconClick?.();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore: Object is possibly 'null'.
    const selectedFile = event?.target?.files[0];
    if (selectedFile) {
      setFileNameChoosen(selectedFile.name);
    } else {
      setFileNameChoosen(""); // Kosongkan nama file jika tidak ada file yang dipilih
    }

    if (rest?.onChange) {
      rest.onChange(event); // Panggil fungsi onChange jika tersedia
    }
  };

  return (
    <InputContainer style={containerStyle}>
      {leftIcon && leftIconAlt && (
        <ContentWrapper onClick={onLeftIconClick}>
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
        onChange={handleChange}
        fileNameChoosen={fileNameChoosen}
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
