export interface Wallet {
  name: string;
  id: string;
  twitterId: string;
  walletType: string;
  balance: number;
  currency: string;
  nftCount: number;
  avatar: string;
  transactionCount: number;
  transactionLastMount: number;
  twitterFollowers: number;
  rank: number;
}
