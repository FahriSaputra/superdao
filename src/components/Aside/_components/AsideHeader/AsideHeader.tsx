"use client";

import styled from "styled-components";
import Image from "next/image";
import MenuItem from "@/components/MenuItem";
import { IMenuItem } from "../../type";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";

const Container = styled.div`
  margin-top: 16px;
`;

const Title = styled.p`
  color: #fff;
  font-family: var(--sf-pro-text);
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 123.529% */
  letter-spacing: -0.41px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ProfileWrapper = styled.div`
  max-height: calc(100vh - 240px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CreateOrganizationWrapper = styled.div`
  position: sticky;
  bottom: 0;
`;

export default function AsideHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [headerData] = useState<IMenuItem>({
    id: 1,
    title: "Acme Inc.",
    icon: "/assets/explore.svg",
    activeIcon: "/assets/explore.svg",
    linkTo: "",
    defaultOpen: false,
    subMenu: [],
  });

  const [creatOrganizationData] = useState<IMenuItem>({
    id: 1,
    title: "Create organization",
    icon: "/assets/plus.svg",
    activeIcon: "",
    linkTo: "",
    defaultOpen: false,
    subMenu: [],
  });

  const onHeaderClick = () => {
    setShowDropdown((prevValue) => !prevValue);
  };

  return (
    <Container>
      <Dropdown
        visible={showDropdown}
        onClick={onHeaderClick}
        childrenContainerStyle={{
          margin: "8px 8px 0 8px",
          width: "calc(100% - 16px)",
        }}
        dropdownButton={
          <MenuItem
            menu={headerData}
            active={false}
            title={<Title>{headerData?.title}</Title>}
            rightContent={
              <ArrowWrapper>
                <Image
                  src="/assets/expand.svg"
                  width={16}
                  height={16}
                  alt="expand"
                />
              </ArrowWrapper>
            }
          />
        }
      >
        <ProfileWrapper>
          <MenuItem key={1} menu={headerData} active={false} />
        </ProfileWrapper>

        <CreateOrganizationWrapper>
          <MenuItem key={1} menu={creatOrganizationData} active={false} />
        </CreateOrganizationWrapper>
      </Dropdown>
    </Container>
  );
}
