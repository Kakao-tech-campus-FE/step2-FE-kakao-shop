import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import * as paths from "./constants/urls";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={paths.LOGIN_PATH} element={<LoginPage />} />
          <Route path={paths.SIGNUP_PATH} element={<RegisterPage />} />
          <Route element={<MainLayout />}>
            <Route path={paths.HOME_PATH} element={<HomePage />} />
            <Route
              path={paths.PRODUCT_DETAIL_PATH}
              element={<ProductDetailPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
