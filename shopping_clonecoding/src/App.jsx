import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";
import { setUser, clearUser } from "./store/slices/userSlice";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  // 새로고침 시 사용자 정보 유지
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const currentTime = new Date().getTime();
      const expirationTime = user.expirationTime;

      if (currentTime < expirationTime) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} isLoggedIn={isLoggedIn} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
