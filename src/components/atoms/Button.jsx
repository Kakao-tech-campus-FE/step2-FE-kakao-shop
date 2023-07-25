import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.color || '#999'};
  border-radius: 1rem;
  padding: 1rem;
  
  &:hover {
    filter: brightness(90%);
  }
`  

// props
// onClick: 버튼 클릭 시 실행될 콜백
// children: 버튼 라벨
const Button = ({ color, onClick, children }) => {
  return (
    <StyledButton
      color={color}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
