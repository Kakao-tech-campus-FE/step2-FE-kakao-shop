import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess, logout } from "../../redux/authRedux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const GNB = () => {

  const dispatch = useDispatch();
  
  // 새로고침해도 로그인 지속
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('userInfo'));
      if(!storedUser) return;
      else if(storedUser.expirationTime > Date.now()) {
        dispatch(loginSuccess(storedUser));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log("Parse error", error);
    }
    
  },[dispatch]);

  const navigate = useNavigate();
  const handleLogoutClick = () => {
    dispatch(logout());                     // 상태 초기화
    navigate(staticServerUrl + '/');
    localStorage.removeItem('userInfo');    // 로그인 유지 삭제
  }

  const isLoggedIn = useSelector((state) => state.auth.userInfo);

  const handleCartClick = () => {
    if(!isLoggedIn) {
      navigate(staticServerUrl + '/login');
    }
    else {
      navigate(staticServerUrl + '/cart');
    }
  }

  // 삼항 연산자로 로그인 상태일 때는 로그아웃만 보이도록
  return (
    <div className="h-16">
      <div className="h-px border border-t-grey border-solid"/>
        <div className="flex justify-between my-4 items-center h-8">
          <Link to={staticServerUrl + '/'}><img className="w-28 ml-4" src="/assets/logoKakao.png" alt="logoKakao"/></Link>
          <div className="flex items-center">
            <button><img className="w-8" src="/assets/cart.png" alt="cart" onClick={handleCartClick}/></button>
            <span className="px-4">|</span>
              {!!isLoggedIn ?
              <button className="text-sm" onClick={handleLogoutClick}>로그아웃</button> :
              <Link className="text-sm mr-4" to={staticServerUrl + '/login'}>로그인</Link>
              }
          </div>
        </div>
      <div className="h-px border border-grey border-solid"/>
    </div>
  )
}
export default GNB;