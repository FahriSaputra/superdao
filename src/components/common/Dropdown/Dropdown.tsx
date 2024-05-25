"use client";

import styled from "styled-components";
import { CSSProperties, useMemo, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

const Container = styled.div`
  position: relative;
`;

const DropdownContainer = styled.div<{ position: string }>`
  z-index: 99;
  position: absolute;
  margin: ${({ position }) =>
    position.includes("top") ? "0 0 8px 0" : "8px 0 0 0"};
  padding: 4px 0;
  border-radius: 8px;
  background: #343a46;
  box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.04),
    0px 8px 24px 0px rgba(0, 0, 0, 0.08);
`;

interface DropdownProps {
  dropdownButton: React.ReactNode;
  children: React.ReactNode;
  position?: "bottom" | "bottom-right" | "top" | "top-right";
  childrenContainerStyle?: CSSProperties;
  visible: boolean;
  containerStyle?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onOutsideClick: () => void;
}

const Dropdown = (props: DropdownProps) => {
  const {
    children,
    onOutsideClick,
    dropdownButton,
    childrenContainerStyle,
    containerStyle,
    position = "bottom",
    visible,
    onClick,
  } = props;

  const getDropdownPosition = useMemo(() => {
    if (position === "top") return { bottom: "100%" };
    if (position === "top-right") return { bottom: "100%", right: 0 };
    if (position === "bottom-right") return { right: 0 };

    return { left: 0 };
  }, [position]);

  const containerRef = useRef(null);

  useOutsideClick(containerRef, onOutsideClick);

  return (
    <Container ref={containerRef} style={containerStyle}>
      <div onClick={onClick}>{dropdownButton}</div>

      {visible && (
        <DropdownContainer
          style={{ ...getDropdownPosition, ...childrenContainerStyle }}
          position={position}
        >
          {children}
        </DropdownContainer>
      )}
    </Container>
  );
};

export default Dropdown;
