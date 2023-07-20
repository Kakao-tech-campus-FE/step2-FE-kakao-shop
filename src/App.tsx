import "@styles/default.css";
import Detail from "@pages/Detail";
import Login from "@pages/Login";
import Main from "@pages/Main";
import Order from "@pages/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "@pages/Register";
import Layout from "@pages/Layout";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
