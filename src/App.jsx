import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={staticServerUrl + "/login"}
            element={<LoginPage />}
          ></Route>
          <Route
            path={staticServerUrl + "/register"}
            element={<RegisterPage />}
          ></Route>
          {/*공통 레이아웃 : GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUrl + "/"} element={<Homepage />}></Route>
            <Route
              path={staticServerUrl + "/product/:id"}
              element={<ProductDetailPage />}
            ></Route>
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route
              path={staticServerUrl + "/cart"}
              element={<CartPage />}
            ></Route>
            <Route
              path={staticServerUrl + "/order"}
              element={<OrderPage />}
            ></Route>
            <Route
              path={staticServerUrl + "/order/complete/:id"}
              element={<OrderCompletePage />}
            ></Route>
          </Route>
          <Route
            path={staticServerUrl + "*"}
            element={<NotFoundPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
