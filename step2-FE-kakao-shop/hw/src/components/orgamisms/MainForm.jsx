import React, { useEffect } from "react";
import Title from "../atoms/Title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setEmail, logOut } from "../../store/slices/userSlice";
import Button from "../atoms/Button";

const MainForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, loggedIn]);

  return (
    <div>
      <Link to="/">
        <Title>Main page</Title>
      </Link>
      {loggedIn ? (
        <Button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          로그아웃
        </Button>
      ) : (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainForm;
