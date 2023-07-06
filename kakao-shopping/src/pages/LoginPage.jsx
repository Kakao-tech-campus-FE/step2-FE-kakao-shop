import LoginForm from "../components/organisms/LoginForm";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import Container from "../components/atoms/Container";
import MainLogo from "../components/molecules/MainLogo";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('userInfo'); // 유저 정보
    if(storedIsLoggedIn !== null && storedIsLoggedIn >= calculateTime()) { // 로컬스토리지에 저장이 돼있고, 시간도 하루가 안 지났다면
      dispatch(loginSuccess(storedUser)); // 로그인 성공
    }

    if(isLoggedIn) { //로그인 후 메인페이지로 이동
      navigate('/main');
    }
  },[dispatch, isLoggedIn]);

  return (
    <Container className="h-screen relative border border-slate-500 border-solid rounded-md flex flex-col justify-center items-center">
      <MainLogo className="absolute w-40 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      <Container className="w-fit border border-solid rounded-lg border-gray">
        <LoginForm />
      </Container>
    </Container>
  )
}

const calculateTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().padStart(4, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const formattedTime = year + month + day + hours + minutes;
  return formattedTime;
}
export default LoginPage;