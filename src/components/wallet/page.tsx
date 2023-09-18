import Header from "@/components/common/Header";
import SearchInput from "@/components/common/SearchInput";
import RecentWallets from "./_components/RecentWallets";
import TopWallets from "./_components/TopWallets";

const WalletPage = () => {
  return (
    <>
      <Header
        title="Wallets"
        rightContent={
          <SearchInput
            placeholder="Wallet address or ENS"
            size="xl"
            width="450px"
          />
        }
      />

      <RecentWallets />

      <TopWallets />
    </>
  );
};

export default WalletPage;
