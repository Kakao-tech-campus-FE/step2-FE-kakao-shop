import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/samples/Nav";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ComponentsPage from "./pages/ComponentsPage";
import Main from "./pages/Main";

import './styles/App.css';

// CSS 기본 속성 초기화 필요

function App() {
    return (
    <>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/ComponentsPage" element={<ComponentsPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;