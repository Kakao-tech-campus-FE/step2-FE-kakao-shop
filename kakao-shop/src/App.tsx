import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';

import Approve from '@pages/Pay/Approve';
import Cancel from '@pages/Pay/Cancel';

import Footer from '@components/molecules/Footer';
import Header from '@components/molecules/Header';
import PageLoader from '@components/molecules/PageLoader';

const Home = lazy(() => import('@pages/Home'));
const ProductDetail = lazy(() => import('@pages/ProductDetail'));
const Cart = lazy(() => import('@pages/Cart'));
const Order = lazy(() => import('@pages/Order'));
const PayResult = lazy(() => import('@pages/PayResult'));
const SignUp = lazy(() => import('@pages/SignUp'));
const Login = lazy(() => import('@pages/Login'));
const Error = lazy(() => import('@pages/500'));
const NotFound = lazy(() => import('@pages/404'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/detail/:id'} element={<ProductDetail />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/order'} element={<Order />} />
            <Route path={'/payResult'} element={<PayResult />} />
          </Route>
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/500'} element={<Error />} />
          <Route path={'/*'} element={<NotFound />} />
          <Route path={'/pay/cancel'} element={<Cancel />} />
          <Route path={'/pay/Approve'} element={<Approve />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
