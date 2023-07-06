import RegisterForm from "../organisms/RegisterForm";
import Title from "../atoms/Title";
import Container from "../atoms/Container";
import "../../styles/formPage.css";
import GlobalNavBar from "../organisms/GlobalNavBar";

const RegisterPage = () => {
    return (
        <>
            <GlobalNavBar/>
            <Container className={"form-page"}>
                <Title>회원가입</Title>
                <RegisterForm/>
            </Container>
        </>
    )
}

export default RegisterPage
