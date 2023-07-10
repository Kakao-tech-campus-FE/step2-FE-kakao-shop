import Container from '../atoms/Container';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import GNB from '../molecules/GNB';
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../store/slices/loginSlice";
import React, { useEffect } from 'react';

const HomeForm = () => {
  const dispatch = useDispatch();  //redux의 state 조회
  const loginState = useSelector(state => state.login.loginState);
  const email = useSelector(state => state.user.email);

  const clickLogOut =() => {
    dispatch(setLogout({ //로그아웃
    login: false,
  }));
  console.log("da")
}

const savedTime = localStorage.getItem("timer")
const maxLoginTime = 60* 60 * 1000

useEffect(() => {
  let timerId;
  const currentTime = Date.now();
  const restTime = currentTime - parseInt(savedTime);

  // 1시간 이상 경과한 경우 로그인 상태 초기화
  if (restTime < maxLoginTime) {
    const logoutTimer = maxLoginTime - restTime;
    timerId = setTimeout(() => {
      dispatch(setLogout());
    }, logoutTimer);
  }

  return () => {
    clearTimeout(timerId);
  };
}, [dispatch, savedTime]);  //시간이 지나면 자동 로그아웃


  if (loginState) {
    return <Container >
      <GNB>Home</GNB>
        {email}님 환영합니다!
    </Container>
  }
    return <Container>
      <GNB>Home</GNB>
        회원가입을 진행하세요!<Link href={"/signup"}>회원가입</Link>
    </Container>
};

  
export default HomeForm;