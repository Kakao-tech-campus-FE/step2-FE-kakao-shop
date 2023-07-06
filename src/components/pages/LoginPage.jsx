import Title from "../atoms/Title";
import LoginForm from "../organisms/LoginForm";
import Container from "../atoms/Container";

const LoginPage = () => {
    return (
        <Container>
            <Title>로그인</Title>
            <LoginForm/>
        </Container>
    )
}

export default LoginPage;