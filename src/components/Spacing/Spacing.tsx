"use client";

import styled from "styled-components";

const Spacing = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
`;

export default Spacing;
