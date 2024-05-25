import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazyAddMembersPage = dynamic(
  () => import("@/components/addMember/page"),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <LazyAddMembersPage />;
};

export default Page;
