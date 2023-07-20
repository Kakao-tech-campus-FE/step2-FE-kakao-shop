import RegisterForm from "../components/organisms/RegisterForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegisterSuccess = () => {
        // 회원가입 성공 후 리디렉션을 수행
        navigate("/login");
    };

    return <RegisterForm onRegisterSuccess={handleRegisterSuccess} />;
};

export default RegisterPage;
