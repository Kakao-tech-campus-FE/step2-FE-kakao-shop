import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";
import SearchPage from "./pages/SearchPage";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={staticServerUri + "/error"} element={<ErrorPage />} />
          {/* 공통 레이아웃 : GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUri + "/login"} element={<LoginPage />} />
            <Route
              path={staticServerUri + "/signup"}
              element={<RegisterPage />}
            />
            <Route path={staticServerUri + "/"} element={<HomePage />} />
            <Route
              path={staticServerUri + "/product/:id"}
              element={<ProductDetailPage />}
            />
            <Route
              path={staticServerUri + "/search"}
              element={<SearchPage />}
            />
          </Route>
          {/* 사용자가 로그인됐을 때만 접근 가능한 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUri + "/cart"} element={<CartPage />} />
            <Route path={staticServerUri + "/order"} element={<OrderPage />} />
            <Route
              path={staticServerUri + "/orders/complete/:id"}
              element={<OrderCompletePage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
