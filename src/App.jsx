import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {/*공통 레이아웃 : GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route
              path="/order/complete/:id"
              element={<CompletePage />}
            ></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
