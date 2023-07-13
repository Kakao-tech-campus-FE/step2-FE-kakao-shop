import Container from "../components/atoms/Container";
import Title from "../components/atoms/Title";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <Title> kakao </Title>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;
