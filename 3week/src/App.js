import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import OrderPage from "./pages/OrderPage"
import MainLayout from "./layouts/MainLayout"
import ProductDetailPage from "./pages/ProductDetailPage"
import RequiredAuthLayout from "./layouts/RequiredAuthLayout"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Route>
          {/* 사용자가 로그인됐을 때만 접근 가능한 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" element={CartPage}></Route>
            <Route path="/order" element={OrderPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
