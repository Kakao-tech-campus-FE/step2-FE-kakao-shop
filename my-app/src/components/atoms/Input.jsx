import { styled } from "styled-components";

const StyledInput = styled.input`
  background-color: #eee;
  padding: 16px;
  margin: 8px 0;
  width: 280px;
  border: 0;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
`;

const Input = ({ id, name, placeholder, type, value, onChange }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
