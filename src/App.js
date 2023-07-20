import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/atoms/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true); // 페이지 이동 시작 시 로딩 상태를 설정
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false); // 페이지 이동 완료 시 로딩 상태를 해제
    };

    // 페이지 이동 이벤트 리스너 등록
    window.addEventListener("beforeunload", handleRouteChangeStart);
    window.addEventListener("load", handleRouteChangeComplete);

    return () => {
      // 페이지 이동 이벤트 리스너 해제
      window.removeEventListener("beforeunload", handleRouteChangeStart);
      window.removeEventListener("load", handleRouteChangeComplete);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoading && <Loading />}
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/*  공통 레이아웃 : GNB, footer */}
          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
