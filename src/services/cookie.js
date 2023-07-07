import {Cookies} from 'react-cookie'

const cookies = new Cookies();

// 
const getExpirationTime = () => {
  const expirationTime = new Date();
  //expirationTime.setMinutes(expirationTime.getMinutes() + 1 ); // 만료 시간 1분
  expirationTime.setDate(expirationTime.getDate() + 1 ); // 만료 시간 1일
  console.log(expirationTime)
  return expirationTime;
}



// 쿠키에 사용자 정보를 저장할 수 있는 함수
// email, JWT

export const setUserCookie = ({email, token}) => {
  const expTime = getExpirationTime();
  console.log("setUserCookie", email, token)
  cookies.set("email", email, { path: '/', expires: expTime})
  cookies.set("token", token, { path: '/', expires: expTime})
}

// 쿠키에 저장된 사용자 정보를 확인할 수 있는 함수
export const getUserCookie = () => {
  return {
    email: cookies.get("email"),
    token: cookies.get("token"),
  }
}

// 저장된 쿠키를 삭제하는 함수
export const removeUserCookie = () => {
  cookies.remove("email");
  cookies.remove("token");
}
