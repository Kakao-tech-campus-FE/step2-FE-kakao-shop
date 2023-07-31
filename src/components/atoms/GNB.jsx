import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import { useAutoLogout } from "../../components/autoLogout";
import { useEffect } from "react";
import logo from "../../imgs/logoKakao.png";
import cart from "../../imgs/cart.png";
import "./GNB.css";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const username = useSelector((state) => state.user.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    // localStorage.removeItem("access_token");
    alert("정상적으로 로그아웃 되었습니다.");

    navigate("/");
    // 새로고침
    window.location.reload();
  };

  useEffect(() => {
    // 이후 필요한 작업 수행
  }, []);

  useAutoLogout();

  return (
    <header className="header bg-white px-4 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="contents flex items-center justify-between">
        <Link to="/">
          <img className="logo h-8" src={logo} alt="카카오 쇼핑 로고" />
        </Link>
        <nav className="navigation flex items-center text-base  text-gray-700">
          <Link to="/carts" className="mr-4">
            <img src={cart} alt="장바구니 버튼" className="h-8" />
          </Link>
          <span>ㅣ</span>
          {email ? (
            <div className="flex items-center">
              <span className="mr-2">{username}</span>
              <button className="ml-2" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-black mr-2">
                로그인
              </Link>
              <Link to="/signup" className="text-black">
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default GNB;
