import styled from "styled-components";

type TButton = "primary" | "secondary" | "text" | "danger";

const Button = styled.button<{ maxWidth?: number; buttonStyle?: TButton }>`
  display: flex;
  padding: ${({ buttonStyle }) => buttonStyle === 'text' ? 0 : `8px 24px`};
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  justify-content: center;
  ${({ maxWidth }) =>
    maxWidth &&
    `
    max-width: ${maxWidth}px;
  `}
  background: ${({ buttonStyle }) => `
    ${
      buttonStyle === "danger"
        ? "#FF5471"
        : buttonStyle === "secondary"
        ? "rgba(208, 220, 245, 0.08)"
        : buttonStyle === "text"
        ? "transparent"
        : "#fc7900"
    }
  `};

  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  letter-spacing: -0.24px;
  font-family: var(--sf-pro-text);
`;

export default Button;
