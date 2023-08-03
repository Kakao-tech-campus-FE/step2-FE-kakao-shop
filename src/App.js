import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setEmail, setLogInTime } from "store/slices/userSlice.js";
import { expireTime } from "utils/constants.js";

import LogIn from "pages/LogIn.js";
import SignUp from "pages/SignUp.js";
import Layout from "components/templates/Layout.js";
import CheckAuth from "components/templates/CheckAuth.js";
import Products from "pages/Products.js";
import Product from "pages/Product.js";
import Cart from "pages/Cart.js";
import Order from "pages/Order.js";
import Result from "pages/Result.js";
import NotFound from "pages/NotFound.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  const dispatch = useDispatch();
  const logInTime = useSelector((state) => state.user.logInTime);

  useEffect(() => {
    if (!logInTime) return;
    const timeoutId = setTimeout(() => {
      dispatch(setEmail({ email: null }));
      dispatch(setLogInTime({ logInTime: null }));
      window.localStorage.removeItem("token");
      alert("로그인이 만료되었습니다.");
      window.location.href = staticServerUri + "/";
    }, expireTime - (new Date().getTime() - logInTime));
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="relative text-center">
      <BrowserRouter>
        <Routes>
          <Route path={staticServerUri + "/login"} element={<LogIn />} />
          <Route path={staticServerUri + "/signup"} element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path={staticServerUri + "/"} element={<Products />} />
            <Route path={staticServerUri + "/product/:productId"} element={<Product />} />
            <Route element={<CheckAuth />}>
              <Route path={staticServerUri + "/cart"} element={<Cart />} />
              <Route path={staticServerUri + "/order"} element={<Order />} />
              <Route path={staticServerUri + "/result/:orderId"} element={<Result />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
