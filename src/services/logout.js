import { useDispatch } from "react-redux";
import { removeUserCookie } from "./cookie";

// 로그아웃을 수행하는 함수 정의
const logOut = () => {
  // 리덕스 스토어 초기화
  const dispatch = useDispatch();
  dispatch({
    email: null,
    token: null,
  });
  // 쿠키 초기화
  removeUserCookie();
}
export default logOut;