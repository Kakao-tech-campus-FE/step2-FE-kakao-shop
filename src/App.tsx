import "@styles/default.css";
import Detail from "@pages/Detail";
import Login from "@pages/Login";
import Main from "@pages/Main";
import Order from "@pages/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "@pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
