import styled from "styled-components";

const DropdownItem = styled.div<{
  position?: "flex-start" | "center" | "flex-end";
}>`
  padding: 8px 12px;
  min-width: 80px;
  display: flex;
  justify-content: ${({ position }) => position || "center"};
  width: 100%;

  &:hover {
    background-color: rgba(208, 220, 245, 0.08);
    cursor: pointer;
  }
`;

export default DropdownItem;
