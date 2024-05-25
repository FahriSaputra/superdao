"use client";

import Header from "@/components/common/Header";
import Spacing from "../common/Spacing";
import { useState } from "react";
import MemberForm from "./_components/MemberForm";
import AddButton from "./_components/AddButton";
import ActionButton from "./_components/ActionButton";

const SettingsPage = () => {
  const [form, setForm] = useState([1]);

  const handleClickAddMore = () => {
    setForm((prev) => [...prev, prev.length]);
  };

  const handleClickRemove = (form: number) => {
    setForm((prev) => {
      const replace = prev.filter((value) => value !== form);

      return replace;
    });
  };

  return (
    <>
      <Header title="Add members" withBackButton />

      {form.map((value, index) => (
        <MemberForm
          key={value}
          onClickRemove={handleClickRemove}
          form={value}
          index={index + 1}
        />
      ))}

      {form.length < 5 && <AddButton onClick={handleClickAddMore} />}

      <Spacing height={40} />

      <ActionButton />
    </>
  );
};

export default SettingsPage;
