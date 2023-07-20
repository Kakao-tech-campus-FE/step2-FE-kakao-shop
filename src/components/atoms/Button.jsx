import { styled } from "styled-components";

const StyledButton = styled.button`
  border-radius: 10px;
  border: 1px solid #ffe342;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  padding: 16px 20px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  background-color: #ffe342;

  &:enabled:active {
    background-color: #fff;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

// onClick: 버튼을 눌렀을 때 실행할 함수
// disabled: 유효성 검사를 통과했을 때만 enable
const Button = ({ children, onClick, disabled }) => {
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
