import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import "./App.css";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path={staticServerUrl + "/login"} element={<LoginPage />}></Route>
          <Route path={staticServerUrl + "/signup"} element={<RegisterPage />}></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUrl + "/"} element={<HomePage />} />
            <Route path={staticServerUrl + "/product/:id"} element={<ProductDetailPage />} />
          </Route>
          {/* 사용자가 로그인됐을 때만 접근 가능한 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUrl + "/cart"} element={CartPage}></Route>
            <Route path={staticServerUrl + "/order"} element={OrderPage}></Route>
            <Route
              path={staticServerUrl + "/orders/complete/:id"}
              element={OrderCompletePage}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
