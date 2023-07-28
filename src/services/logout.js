import { removeUserCookie } from "./cookie";
import store from "../store";
import {logout}  from "../store/slices/userSlice";

// 로그아웃을 수행하는 함수 정의
const logOut = () => {
  // 리덕스 스토어 초기화
          // console.log(store.getState())
          // console.log(logout())
          // // useDispatch는 컴포넌트 또는 커스텀 훅 내부에서만 이용할 수 있다.
          // dispatch(logout());
  store.dispatch(logout());
  // 쿠키 초기화
  removeUserCookie();
  // 메인 페이지로 이동
  window.location.href = "/";
}
export default logOut;