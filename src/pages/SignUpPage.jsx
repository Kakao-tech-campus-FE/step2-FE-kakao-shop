import { styled } from "styled-components";
import SignUpTemplate from "../components/templates/SignUpTemplate";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUpTemplate />
    </Container>
  );
};

export default SignUpPage;
