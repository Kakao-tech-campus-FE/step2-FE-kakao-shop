import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import * as paths from "./constants/urls";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={paths.LOGIN_PATH} element={<LoginPage />} />
          <Route path={paths.SIGNUP_PATH} element={<RegisterPage />} />
          <Route path={paths.ERROR_PATH} element={<ErrorPage />}></Route>
          <Route element={<MainLayout />}>
            <Route path={paths.HOME_PATH} element={<HomePage />} />
            <Route
              path={paths.PRODUCT_DETAIL_PATH}
              element={<ProductDetailPage />}
            />
            <Route path={paths.CART_PATH} element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
