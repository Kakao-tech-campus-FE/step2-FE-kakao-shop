import React from "react";
import { styled } from "styled-components";

interface Props {
  // style을 받는 prop과 onClick Event
  width?: string;
  height?: string;
  background?: string;
  fontSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button = ({
  width,
  height,
  background,
  fontSize,
  onClick,
  children,
}: Props) => {
  return (
    <StyledButton
      width={width}
      height={height}
      background={background}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border: 0;
  border-radius: 4px;
  background: ${({ background }) => background || "inherit"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`;
