import LogoutButton from "../molecules/LogoutButton";
import LoginForm from "../organisms/LoginForm";
import Container from "../atoms/Container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "../../actions/authActions";
const GNB = () => {

  const dispatch = useDispatch();
  
  // 새로고침해도 로그인 지속
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('userInfo');
    if(storedIsLoggedIn) {
      dispatch(loginSuccess(storedUser));
    }
  },[dispatch]);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  // 삼항 연산자로 로그인 상태일 때는 로그아웃만 보이도록
  return (
    <Container className="flex flex-col items-center h-46">
      {localStorage.getItem('userInfo') || '사용자 정보가 없습니다'}
        {isLoggedIn ?
      <LogoutButton /> :
      <LoginForm />
        }
    </Container>
  )
}
export default GNB;