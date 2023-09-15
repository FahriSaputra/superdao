"use client";

import { useState } from "react";

import Header from "@/components/common/Header";
import LabelList from "./_components/LabelList";
import Spacing from "@/components/common/Spacing";

import labelsDummy from "@/dummy/labels.json";

const LabelPage = () => {
  const [labels] = useState(labelsDummy);

  const interestLabel = labels?.filter((label) => label?.interest);

  const personas = labels?.filter((label) => !label?.interest);

  return (
    <>
      <Header title="Labels" />

      <Spacing height={16} />

      <LabelList title="Interests" labels={interestLabel} />

      <Spacing height={40} />

      <LabelList title="Personas" labels={personas} />
    </>
  );
};

export default LabelPage;
