import styled from "styled-components";


const Input = ({ id, name, type, value, placeholder, onChange }) => {
  return (
    <Inputs
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

const Inputs = styled.input`
  display: block;
  border: 1px solid darkgray;
`;