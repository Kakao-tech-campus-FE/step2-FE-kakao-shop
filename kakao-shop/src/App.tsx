import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';

import NotFound from '@pages/404';
import Error from '@pages/500';
import Cart from '@pages/Cart';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Order from '@pages/Order';
import Approve from '@pages/Pay/Approve';
import Cancel from '@pages/Pay/Cancel';
import PayResult from '@pages/PayResult';
import ProductDetail from '@pages/ProductDetail';
import SignUp from '@pages/SignUp';

import Footer from '@components/molecules/Footer';
import Header from '@components/molecules/Header';

function App() {
  return (
    <BrowserRouter>
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
