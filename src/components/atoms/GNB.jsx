import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice";

const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail({ email: null, loggedInAt: null }));
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    // p-6
    <header className="fixed z-50 bg-white border-gray-200 border-solid border-b-2 m-auto left-0 right-0 p-3">
      <div className=" max-w-screen-xl">
        <nav className="flex justify-between">
          <div className="p-3">
            <Link to="/">
              <img
                className="w-24"
                src="/logoKakao.png"
                alt="카카오톡 쇼핑하기"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="p-3">
              <Link to="/cart">
                <img className="w-9" src="/cart.png" alt="장바구니" />
              </Link>
            </div>
            <div className="p-3">
              {email ? (
                <Link className="text-sm" to="/login" onClick={handleLogout}>
                  로그아웃
                </Link>
              ) : (
                <Link className="text-sm" to="/login">
                  로그인
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GNB;
