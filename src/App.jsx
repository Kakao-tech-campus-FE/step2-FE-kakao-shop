import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return(
    <Routes>
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;