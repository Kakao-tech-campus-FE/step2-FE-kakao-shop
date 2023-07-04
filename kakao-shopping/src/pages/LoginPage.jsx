import LoginForm from "../components/organisms/LoginForm";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import Title from "../components/atoms/Title";
import Container from "../components/atoms/Container";

const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if(storedIsLoggedIn !== null && storedIsLoggedIn >= calculateTime()) { //로컬스토리지에 저장이 돼있고, 시간도 하루가 안 지났다면
      dispatch(loginSuccess()); //로그인 성공
    }
  },[dispatch]);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  console.log(isLoggedIn);

  const navigate = useNavigate();
  if(isLoggedIn) { //로그인 후 메인페이지로 이동
    navigate('/main');
  }
  return (
    <Container className="border bg-slate-100 border-slate-500 border-solid rounded-md flex flex-col items-center justify-center">
    <Title className="-mx-3 m-3 block bg-slate-200 rounded-lg px-3 py-2 text-base font-semibold leading-7">로그인 페이지</Title>
    <LoginForm />
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