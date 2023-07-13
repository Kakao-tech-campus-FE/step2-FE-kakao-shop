import React, { useState } from "react";
import Header from "../components/molecules/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../store/slices/userSlice";

const Home = () => {
  const isLogined = useSelector((state) => state.user.isLogined);
  const [text, setText] = useState(() => {
    if (isLogined) {
      return "로그아웃";
    } else {
      return "로그인";
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (isLogined) => {
    console.log(isLogined);
    if (isLogined === "로그인") {
      setText("로그아웃");
      dispatch(
        setUserInfo({
          isLogined: false,
        })
      );
      // navigate("/login");
    } else {
      setText("로그인");
      navigate("/login");
    }
  };

  return (
    <div>
      <Header
        onClick={() => {
          handleLogin(isLogined);
        }}
        text={text}
      >
        Global Navigation Bar 영역
      </Header>
      <h3 style={{ textAlign: "center" }}>현재 페이지는 Home Page입니다.</h3>
    </div>
  );
};

export default Home;
