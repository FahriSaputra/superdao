export interface Dapps {
  id: number;
  name: string;
  avatar: string;
  wallets: number;
  category: string;
  comment: string;
  chain: {
    id: number;
    icon: string;
    name: string;
  }[];
}
