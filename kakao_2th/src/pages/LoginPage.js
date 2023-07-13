import LoginForm from "../components/organisms/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        // 로그인 성공 후 리디렉션을 수행
        navigate("/home");
    };

    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;
