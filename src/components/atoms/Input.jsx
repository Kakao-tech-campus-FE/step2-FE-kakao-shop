import styled from "styled-components";

const InputBox = styled.input`
  display: block;
  width: 32rem;
  padding: 0.6rem;
  margin: 0.6rem 0;

  border: 1px solid #979797;
  border-radius: 6px;
`;
const Input = ({ className, children, ...inputProps }) => {
  return (
    <InputBox className={`input-${className}`} {...inputProps}>
      {children}
    </InputBox>
  );
};

export default Input;
