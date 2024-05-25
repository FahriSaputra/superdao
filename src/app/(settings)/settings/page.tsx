import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LazySettingsPage = dynamic(() => import("@/components/settings/page"), {
  loading: () => <Loading />,
});

export default function Page() {
  return <LazySettingsPage />;
}
