import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyReportingPage = dynamic(() => import("@/components/reporting/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyReportingPage />;
};

export default Page;
