import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isTokenExpiration } from "./store/slices/userSlice";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import GNB from "./components/atoms/GNB";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from './components/atoms/Footer';

import './styles/App.css';

// CSS 기본 속성 초기화 필요

function App() {
    // 최상단에서 토큰 관련 로그인을 관리할 수 있게 App에서 import 하여 사용
    useEffect(() => {
        if (localStorage.getItem("token")) {
            isTokenExpiration();
        }
    },[])
    
    return (
        <BrowserRouter>
            <GNB/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/product/:id" element={<ProductDetailPage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                <Route path="order" element={<OrderPage/>}/>
                <Route path="orders/complete/:id" element={<OrderCompletePage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;