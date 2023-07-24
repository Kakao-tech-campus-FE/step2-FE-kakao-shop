import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Mainpage from "./pages/Mainpage/Mainpage";
import Subpage from "./pages/Subpage/Subpage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path="/main" element={<Mainpage />}></Route>
        <Route path="/sub" element={<Subpage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/404" element={<NotFoundPage />}></Route>
        {/* 공통 레이아웃(path 선언X): GNB, Footer */}
        <Route element={<MainLayout />}>
          <Route path="/carts" element={<CartPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          {/* 동적매개변수 */}
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ⭐️ 동적매개변수란?
// - React Router에서 경로에 변수를 포함시키는 방법
// - useParams 훅을 사용하여 동적 매개변수 값을 추출할 수 있다
