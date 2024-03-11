import styled from "styled-components";

const ModalBody = styled.div<{
  withoutPaddingHorizontal?: boolean;
}>`
  margin-bottom: 20px;
  padding: ${({ withoutPaddingHorizontal }) =>
    withoutPaddingHorizontal ? "0px" : "0 24px"};
`;

export default ModalBody;
