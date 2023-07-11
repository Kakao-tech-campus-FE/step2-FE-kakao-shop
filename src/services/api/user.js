import {instance} from "./index"

// 백엔드 요청 작성
// 1. register 요청
export const register = (data) => { // data 대신 {email, password, username} 처럼 데이처 입력에서 필터링 할 수도 있다. 근데 이번엔 이렇게 진행한대
  const { email, password, username } = data; // data에서 email, username을 받아서 아무 데이터나(객체에 들어있는 email, username처럼 지정되지 않은) api 요청이 될 수 없도록 처리
  return instance.post("/join", {
    email,
    password,
    username,
  });
}

// 2. login 요청
export const login = (data) => { 
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
}