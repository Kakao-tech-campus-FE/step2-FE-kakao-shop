import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, loginTime } from "../../store/slices/userSlice";

const Navigation = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  
  const timeout = useCallback(() => {
    const time = 10 * 1000; // test를 위해 10초로 설정해두었습니다.
    const currentTime = new Date().getTime();
    const lastTime = localStorage.getItem("loginTime");
    if(lastTime && currentTime - parseInt(lastTime) >= time) {
      dispatch(logout());
    }
  }, [dispatch]); 
  
  useEffect(() => {
    dispatch(loginTime());
    const Timer = setInterval(() => {
      timeout();
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, [dispatch, timeout]);

  const logoutReq = () => {
    dispatch(logout());
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logoutReq}>로그아웃</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;