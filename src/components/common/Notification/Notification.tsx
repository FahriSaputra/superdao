"use client";

import styled from "styled-components";
import { ToastContainer } from 'react-toastify';


const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    bottom: 0;
    transform: translateX(calc(-50% + 144px));
    padding: 0;

    @media only screen and (max-width: 768px) {
      transform: translateX(-50%);
      left: 50%
    }

  }
  .Toastify__toast {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: #464C59;
    margin-bottom: 24px;

    @media only screen and (max-width: 480px) {
      margin-bottom: 0;
    }
  }
  .Toastify__toast-body {
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: white;
    line-height: 24px;
    letter-spacing: -0.24px;
  }
  .Toastify__progress-bar--wrp {
    height: 0 !important;
  }
`;


const Toast = () => {
  return (
    <StyledContainer
      autoClose={3000}
      closeButton={false}
    />
  );
};

export default Toast;
