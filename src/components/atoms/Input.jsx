import { styled } from "styled-components";

const StyledInput = styled.input`
  background-color: #eee;
  padding: 16px;
  width: 100%;
  height: 48px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 10px;

  &:focus {
    border: 1px solid #ffe342;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #eee inset;
  }
`;

// id: label을 위한 id값
// type: input의 타입을 결정
// placeholder: placeholder에 들어갈 텍스트
// register: react-hook-form의 register를 받는 props
const Input = ({ id, type, placeholder, register }) => {
  return (
    <StyledInput id={id} type={type} placeholder={placeholder} {...register} />
  );
};

export default Input;
