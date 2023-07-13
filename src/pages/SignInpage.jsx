import { styled } from "styled-components";
import SignInTemplate from "../components/templates/SignInTemplate";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SignInPage = () => {
  return (
    <Container>
      <SignInTemplate />
    </Container>
  );
};

export default SignInPage;
