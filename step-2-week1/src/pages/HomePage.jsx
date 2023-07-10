import React from "react";
import logoKakao from '../img/logoKakao.png';
import '../pages.css/HomePage.css';
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/slices/userSlice";
import { Fragment, useEffect } from "react";
import RegisterPage from "./RegisterPage";
import instance from "../services/api";

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
          <a href="/">
          <img src={logoKakao} alt="Logo"/>
          </a>
        </h1>
        <ul>
          {user.isLoggedIn && (
            <Fragment>
                <button onClick={handleLogout}>로그아웃</button>
              
            </Fragment>
          )}
          {!user.isLoggedIn && (
            <Fragment>
              
                <a href="./login">로그인</a>
              
              
                <a href="./register">회원가입</a>
              
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Home;

// function HomePage() {
//   return (
//     <nav>
//       <ul className="navigation-bar">
//         <a href="/">
//           <img src={logoKakao} alt="Logo"/>
//         </a>
//         <a href="/login">로그인</a>
//         <a href="/signup">회원가입</a>
//       </ul>
//     </nav>
//   );
// }

// // const HomePage =()=> {
// //   return 

// //   <div>메인페이지</div>
// //   NavigationBar

// // }


// export default HomePage;


// // export default HomePage