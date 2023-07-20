import RegisterForm from "../organisms/RegisterForm";
import Title from "../atoms/Title";
import Container from "../atoms/Container";
import "../../styles/pages/formPage.css";

const RegisterPage = () => {
    return (
        <Container className={"page register-page"}>
            <Container className={"form-page"}>
                <Title>회원가입</Title>
                <RegisterForm/>
            </Container>
        </Container>
    )
}

export default RegisterPage
