import Container from "../atoms/Container";
import Button from "../atoms/Button";
import {logout} from "../../actions/authActions"
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());                     // 상태 초기화
    localStorage.removeItem('isLoggedIn');  // 로그인 유지 삭제
    localStorage.removeItem('userInfo');    // 로그인 유지 삭제
  }
  return (
    <Container className="flex flex-col h-48 justify-center">
      <Button
        className="m-2 p-1 pr-6 pl-6 bg-slate-300 hover:bg-slate-400 rounded-md"
        onClick={handleLogoutClick}>로그아웃</Button>
    </Container>
  );
}

export default LogoutButton;