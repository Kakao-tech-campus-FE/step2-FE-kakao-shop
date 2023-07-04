import LoginForm from "../components/organisms/LoginForm";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

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
    <LoginForm />
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