import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyLabelPage = dynamic(() => import("@/components/label/Page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyLabelPage />;
};

export default Page;
