import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyMembersPage = dynamic(() => import("@/components/members/page"), {
  loading: () => <Loading />,
});

const Page = () => {
  return <LazyMembersPage />;
};

export default Page;
