import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = ({ children }) => {
  return <FormStyle>{children}</FormStyle>;
};

export default Form;
