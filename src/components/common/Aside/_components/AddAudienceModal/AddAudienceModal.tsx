"use client";

import styled from "styled-components";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import AddAudienceCell from "./_components/AddAudienceCell";
import { CREATE_AUDIENCE_MENU } from "./data";
import { Input } from "@/components/common/Input";
import Spacing from "@/components/common/Spacing";

const Notes = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.08px;
  text-align: left;
  color: #717a8c;
  margin: 8px 16px 0 16px;
  line-height: 18px;
`;

interface AddAudienceModalProps {
  visible: boolean;
  onCloseClick: () => void;
  onShowModal: () => void;
}

export default function AddAudienceModal(props: AddAudienceModalProps) {
  const { visible, onCloseClick, onShowModal } = props;
  const [visibleModalForm, setVisibleModalForm] = useState(false);

  const handleClickMenu = () => {
    onCloseClick?.();

    setVisibleModalForm(true);
  };

  const handleCancelModalForm: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event?.preventDefault();
    setVisibleModalForm(false);

    onShowModal?.();
  };

  const handleCloseModalForm = () => {
    setVisibleModalForm(false);
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Create audience"
        onCloseClick={onCloseClick}
        withoutPaddingHorizontal
      >
        {CREATE_AUDIENCE_MENU?.map((menu) => (
          <AddAudienceCell key={menu?.id} {...menu} onClick={handleClickMenu} />
        ))}
      </Modal>

      <Modal
        visible={visibleModalForm}
        title="Create audience"
        onCloseClick={handleCloseModalForm}
        primaryButton={{ href: "", children: "Create" }}
        secondaryButton={{
          href: "",
          children: "Cancel",
          onClick: handleCancelModalForm,
        }}
      >
        <Spacing height={12} />

        <Input placeholder="Name the audience" />

        <Spacing height={16} />
        <Input
          placeholder="Upload CSV file"
          type="file"
          title=""
          accept=".csv"
        />

        <Notes>
          Each line should contain a single wallet data.
          <br /> 300k wallets max
        </Notes>
      </Modal>
    </>
  );
}
