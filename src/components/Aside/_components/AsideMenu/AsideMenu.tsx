"use client";

import styled from "styled-components";
import Spacing from "@/components/Spacing";
import type { IMenuItem } from "@/components/Aside/type";
import MenuCell from "../MenuCell";

const MenuContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  margin-bottom: 12px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Shadow = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(37, 43, 54, 0) 0%, #252b36 100%);
`;

interface AsideMenuProps {
  menu: IMenuItem[];
}

export default function AsideMenu(props: AsideMenuProps) {
  const { menu } = props;

  return (
    <MenuContainer>
      {menu?.map((item) => (
        <MenuCell key={item?.id} menu={item} />
      ))}

      <Spacing height={40} />

      <Shadow />
    </MenuContainer>
  );
}
