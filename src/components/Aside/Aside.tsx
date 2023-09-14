"use client";

import styled from "styled-components";
import MENU_DATA from "./data";
import AsideFooter from "./_components/AsideFooter";
import AsideMenu from "./_components/AsideMenu";

const Container = styled.aside`
  background-color: #252b36;
  width: 288px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Aside() {
  return (
    <Container>
      <AsideMenu menu={MENU_DATA} />

      <AsideFooter />
    </Container>
  );
}
