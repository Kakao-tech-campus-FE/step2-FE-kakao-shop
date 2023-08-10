import { Link, useNavigate } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { setEmail, logOut } from "../../store/slices/userSlice";

function GNB() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.user.isLogined);
  const email = localStorage.getItem("email");

  // 이부분이 새로고침해도 로그인 유지 하는 부분
  useEffect(() => {
    if (email) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, email]);

  const handleLogout = () => {
    dispatch(logOut());
    alert("정상적으로 로그아웃되었습니다.");
  };

  // 이부분이 일정 시간 지나면 자동으로 로그아웃 되는 부분
  const logoutTimeSecond = 60 * 60; // 1시간 뒤 자동 로그아웃
  const [count, setCount] = useState(logoutTimeSecond);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(id);
      if (isLogined === true) {
        dispatch(logOut());
      }
    }
    return () => clearInterval(id);
  }, [count]);

  return (
    <header className="header">
      <div className="flex justify-between p-4">
        <Link to="/">
          <img
            className="logoKakao"
            src={"/logoKakao.png"}
            alt="logoKakao.png"
            height={30}
          />
        </Link>
        <nav>
          <div className="">
            <span className="">
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img
                  className="cart"
                  src={"/cart.png"}
                  alt="cart.png"
                  height={30}
                />
              </Link>
            </span>
            <span className="bar">|</span>
            <span className="login">
              {/* 로그인 버튼 */}
              {isLogined ? (
                <Link
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그아웃{" "}
                </Link>
              ) : (
                <Link
                  to="/login"
                  // onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그인{" "}
                </Link>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
