import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyTokensPage = dynamic(() => import("@/components/tokens/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyTokensPage />;
};

export default Page;
