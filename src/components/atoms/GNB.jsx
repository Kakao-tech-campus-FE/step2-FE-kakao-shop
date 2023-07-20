import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/atoms/GNB.css";

const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail({ email: null, loggedInAt: null }));
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        {/* 로고 버튼 */}
        <Link to="/">
          <div className="content">
            <img
              src="/logoKakao.png"
              alt="logoKakao.png"
              style={{ width: "90px" }}
            />
          </div>
        </Link>

        <nav>
          <div className="navigation">
            {/* 장바구니 버튼 */}
            <span>
              <Link to="/cart">
                <img src="/cart.png" alt="cart.png" style={{ width: "28px" }} />
              </Link>
            </span>
            {/* 로그인 버튼 */}
            {email ? (
              <Link to="/login" onClick={handleLogout}>
                로그아웃
              </Link>
            ) : (
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                로그인
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GNB;
