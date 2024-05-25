import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyDappsPage = dynamic(() => import("@/components/dapps/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyDappsPage />;
};

export default Page;
