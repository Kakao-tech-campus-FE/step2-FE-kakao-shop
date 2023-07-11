import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return(
    <div>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>

    </div>
  );
};

export default App;