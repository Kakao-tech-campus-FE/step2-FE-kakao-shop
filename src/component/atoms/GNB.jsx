import React from "react";
import logoKakao from '../../img/logoKakao.png';
import cart from '../../img/cart.png';
import '../../pages.css/HomePage.css';
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/slices/userSlice";
import { Fragment, useEffect } from "react";
import RegisterPage from "../../pages/RegisterPage";
import instance from "../../services";
import { useState } from "react";
import { Link } from "react-router-dom";


const staticServerUrl = process.env.REACT_APP_PATH || "";


/** 상단바. 홈 화면 및 로그인 회원가입 로그아웃 버튼 존재 */
const GNB = () => {
  // use store/userSlice state
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false);
  // expiration time over then delete at store, localstorage.


  useEffect(() => {

    if (localStorage.getItem('token') !== null) setIsLogin(true);
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
  }, [user.expirationTime, isLogin]);

  //logout feature
  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    setIsLogin(false);
    alert("정상적으로 로그아웃되었습니다.");
    
  };

  return (
    <nav className="header">
      <div className="container">
        <h1 className="navigation">

          <Link to ={staticServerUrl + "/"} replace>
            <img src={logoKakao} alt="Logo" />
          </Link>

        </h1>
        <ul>
          <Link to = {staticServerUrl + "/cart"}>
            <img src={cart} alt="cart" height={30} />
          </Link>
          {isLogin && (
            
            <Fragment>
                <button onClick={handleLogout}>로그아웃</button>
              
            </Fragment>
          )}
          {!isLogin && (
            <Fragment>
              
                <Link to ={staticServerUrl + "/login"}>로그인</Link>
                
              
              
                <Link to ={staticServerUrl + "/register"}>회원가입</Link>
              
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default GNB;

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