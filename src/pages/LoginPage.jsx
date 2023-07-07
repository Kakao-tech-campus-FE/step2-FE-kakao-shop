// src/pages/LoginPage.jsx
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setEmail } from "../store/slices/userSlice";
import LoginForm from "../components/organisms/LoginForm";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, loading } = useSelector((state) => state.user);

  const handleLogin = (data) => {
    dispatch(loginRequest(data));
  };

  useEffect(() => {
    if (email) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, email]);

  return <LoginForm loading={loading} handleLogin={handleLogin} />;
};

export default LoginPage;