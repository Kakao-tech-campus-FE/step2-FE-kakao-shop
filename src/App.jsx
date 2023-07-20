import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

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
            <Route path="/cart" element={<CartPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
