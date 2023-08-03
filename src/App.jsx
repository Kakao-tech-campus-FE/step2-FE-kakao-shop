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

const staticServerUri = process.env.REACT_APP_PATH || "";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path=staticServerUri + "/signup" element={<RegisterPage />} />
          <Route path=staticServerUri + "/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path=staticServerUri + "/" element={<MainPage />} />
            <Route path=staticServerUri + "/products/:id" element={<ProductDetailPage />} />
            <Route path=staticServerUri + "/*" element={<NotFoundPage />} />
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path=staticServerUri + "/cart" element={<CartPage />} />
            <Route path=staticServerUri + "/order" element={<OrderPage />} />
            <Route path=staticServerUri + "/orders/complete/:id" element={<OrderSuccessPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;