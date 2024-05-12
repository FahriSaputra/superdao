"use client";

import styled from "styled-components";
import MENU_DATA from "./data";
import AsideHeader from "./_components/AsideHeader";
import AsideFooter from "./_components/AsideFooter";
import AsideMenu from "./_components/AsideMenu";
import AsideSearch from "./_components/AsideSearch";
import { useState } from "react";
import AddAudienceModal from "./_components/AddAudienceModal";

const Container = styled.aside`
  background-color: #252b36;
  width: 288px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Aside() {
  const [visible, setVisible] = useState(false);

  const handleShowModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <Container>
      <AsideHeader />

      <AsideSearch />

      <AsideMenu menu={MENU_DATA} handleShowModal={handleShowModal} />

      <AsideFooter />

      <AddAudienceModal
        visible={visible}
        onCloseClick={handleCloseModal}
        onShowModal={handleShowModal}
      />
    </Container>
  );
}
