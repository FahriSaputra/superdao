"use client";

import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import LabelCard from "../LabelCard";
import { Label } from "@/models/label";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LabelWrapper = styled.div`
  display: grid;
  gap: 20px 16px;
  grid-template-columns: repeat(4, 1fr);
`;

interface LabelList {
  title: string;
  labels: Label[];
}

const LabelList = (props: LabelList) => {
  const { title, labels } = props;

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>

      <LabelWrapper>
        {labels.map((label) => (
          <LabelCard
            key={label?.id}
            title={label?.title}
            counter={label?.counter}
            iconUrl={label?.iconUrl}
            background={label?.background}
          />
        ))}
      </LabelWrapper>
    </Container>
  );
};

export default LabelList;
