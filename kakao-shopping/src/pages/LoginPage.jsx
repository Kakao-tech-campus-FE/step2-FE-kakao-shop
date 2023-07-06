import Container from "../components/atoms/Container";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <LoginForm />
        </Container>
    );
};

export default LoginPage;
