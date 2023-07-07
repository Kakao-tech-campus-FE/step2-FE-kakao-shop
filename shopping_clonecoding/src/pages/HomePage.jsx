import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/slices/userSlice";
import { Fragment, useEffect } from "react";
import "../styles/pages/Homepage.css";

const Home = () => {
  // use store/userSlice state
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // expiration time over then delete at store, localstorage.
  useEffect(() => {
    const checkExpiration = () => {
      if (user.expirationTime && user.expirationTime < new Date().getTime()) {
        dispatch(clearUser());
        localStorage.removeItem("user");
      }
    };

    const interval = setInterval(checkExpiration, 1000); // check every 1sec

    return () => {
      clearInterval(interval);
    };
  }, [user.expirationTime, dispatch]);

  //logout feature
  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
  };

  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <a href="/">홈</a>
        </h1>
        <ul>
          {user.isLoggedIn && (
            <Fragment>
              <li>
                <a>안녕하세요,{user.email} 님 </a>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            </Fragment>
          )}
          {!user.isLoggedIn && (
            <Fragment>
              <li>
                <a href="./login">로그인</a>
              </li>
              <li>
                <a href="./register">회원가입</a>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Home;
