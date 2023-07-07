import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/slices/userSlice";
import { useEffect } from "react";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkExpiration = () => {
      if (user.expirationTime && user.expirationTime < new Date().getTime()) {
        dispatch(clearUser());
        localStorage.removeItem("user");
      }
    };

    const interval = setInterval(checkExpiration, 1000); // 1초마다 실행

    return () => {
      clearInterval(interval);
    };
  }, [user.expirationTime, dispatch]);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h2>홈페이지</h2>
      {user.isLoggedIn && (
        <div>
          <p>사용자 정보: {user.email}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
      {!user.isLoggedIn && (
        <div>
          <a href="./login">로그인</a>
        </div>
      )}
    </div>
  );
};

export default Home;
