import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          {/* 공통 레이아웃 */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
