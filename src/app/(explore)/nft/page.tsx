import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyNFTPage = dynamic(() => import("@/components/nft/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyNFTPage />;
};

export default Page;
