import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
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
import GlobalLoader from './components/atoms/globalLoader';
import ErrorBoundary from './components/layouts/errorBoundary';
import AuthLayout from './components/layouts/authLayout';
import { staticServerUri } from './utils/serverUri';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter basename={staticServerUri}>
          <ErrorBoundary>
            <Suspense fallback={<GlobalLoader />}>
              <Routes>
                {/* 단독 레이아웃 */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* 공통 레이아웃 */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/product/:productId" element={<ProductDetailPage />} />

                  {/* 로그인 필요 */}
                  <Route element={<AuthLayout />}>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/confirmOrder/:orderId" element={<ConfirmOrderPage />} />
                  </Route>
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
