import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isTokenExpiration } from "./store/slices/userSlice";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import GNB from "./components/atoms/GNB";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ComponentsPage from "./pages/ComponentsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import Nav from "./components/organisms/Nav";

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
    <>
        <BrowserRouter>
            <GNB/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/ComponentsPage" element={<ComponentsPage/>}/>
                <Route path="/product/:id" element={<ProductDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;