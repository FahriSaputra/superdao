import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyCampaignsPage = dynamic(() => import("@/components/campaigns/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyCampaignsPage />;
};

export default Page;
