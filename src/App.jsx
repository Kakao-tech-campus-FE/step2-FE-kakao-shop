import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./components/layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderSuccessPage from "./pages/OrderSuccessPage.jsx";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./components/layouts/RequiredAuthLayout";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orders/complete/:id" element={<OrderSuccessPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;