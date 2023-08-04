import LoginForm from "../components/organisms/LoginForm";
import Container from "../components/atoms/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    width: 580px;
    padding: 0 42px;
    border: 1px solid rgba(0, 0, 0, .12);
    margin: 40px auto 42px;
`;

const LogoKakao = styled.img`
    width: 120px;
    display: block;
    margin: 50px auto 0;
`;

const staticServerUri = process.env.REACT_APP_PATH || "";

const LoginPage = () => {
    return (
        <>
            <LogoKakao src={staticServerUri + "/logoKakaoText.png"} />
            <StyledContainer>
                <LoginForm />
            </StyledContainer>
        </>
    );
}

export default LoginPage;