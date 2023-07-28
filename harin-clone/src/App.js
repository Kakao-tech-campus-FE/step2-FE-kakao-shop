import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MainLayout from "./Layouts/MainLayout";
import ProductDetailPage from "./Pages/ProductDetailPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartPage from "./Pages/CartPage";
import PageNotFuond from "./Pages/PageNotFound";
import OrderPage from "./Pages/OrderPage";
import RequiredAuthLayout from "./Layouts/RequiredAuthLayout";
import OrderCompletePage from "./Pages/OrderCompletePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path="/loginpage" Component={LoginPage} />
        <Route path="/registerpage" Component={RegisterPage} />
        <Route path="/pagenotfound" element={<PageNotFuond />} />

        {/* 공통 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          {/* 사용자가 로그인 되었을 때만 접근할 수 있는 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" Component={CartPage} />
            <Route path="/order" Component={OrderPage} />
            <Route path="/order/complete/:id" Component={OrderCompletePage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
