"use client";

import styled from "styled-components";
import MENU_DATA from "./data";
import AsideHeader from "./_components/AsideHeader";
import AsideFooter from "./_components/AsideFooter";
import AsideMenu from "./_components/AsideMenu";
import AsideSearch from "./_components/AsideSearch";
import { useState } from "react";
import AddAudienceModal from "./_components/AddAudienceModal";

const Container = styled.aside<{ active?: boolean }>`
  background-color: #252b36;
  width: 288px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  @media only screen and (max-width: 768px) {
    position: absolute;
    left: ${({ active }) => (active ? "0" : "-288px")};
    z-index: 9999;
  }
`;

interface AsideProps {
  active?: boolean;
  onClickMenu?: () => void;
  onSubMenuClick?: () => void;
}

export default function Aside(props: AsideProps) {
  const [visible, setVisible] = useState(false);

  const { active, onClickMenu, onSubMenuClick } = props;

  const handleShowModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <Container active={active}>
      <AsideHeader />

      <AsideSearch />

      <AsideMenu
        menu={MENU_DATA}
        handleShowModal={handleShowModal}
        onClickMenu={onClickMenu}
        onSubMenuClick={onSubMenuClick}
      />

      <AsideFooter />

      <AddAudienceModal
        visible={visible}
        onCloseClick={handleCloseModal}
        onShowModal={handleShowModal}
      />
    </Container>
  );
}
