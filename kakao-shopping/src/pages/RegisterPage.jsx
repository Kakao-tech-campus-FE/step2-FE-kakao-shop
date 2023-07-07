import Container from "../components/atoms/Container";
import Title from "../components/atoms/Title";
import RegisterForm from "../components/organisms/RegisterForm";

const RegisterPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <Title> kakao </Title>
            <RegisterForm />
        </Container>
    );
};

export default RegisterPage;
