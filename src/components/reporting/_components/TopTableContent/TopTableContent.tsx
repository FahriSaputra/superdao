"use client";

import Button from "@/components/common/Button";
import Dropdown, { DropdownItem } from "@/components/common/Dropdown";
import SearchInput from "@/components/common/SearchInput";
import Spacing from "@/components/common/Spacing";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 20px 8px 20px;
`;

const TopTableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Count = styled.p`
  flex-grow: 0;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.24px;
  text-align: left;
  color: #fff;
`;

const Wallets = styled.span`
  flex-grow: 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.24px;
  text-align: left;
  color: #a2a8b4;
`;

const RightAction = styled.div`
  display: flex;
  flex-grow: 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.24px;
  text-align: left;
  color: #fff;
  gap: 8px;
  cursor: pointer;
  padding: 10px 12px;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const FilterWrapper = styled.div`
  width: 100%;
`;

const FilterLabel = styled.label`
  flex-grow: 0;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.25px;
  text-align: left;
  color: #a2a8b4;
`;

const DropdownButton = styled(Button)`
  padding: 8px 16px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: left;
  color: #fff;
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopTableContent = () => {
  return (
    <Container>
      <TopTableWrapper>
        <LeftContent>
          <SearchInput placeholder="Search" size={"xl"} width="197px" />

          <Count>
            44 684 <Wallets>Wallets</Wallets>
          </Count>
        </LeftContent>

        <RightContent>
          <RightAction>
            <Image
              src={"/assets/close-16.svg"}
              alt="share"
              width={20}
              height={20}
            />
            Reset filters
          </RightAction>

          <RightAction>
            <Image
              src={"/assets/share.svg"}
              alt="share"
              width={20}
              height={20}
            />
            Export
          </RightAction>
        </RightContent>
      </TopTableWrapper>

      <Spacing height={20} />

      <FilterContainer>
        <FilterWrapper>
          <FilterLabel>PERIOD</FilterLabel>
          <Dropdown
            // visible={dropdownVisible}
            // onClick={onDropdownClick}
            // onOutsideClick={onOutsideDropdownClick}
            position="top"
            dropdownButton={
              <DropdownButton buttonStyle="secondary">
                All time{" "}
                <Image
                  src="/assets/chevron-down.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </DropdownButton>
            }
          >
            <DropdownItem
            // key={pageSize}
            // onClick={() => handleChangePageSize(pageSize)}
            >
              <p>321321</p>
            </DropdownItem>
          </Dropdown>
        </FilterWrapper>

        <FilterWrapper>
          <FilterLabel>ACTION</FilterLabel>
          <Dropdown
            // visible={dropdownVisible}
            // onClick={onDropdownClick}
            // onOutsideClick={onOutsideDropdownClick}
            position="top"
            dropdownButton={
              <DropdownButton buttonStyle="secondary">
                All time{" "}
                <Image
                  src="/assets/chevron-down.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </DropdownButton>
            }
          >
            <DropdownItem
            // key={pageSize}
            // onClick={() => handleChangePageSize(pageSize)}
            >
              <p>321321</p>
            </DropdownItem>
          </Dropdown>
        </FilterWrapper>

        <FilterWrapper>
          <FilterLabel>SOURCE</FilterLabel>
          <Dropdown
            // visible={dropdownVisible}
            // onClick={onDropdownClick}
            // onOutsideClick={onOutsideDropdownClick}
            position="top"
            dropdownButton={
              <DropdownButton buttonStyle="secondary">
                All time{" "}
                <Image
                  src="/assets/chevron-down.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </DropdownButton>
            }
          >
            <DropdownItem
            // key={pageSize}
            // onClick={() => handleChangePageSize(pageSize)}
            >
              <p>321321</p>
            </DropdownItem>
          </Dropdown>
        </FilterWrapper>

        <FilterWrapper>
          <FilterLabel>LABELS</FilterLabel>
          <Dropdown
            // visible={dropdownVisible}
            // onClick={onDropdownClick}
            // onOutsideClick={onOutsideDropdownClick}
            position="top"
            dropdownButton={
              <DropdownButton buttonStyle="secondary">
                All time{" "}
                <Image
                  src="/assets/chevron-down.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </DropdownButton>
            }
          >
            <DropdownItem
            // key={pageSize}
            // onClick={() => handleChangePageSize(pageSize)}
            >
              <p>321321</p>
            </DropdownItem>
          </Dropdown>
        </FilterWrapper>
      </FilterContainer>
    </Container>
  );
};

export default TopTableContent;
