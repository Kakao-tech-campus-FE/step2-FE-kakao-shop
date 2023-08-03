import { instance } from "./index"

// 회원가입이라는 버튼이 눌리면 
// data라는 payload 안에 엉뚱한 값이 들어가는 것을 방지하기 위해 명확히 지정해줌 
export const register = (data) => {
  const {email, password, username } = data;
  return instance.post('/join', {
    email,
    password,
    username
  })
}

// 로그인 버튼이 눌리면 동작
export const login = async (data) =>{
  const {email, password} = data
  return instance.post('/login',{
    email,
    password
  })
  .then((res)=>{
    const token = res.headers.authorization;
    localStorage.setItem('token', token);
  })
}

export const check = (data) =>{
  const {email} = data
  return instance.post('/check',{
    email
  })
}