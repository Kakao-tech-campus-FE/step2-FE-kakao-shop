import { styled } from "styled-components";
import SignInForm from "../organisms/SignInForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  border-radius: 10px;
  width: 680px;
  height: 480px;
`;

const SignInTemplate = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignInTemplate;
