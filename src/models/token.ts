export interface Token {
  id: number;
  name: string;
  avatar: string;
  symbol: string;
  owners: number;
  activeLastMonth: number;
  price: number;
  marketCap: number;
}
