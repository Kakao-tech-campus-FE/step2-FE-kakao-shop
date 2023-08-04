import { instance } from "./index"
import {logout}  from "../store/slices/userSlice";
import {Cookies} from "react-cookie"
import store from "../store";

const cookie= new Cookies();

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
      email,
      password,
      username,
    });
  };

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
      email,
      password,
    });
  };

const getExpirationTime = () => {
  const expirationTime = new Date();
  expirationTime.setDate(expirationTime.getDate() + 1 ); // 만료 시간 1일
  return expirationTime;
}

export const setCookie=({email, token})=>{
  const expTime = getExpirationTime();
  cookie.set("email", email, { path: '/', expires: expTime})
  cookie.set("token", token, { path: '/', expires: expTime})
}

export const getCookie=()=>{
  return{
    email: cookie.get("email"),
    token: cookie.get("token")
  }
}
export const removeCookie = () => {
  cookie.remove("email");
  cookie.remove("token");
}

export const logOut =()=>{
  store.dispatch(logout());
  removeCookie();
}



// // 토큰만 전달
// export const profile = ()=> {
//     return instance.get("/profile");
// } response, jwt 토큰 안에 사용자 정보가 담김
// jwt decode 리턴, expired_at ( 토큰의 유효시간 검증
//) 