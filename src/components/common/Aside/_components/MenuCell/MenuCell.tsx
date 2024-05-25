"use client";

import { useState } from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import type { IMenuItem } from "../../type";
import SubMenuItem from "@/components/common/SubMenuItem";
import MenuItem from "@/components/common/MenuItem";
import Image from "next/image";
import SubMenuAction from "@/components/common/SubMenuAction";

const SubMenuWrapper = styled.div<{ expand: boolean }>`
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? "100%" : "0")};
  transition: max-height 0.3s ease;
`;

const ArrowWrapper = styled.div<{ expand: boolean }>`
  display: flex;
  align-items: center;
  transform: ${({ expand }) => (expand ? "rotate(180deg)" : "rotate(0)")};
  transition: 0.3s;
`;

interface MenuCellProps {
  menu: IMenuItem;
  handleShowModal: () => void;
  onClickMenu?: () => void;
  onSubMenuClick?: () => void;
}

export default function MenuCell(props: MenuCellProps) {
  const { menu, handleShowModal, onClickMenu, onSubMenuClick } = props;

  const [expand, setExpand] = useState(false);

  const path = usePathname();

  const router = useRouter();

  const isActive =
    path?.includes(menu?.linkTo) && menu?.linkTo !== "" && !menu?.subMenu;

  const subMenu = menu?.subMenu;

  const defaultOpen = menu?.defaultOpen;

  const withRightContent = subMenu.length > 0 && !defaultOpen;

  const handleClickMenu = () => {
    if (subMenu.length > 0) {
      if (!defaultOpen) {
        return setExpand((prevValue) => !prevValue);
      }

      return;
    }

    onClickMenu?.();

    router?.push(menu?.linkTo);
  };

  return (
    <>
      <MenuItem
        menu={menu}
        active={isActive}
        onClick={handleClickMenu}
        rightContent={
          withRightContent && (
            <ArrowWrapper expand={expand}>
              <Image
                src="/assets/chevron-down.svg"
                width={16}
                height={16}
                alt="arrow-down"
              />
            </ArrowWrapper>
          )
        }
      />

      <SubMenuWrapper expand={defaultOpen ? defaultOpen : expand}>
        {subMenu.map((subMenu) => (
          <SubMenuItem
            key={subMenu?.id}
            subMenu={subMenu}
            active={subMenu?.linkTo?.includes(path)}
            onClick={onSubMenuClick}
          />
        ))}

        {!!menu?.action && (
          <SubMenuAction action={menu?.action} onClick={handleShowModal} />
        )}
      </SubMenuWrapper>
    </>
  );
}
