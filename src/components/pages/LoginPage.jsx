import Title from "../atoms/Title";
import LoginForm from "../organisms/LoginForm";
import Container from "../atoms/Container";
import GlobalNavBar from "../organisms/GlobalNavBar";
import "../../styles/formPage.css";

const LoginPage = () => {
    return (
        <>
            <GlobalNavBar/>
            <Container className={"form-page"}>
                <Title>로그인</Title>
                <LoginForm/>
            </Container>
        </>
    )
}

export default LoginPage;