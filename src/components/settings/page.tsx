"use client";

import Header from "@/components/common/Header";
import { Input, Label } from "@/components/common/Input";
import Button from "@/components/common/Button/Button";
import styled from "styled-components";
import AvatarUploader from "./_components/AvatarUploader";

const WhiteSpace = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const LeftInputContent = styled.span`
  padding: 8px 0 8px 16px;
  position: absolute;
  font-family: var(--sf-pro-text);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.24px;
  text-align: left;
`;

const UrlInput = styled(Input)`
  padding-left: 107px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
`;

const SettingsPage = () => {
  return (
    <>
      <Header title="Settings" />

      <AvatarWrapper>
        <AvatarUploader />
      </AvatarWrapper>

      <Label htmlFor="workspace">Workspace name</Label>
      <Input id="workspace" placeholder="Acme Inc." />

      <WhiteSpace height={16} />

      <Label htmlFor="workspace">Custom URL</Label>
      <UrlInput
        id="workspace"
        placeholder="link"
        leftContent={<LeftInputContent>superdao.co/</LeftInputContent>}
      />

      <WhiteSpace height={40} />

      <Button maxWidth={147}>Save Change</Button>
    </>
  );
};

export default SettingsPage;
