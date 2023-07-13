import Container from "../atoms/Container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess, logout } from "../../redux/redux";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const GNB = () => {

  const dispatch = useDispatch();
  
  // 새로고침해도 로그인 지속
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if(storedUser.expirationTime > Date.now()) {
      dispatch(loginSuccess(storedUser));
    } else {
      dispatch(logout());
    }
  },[dispatch]);

  const handleLogoutClick = () => {
    dispatch(logout());                     // 상태 초기화
    localStorage.removeItem('userInfo');    // 로그인 유지 삭제
  }

  const isLoggedIn = useSelector((state) => state.auth.userInfo);

  // 삼항 연산자로 로그인 상태일 때는 로그아웃만 보이도록
  return (
    <Container className="h-12">
      <div className="h-px mt-1 border border-t-grey border-solid"/>
        <Container className="flex justify-between my-4 items-center h-8">
          <Link to='/'><img className="w-28 ml-4" src="/assets/logoKakao.png" alt="logoKakao"/></Link>
          <div className="flex items-center">
            <Link to='/'><img className="w-8" src="/assets/cart.png" alt="cart"/></Link>
            <span className="px-4">|</span>
              {isLoggedIn ?
            <Button className="text-sm" onClick={handleLogoutClick}>로그아웃</Button> :
              <Link className="text-sm mr-4" to='/login'>로그인</Link>
              }
          </div>
        </Container>
      <div className="h-px border border-grey border-solid"/>
    </Container>
  )
}
export default GNB;