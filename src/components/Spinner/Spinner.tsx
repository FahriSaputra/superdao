"use client";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`;

const Spinner = styled.div`
  border: 2px solid #fc7900;
  border-top: 0;
  border-left: 0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
