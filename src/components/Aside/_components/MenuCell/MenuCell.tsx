"use client";

import { useState } from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import type { IMenuItem } from "@/components/Aside";
import SubMenuItem from "@/components/SubMenuItem";
import MenuItem from "@/components/MenuItem";

const SubMenuWrapper = styled.div<{ expand: boolean }>`
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? "100%" : "0")};
  transition: max-height 0.3s ease;
`;

interface MenuCellProps {
  menu: IMenuItem;
}

export default function MenuCell(props: MenuCellProps) {
  const { menu } = props;

  const [expand, setExpand] = useState(false);

  const path = usePathname();

  const router = useRouter();

  const isActive = path === menu?.linkTo;

  const subMenu = menu?.subMenu;

  const defaultOpen = menu?.defaultOpen;

  const onMenuClick = () => {
    if (subMenu.length > 0 && !defaultOpen) {
      setExpand((prevValue) => !prevValue);

      return;
    }

    router?.push(menu?.linkTo);
  };

  return (
    <>
      <MenuItem
        menu={menu}
        expand={expand}
        withDropIcon={subMenu.length > 0 && !defaultOpen}
        active={isActive}
        onClick={onMenuClick}
      />

      <SubMenuWrapper expand={defaultOpen ? defaultOpen : expand}>
        {subMenu.map((subMenu) => (
          <SubMenuItem
            key={subMenu?.id}
            subMenu={subMenu}
            active={subMenu?.linkTo === path}
          />
        ))}
      </SubMenuWrapper>
    </>
  );
}
