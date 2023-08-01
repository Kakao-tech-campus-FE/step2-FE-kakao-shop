import React from 'react';
import styled from 'styled-components';  

const StyledButton = styled.button`
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${props => props.color};
`

const SubmitButton = 
  ({
    disabled, 
    onClick, 
    className, 
    activeColor, 
    disabledColor,
    children }) => {

  const [activeBG, disabledBG] = [
    activeColor ? activeColor : 'yellow', 
    disabledColor ? disabledColor : 'lightgray'
  ]

  const color = disabled ? disabledBG : activeBG
  
  return (
      <StyledButton
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={className}
        color={color}
      >
        <span>{children}</span>
      </StyledButton>
  );
};

  export default SubmitButton;