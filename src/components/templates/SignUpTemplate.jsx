import { styled } from "styled-components";
import SignUpForm from "../organisms/SignUpForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  border-radius: 10px;
  width: 680px;
  height: 680px;
`;

const SignUpTemplate = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpTemplate;
