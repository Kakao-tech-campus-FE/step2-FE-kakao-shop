import {Cookies} from 'react-cookie'

const cookies = new Cookies();

// 쿠키에 사용자 정보를 저장할 수 있는 함수
// email, JWT
const expiration1Minute = new Date();
expiration1Minute.setTime(expiration1Minute.getTime() + 60 * 1000);

export const setUserCookie = ({email, token}) => {
  console.log("setUserCookie", email, token)
  cookies.set("email", email, { path: '/', expires: expiration1Minute})
  cookies.set("token", token, { path: '/', expires: expiration1Minute})
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
