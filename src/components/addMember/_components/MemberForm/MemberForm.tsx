"use client";

import { Input, Label } from "@/components/common/Input";
import styled from "styled-components";
import { useState } from "react";
import Spacing from "@/components/common/Spacing";
import Dropdown, { DropdownItem } from "@/components/common/Dropdown";

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RigthLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.08px;
  text-align: right;
  color: #717a8c;
  cursor: pointer;
`;

interface MemberFormProps {
  form: number;
  index: number;
  onClickRemove: (form: number) => void;
}

type TRole = { id: number; name: string };

const MemberForm = (props: MemberFormProps) => {
  const { form, index, onClickRemove } = props;

  const [roleSelected, setRoleSelected] = useState<TRole | undefined>(
    undefined
  );
  const [role] = useState<TRole[]>([
    {
      id: 1,
      name: "Admin",
    },
    {
      id: 2,
      name: "Member",
    },
  ]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onDropdownClick = () => {
    setDropdownVisible((prev) => !prev);
  };
  const onOutsideDropdownClick = () => {
    setDropdownVisible(false);
  };

  const handleSelectItem = (role: TRole) => {
    setDropdownVisible(false);
    setRoleSelected(role);
  };

  return (
    <>
      <LabelWrapper>
        <Label htmlFor="workspace">Member {index}</Label>
        {index !== 1 && (
          <RigthLabel onClick={() => onClickRemove(form)}>Remove</RigthLabel>
        )}
      </LabelWrapper>

      <Input id="workspace" placeholder="Wallet Address" />

      <Spacing height={16} />

      <InputWrapper>
        <Dropdown
          visible={dropdownVisible}
          onClick={onDropdownClick}
          onOutsideClick={onOutsideDropdownClick}
          position="bottom-right"
          containerStyle={{ width: "100%" }}
          dropdownButton={
            <Input
              id="workspace"
              placeholder="Select role"
              role="button"
              rightIcon="/assets/chevron-down.svg"
              rightIconAlt="arrow"
              disabled
              value={roleSelected?.name}
            />
          }
        >
          {role?.map(({ name, id }) => (
            <DropdownItem
              onClick={() => handleSelectItem({ name, id })}
              key={id}
              position="flex-start"
            >
              <p>{name}</p>
            </DropdownItem>
          ))}
        </Dropdown>

        <Input
          id="workspace"
          placeholder="Email"
          containerStyle={{ width: "100%" }}
        />
      </InputWrapper>

      <Spacing height={16} />
    </>
  );
};

export default MemberForm;
