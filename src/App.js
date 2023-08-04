import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

function App(){

  

  return (
  <div className="App">
    <BrowserRouter>
    <Routes>
      {/*단독레이이아웃*/}
      <Route path={ "/login"} element={<LoginPage/>}></Route>
      <Route path="/signup" element={<RegisterPage/>}></Route>
      {/*공통레이아웃:GNB, footer*/}
      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/product/:id" element={<ProductDetailPage/>}></Route>
    </Route>
    <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;