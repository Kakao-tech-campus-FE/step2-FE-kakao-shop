// src/pages/RegisterPage.jsx
import { useDispatch } from "react-redux";
import { register } from "../services/api";
import { setEmail } from "../store/slices/userSlice";
import RegisterForm from "../components/organisms/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = async (data) => {
    try {
      const response = await register(data);
      const { email, token } = response.data;
      dispatch(setEmail({ email}));
      localStorage.setItem("token", token);
    } catch (error) {
      // 에러 처리
    }
  };

  return <RegisterForm handleRegister={handleRegister} />;
};

export default RegisterPage;