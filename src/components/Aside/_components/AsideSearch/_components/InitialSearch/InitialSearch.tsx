import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;
  height: 100%;
`;

const Title = styled.p`
  color: #a2a8b4;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Capiton · Regular */
  font-family: var(--sf-pro-text);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 138.462% */
  letter-spacing: -0.08px;
`;

const InitialSearch = () => {
  return (
    <Container>
      <Title>
        Search for audience, wallet or ENS, NFT collection, label, token, and
        dapp
      </Title>
    </Container>
  );
};

export default InitialSearch;
