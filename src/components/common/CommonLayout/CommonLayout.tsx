"use client";

import styled from "styled-components";
import Aside from "@/components/common/Aside";
import { useState } from "react";
import MobileHeader from "./_components/MobileHeader";
import Toast from "@/components/common/Notification";

const Container = styled.main`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  background-color: #1b202a;
  width: calc(100% - 288px);
  overflow-y: scroll;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 0 32px;
  height: calc(100% - 52px);
`;

const Backdrop = styled.div<{ active: boolean }>`
  display: none;

  @media only screen and (max-width: 768px) {
    display: ${({ active }) => (active ? "block" : "none")};
    position: absolute;
    z-index: 9999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(27, 32, 42, 0.84);
  }
`;

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMobileMenu((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setActiveMobileMenu(false);
  };

  return (
    <Container>
      <Backdrop active={activeMobileMenu} onClick={handleCloseMobileMenu} />
      <Aside
        active={activeMobileMenu}
        onClickMenu={handleCloseMobileMenu}
        onSubMenuClick={handleCloseMobileMenu}
      />

      <MainContent>
        <MobileHeader onClick={toggleMenu} />
        <Wrapper>{children}</Wrapper>
        
        <Toast />
      </MainContent>
    </Container>
  );
}
