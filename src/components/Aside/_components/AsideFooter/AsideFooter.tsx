"use client";

import MenuItem from "@/components/MenuItem";
import Spacing from "@/components/Spacing";
import type { IMenuItem } from "../../type";

const HELP: IMenuItem = {
  id: 1,
  title: "Help",
  icon: "/assets/explore.svg",
  activeIcon: "/assets/explore.svg",
  linkTo: "/explore",
  defaultOpen: false,
  subMenu: [],
};

const PROFILE: IMenuItem = {
  id: 1,
  title: "minooor.eth",
  icon: "/assets/explore.svg",
  activeIcon: "/assets/explore.svg",
  linkTo: "",
  defaultOpen: false,
  subMenu: [],
};

export default function AsideFooter() {
  return (
    <>
      <MenuItem menu={HELP} active={false} />

      <Spacing height={8} />

      <MenuItem menu={PROFILE} active={false} />

      <Spacing height={12} />
    </>
  );
}
