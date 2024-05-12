import { AUDIENCE_MENU } from "../type";

export const CREATE_AUDIENCE_MENU: AUDIENCE_MENU[] = [
  {
    id: 1,
    title: "CSV file",
    subtitle: "Upload a file...",
    icon: "/assets/audience-csv.svg",
    alt: "csv",
  },
  {
    id: 2,
    title: "NFT collection",
    subtitle: "Add contract address",
    icon: "/assets/audience-nft.svg",
    alt: "nft",
  },
  {
    id: 3,
    title: "Token contract",
    subtitle: "Request audience",
    icon: "/assets/audience-token.svg",
    alt: "token",
  },
  {
    id: 4,
    title: "Dapp contract",
    subtitle: "Request custom audience",
    icon: "/assets/audience-dapp.svg",
    alt: "dapp",
  },
];
