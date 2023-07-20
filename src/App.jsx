import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./components/layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return(
    <>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
    </>
  );
};

export default App;