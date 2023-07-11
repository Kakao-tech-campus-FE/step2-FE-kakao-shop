import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "pages/Test.js";
import LogIn from "pages/LogIn.js";
import SignUp from "pages/SignUp.js";
import Products from "pages/Products.js";
import Product from "pages/Product.js";
import Cart from "pages/Cart.js";
import Order from "pages/Order.js";
import Result from "pages/Result.js";
import NotFound from "pages/NotFound.js";

import "App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/result/:orderId" element={<Result />} />
          <Route path="/test" element={<Test />} />
          {/* 잘못된 경로 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
