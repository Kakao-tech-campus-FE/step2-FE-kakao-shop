import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage";
import HomePage from "../src/pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* 공콩 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
