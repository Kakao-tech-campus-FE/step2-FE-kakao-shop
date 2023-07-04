import Container from "../atoms/Container";
import Button from "../atoms/Button";
import {logout} from "../../actions/authActions"
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button
        onClick={() => {
          dispatch(logout());
          localStorage.removeItem('isLoggedIn');
        }}>로그아웃</Button>
    </Container>
  );
}

export default LogoutButton;