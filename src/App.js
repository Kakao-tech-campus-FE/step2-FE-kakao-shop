import "./App.css";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/atoms/Loader";
import { useState, useEffect } from "react";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductCanNotFound from "./pages/ProductCanNotFound";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import { useNavigate } from "react-router-dom";
import GetOrderPage from "./pages/GetOrderPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = localStorage.getItem("access_token");

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
          <Route path="/404" element={<ProductCanNotFound />}></Route>

          {/*  공통 레이아웃 : GNB, footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          </Route>
          {/* 사용자 인증 되었을 때만 접근 가능  */}
          <Route element={<RequiredAuthLayout />}>
            <Route path="/carts" element={<CartPage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route path="/orders/:id" element={<GetOrderPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
