import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MainLayout from './Layouts/mainlayout';
import ProductDetailPage from './Pages/ProductDetailPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            {/* 단독 레이아웃 */}
            <Route path='/cart' Component={CartPage} />
            <Route path='/loginpage' Component={LoginPage} />
            <Route path='/registerpage' Component={RegisterPage} />
            
            {/* 공통 레이아웃 */}
            <Route element={<MainLayout />}>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/product/:id' element={<ProductDetailPage />}></Route>
            </Route>
          </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
