import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import MainPage from './components/pages/mainPage';
import RegisterPage from './components/pages/registerPage';
import LoginPage from './components/pages/loginPage';
import { store } from './store';
import MainLayout from './components/layouts/mainLayout';
import ProductDetailPage from './components/pages/productDetailPage';
import CartPage from './components/pages/cartPage';
import { queryClient } from './utils/query';
import OrderPage from './components/pages/orderPage';
import ConfirmOrderPage from './components/pages/confirmOrderPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* 단독 레이아웃 */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* 공통 레이아웃 */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/confirmOrder/:orderId" element={<ConfirmOrderPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
