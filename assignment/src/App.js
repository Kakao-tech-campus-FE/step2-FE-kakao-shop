import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/Homepage'
import NewHomePage from './pages/NewHomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetail';
import Loader from './components/atoms/Loader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          {/* 공통 레이아웃 : GNB , Footer */}
          {/* <Route path ="/" element = {<HomePage/>}></Route> */}
          {/* 레이아웃 같은건 별도의 path를 선언하지 않음(path attribute가 없다.) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<NewHomePage />}>
              {' '}
            </Route>
            <Route path="/product/:id" element={<ProductDetailPage />}>
              {' '}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Loader />
    </div>
  );
}

export default App;
