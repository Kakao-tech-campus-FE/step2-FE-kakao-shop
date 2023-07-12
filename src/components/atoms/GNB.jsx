import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import { useState, useEffect } from "react";
import logoKakao from "../../assets/logoKakao.png";
import cart from "../../assets/cart.png";

const LOGOUT_TIMER = 30 * 60 * 1000; // 30분 후 자동 로그아웃

function GNB() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);

  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        dispatch(logout());
      }, LOGOUT_TIMER);

      setLogoutTimer(timer);
    }

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [dispatch, isLoggedIn]);

  const handleLogout = () => {
    clearTimeout(logoutTimer);
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="fixed left-0 right-0 top-0 z-1000 px-32 h-20 border-b-2 border-gray-300 bg-white">
        <div className="flex w-1280 h-79 mx-auto justify-between">
          <Link to="/">
            <img
              src={logoKakao}
              alt="카카오 쇼핑하기 로고"
              className="text-2xl w-20 h-15 mx-5 my-6 py-1.5"
            />
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/cart">
              <img
                src={cart}
                alt="장바구니 버튼"
                className="text-2xl w-10 mr-10 py-1.5"
              />
            </Link>
            {!isLoggedIn ? (
              <Link to="/login" className="">
                로그인
              </Link>
            ) : (
              <>
                <span>{email}</span>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            )}

            <Link to="/signup">회원가입</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default GNB;
