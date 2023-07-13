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

const Input = ({ id, name, type, placeholder, register }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
