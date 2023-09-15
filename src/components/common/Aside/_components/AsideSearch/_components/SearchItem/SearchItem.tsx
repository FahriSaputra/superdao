import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled(Link)`
  padding: 4px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: #343a46;
  }
`;

const Icon = styled(Image)`
  border-radius: 100%;
`;

const Wrapper = styled.div`
  width: calc(100% - 44px);
`;

const Title = styled.p`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;

  /* Subhead · Semibold */
  font-family: var(--sf-pro-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const SubTitle = styled.p`
  color: #a2a8b4;
  font-feature-settings: "clig" off, "liga" off;

  /* Capiton · Regular */
  font-family: var(--sf-pro-text);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 138.462% */
  letter-spacing: -0.08px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface SearchItemProps {
  href: string;
  title: string;
  type: string;
  icon: string;
}

const SearchItem = (props: SearchItemProps) => {
  const { href, title, type, icon } = props;

  return (
    <Container href={href}>
      <Icon src={icon} width={32} height={32} alt="image" objectFit="cover" />

      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{type}</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default SearchItem;
