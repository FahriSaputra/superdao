import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyWalletPage = dynamic(() => import("@/components/wallet/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyWalletPage />;
};

export default Page;
