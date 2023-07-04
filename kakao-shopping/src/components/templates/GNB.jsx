import LogoutButton from "../molecules/LogoutButton";
import LoginForm from "../organisms/LoginForm";
import Container from "../atoms/Container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "../../actions/authActions";
const GNB = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if(storedIsLoggedIn) {
      dispatch(loginSuccess()); //로그인 성공
    }
  },[dispatch]);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return (
    <Container>
      {isLoggedIn ?
    <LogoutButton /> :
    <LoginForm />
      }
    {localStorage.getItem('userInfo') || 'No user information available'}
    </Container>
  )
}
export default GNB;