import { useState, useEffect } from "react";
import Title from "../atoms/Title"; // eslint-disable-line no-unused-vars
import { Link, useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { setEmail, logOut } from "../../store/slices/userSlice"; 
import Button from "../atoms/Button"; // eslint-disable-line no-unused-vars
import GNB from "../atoms/GNB";

const HomeForm = () => {
  const navigate = useNavigate(); // eslint-disable-line no-unused-vars
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLogined);

  // 새로고침할 때 로그인 유지
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
        dispatch(setEmail({ email }));
      }
    }, [dispatch]); // eslint-disable-line no-unused-vars
  
    // 일정 시간 이후 자동으로 로그아웃
    const logoutTimeSecond = 60 * 60; // 1시간
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
  }, [count]);// eslint-disable-line no-unused-vars

  return <GNB />;
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
};

export default HomeForm;