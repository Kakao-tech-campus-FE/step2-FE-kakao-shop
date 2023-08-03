import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "../components/atoms/Footer";
import { setUserInfo } from "../store/slices/userSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa6";

const RequiredAuthLayout = () => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const isLogined = useSelector((state) => state.user.isLogined);
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLogined === true) {
      dispatch(
        setUserInfo({
          isLogined: false,
        })
      );
      navigate(staticServerUrl + "/login");
    } else {
      setText(<FaRegUser size="26" />);
      navigate(staticServerUrl + "/login");
    }
  };

  useEffect(() => {
    isLogined ? setText(<FaRegUser size="26" />) : setText("로그인");
  }, [isLogined]);

  useEffect(() => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate(staticServerUrl + "/login");
    }
  }, [navigate]);
  return (
    <>
      <Header
        onClick={() => {
          handleLogin();
        }}
        text={text}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default RequiredAuthLayout;
