import LoginForm from "../components/organisms/LoginForm";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../redux/authRedux';
import { useNavigate } from 'react-router-dom';
import MainLogo from "../components/molecules/MainLogo";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('userInfo')); // 유저 정보

      if(storedUser && storedUser.expirationTime > Date.now()) { // 로컬스토리지에 저장이 돼있고, 시간도 하루가 안 지났다면
        dispatch(loginSuccess(storedUser));
        navigate(staticServerUrl + '/');
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Parse error", error);
    }
  },[dispatch, navigate]);

  return (
    <div className="h-screen relative border border-slate-500 border-solid rounded-md flex flex-col justify-center items-center">
      <MainLogo className="absolute w-40 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      <div className="w-fit border border-solid rounded-lg border-gray">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;