import { styled } from "styled-components";

const StyledButton = styled.button`
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  margin: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fee500;
  box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  disabled: ${(props) => props.disabled}

  &:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
`;

const Button = ({ children, disabled, onClick }) => {
  return (
    <StyledButton
      disabled={disabled}
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
