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

// disabled: 유효성 검사를 통과했을 때 false, 통과하지 못하면 true
// onClick: 클릭했을 때 실행할 함수

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
