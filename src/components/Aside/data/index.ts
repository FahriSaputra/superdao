import { IMenuItem } from "../type";

const MENU_DATA: IMenuItem[] = [
  {
    id: 1,
    title: "Explore",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "",
    defaultOpen: true,
    subMenu: [
      {
        id: 1,
        title: "Wallets",
        linkTo: "/wallet",
      },
      {
        id: 2,
        title: "Labels",
        linkTo: "/label",
      },
      {
        id: 3,
        title: "NFT collections",
        linkTo: "/collection",
      },
      {
        id: 4,
        title: "Tokens",
        linkTo: "/token",
      },
      {
        id: 5,
        title: "Dapps",
        linkTo: "/dapps",
      },
    ],
  },
  {
    id: 2,
    title: "Audiences",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "/explore",
    defaultOpen: false,
    subMenu: [
      {
        id: 1,
        title: "Wallets",
        linkTo: "/Wallets",
      },
      {
        id: 1,
        title: "Wallets",
        linkTo: "/s",
      },
      {
        id: 1,
        title: "Wallets",
        linkTo: "/y",
      },
    ],
  },
  {
    id: 3,
    title: "Campaigns",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "/campaign",
    defaultOpen: false,
    subMenu: [],
  },
  {
    id: 4,
    title: "Reporting",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "/reporting",
    defaultOpen: false,
    subMenu: [],
  },
  {
    id: 5,
    title: "Members",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "/members",
    defaultOpen: false,
    subMenu: [],
  },
  {
    id: 6,
    title: "Settings",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "/settings",
    defaultOpen: false,
    subMenu: [],
  },
];

export default MENU_DATA;