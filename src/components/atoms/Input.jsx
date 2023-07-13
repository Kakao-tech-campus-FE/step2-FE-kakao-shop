import styled from "styled-components";

const Input = ({ error, ...props }) => {
  return <InputField error={error} {...props} />;
};

export default Input;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: #f7fafc;
  margin-top: 0.5rem;
  border: 1px solid #e2e8f0;
  outline: none;

  &:focus {
    border-color: #3182ce;
    background-color: #fff;
  }

  ${(props) => props.error && "border-color: #e53e3e;"}
`;
