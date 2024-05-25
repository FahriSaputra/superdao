"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  useEffect(() => {
    redirect("/wallet");
  });
  return <Loading />;
}
