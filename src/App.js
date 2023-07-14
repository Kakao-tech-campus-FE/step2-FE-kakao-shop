import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";
const HOME_PATH = "/";
const PRODUCT_DETAIL_PATH = "/product/:id";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_PATH} element={<LoginPage />} />
          <Route path={SIGNUP_PATH} element={<RegisterPage />} />
          <Route element={<MainLayout />}>
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
