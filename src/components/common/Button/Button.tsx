import styled from "styled-components";
import Link from "next/link";

const Button = styled(Link)`
  display: flex;
  height: 40px;
  padding: 0px 24px;
  align-items: center;
  border-radius: 8px;
  background: #fc7900;
  cursor: pointer;
  border: none;
  justify-content: center;

  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  font-family: var(--sf-pro-text);
`;

export default Button;
