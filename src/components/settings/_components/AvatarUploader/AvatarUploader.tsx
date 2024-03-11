import Avatar from "@/components/common/Avatar";
import Image from "next/image";
import styled from "styled-components";

const ImageUploader = styled.button`
  width: 96px;
  height: 96px;
  background-color: #343a46;
  border-radius: 100%;
  outline: none;
  border: none;
  display: block;
  cursor: pointer;
`;

interface IAvatarUploaderProps {
  avatarUrl?: string;
}

const AvatarUploader = (props: IAvatarUploaderProps) => {
  const { avatarUrl } = props;

  if (avatarUrl)
    return <Avatar width={96} height={96} alt="avatar" src={avatarUrl} />;

  return (
    <ImageUploader>
      <Image src="/assets/camera.svg" alt="camera" width={38} height={38} />
    </ImageUploader>
  );
};

export default AvatarUploader;
