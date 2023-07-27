import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* {단독 레이아웃} */}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>

          {/* {공통 레이아웃}: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route
              path="/orders/complete/:id"
              element={<OrderCompletePage />}
            ></Route>
          </Route>
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
