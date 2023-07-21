import React, { useState, useEffect } from "react";
import Title from "../atoms/Title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, logOut } from "../../store/slices/userSlice";
import Button from "../atoms/Button";
import GNB from "../atoms/GNB";

const HomeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLogined);

  // 이부분이 새로고침해도 로그인 유지 하는 부분
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, email]);

  // 이부분이 일정 시간 지나면 자동으로 로그아웃 되는 부분
  const logoutTimeSecond = 60 * 60; // 1시간 뒤 자동 로그아웃
  const [count, setCount] = useState(logoutTimeSecond);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(id);
      if (loggedIn === true) {
        dispatch(logOut());
      }
    }
    return () => clearInterval(id);
  }, [count]);

  return <GNB />;
};

export default HomeForm;

// return (
//   <div>
//     <Link to="/">
//       <Title>Home page</Title>
//     </Link>
//     {loggedIn ? (
//       <Button
//         onClick={() => {
//           dispatch(logOut());
//           navigate("/");
//         }}
//       >
//         로그아웃
//       </Button>
//     ) : (
//       <ul>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/signup">Sign up</Link>
//         </li>
//       </ul>
//     )}
//   </div>
// );
