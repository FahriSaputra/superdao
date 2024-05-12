"use client";

import Image from "next/image";
import styled from "styled-components";
import { ISubMenuAction } from "../Aside/type";

const Wrapper = styled.div`
  padding: 6px 20px 6px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
  }
`;

const Title = styled.p`
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
  color: #b9bfcb;
  font-weight: bold;
`;

const RightIcon = styled(Image);

interface SubMenuActionProps extends React.HTMLAttributes<HTMLDivElement> {
  action: ISubMenuAction;
}

export default function SubMenuAction(props: SubMenuActionProps) {
  const { action } = props;

  return (
    <Wrapper {...props}>
      <Title>{action?.title}</Title>

      {!!action?.rightIcon && !!action?.altRightIcon && (
        <Image
          width={16}
          height={16}
          src={action?.rightIcon}
          alt={action?.altRightIcon}
        />
      )}
    </Wrapper>
  );
}
