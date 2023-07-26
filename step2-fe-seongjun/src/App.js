import {BrowserRouter, Routes, Route}from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<RegisterPage/>}></Route>
          <Route path='/error' element={<ErrorPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout/>}>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/product/:id' element = {<ProductDetailPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
