import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ErrorPage from "./ErrorPage";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import RequiredAuthLayout from "../layouts/RequiredAuthLayout";
import OrderPage from "./OrderPage";
import OrderCompletePage from "./OrderCompletePage";

/** 레이아웃 라우트
 *
 * @return {JSX.Element}
 */
const LayoutRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
        <Route element={<RequiredAuthLayout />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders/complete/:id" element={<OrderCompletePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LayoutRoute;
