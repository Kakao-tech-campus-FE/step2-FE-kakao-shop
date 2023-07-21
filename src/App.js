import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import "./App.css"
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        {/*<Route path="/Register" element={<RegisterPage />}></Route>*/}
        <Route element ={<MainLayout/>} >
          <Route exact path = "/" element = {<HomePage />}></Route>
          <Route exact path = "/product/:id" element = {<ProductDetailPage />}></Route>
          <Route exact path = "/order" element = {<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;