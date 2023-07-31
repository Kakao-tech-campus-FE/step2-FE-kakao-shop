import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css"
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        {/* 공통 레이아웃 */}
        <Route element ={<MainLayout/>} >
          <Route exact path = "/" element = {<HomePage />}></Route>
          <Route exact path = "/product/:id" element = {<ProductDetailPage />}></Route>
        </Route>
        {/* 사용자가 로그인 되었을 때만 접근 가능한 레이아웃 */}
        <Route element = {<RequiredAuthLayout />}>
          <Route exact path = "/cart" element = {<CartPage />}></Route>
          <Route exact path = "/order" element = {<OrderPage />}></Route>
          <Route exact path = "/order/complete/:id" element = {<OrderCompletePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;