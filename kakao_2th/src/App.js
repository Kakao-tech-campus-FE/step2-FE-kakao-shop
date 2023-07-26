import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* {공통 레이아웃} */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/" element={<ProductDetailPage />}></Route>
          </Route>
        </Routes>
        <Route element={<RequiredAuthLayout />}>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
