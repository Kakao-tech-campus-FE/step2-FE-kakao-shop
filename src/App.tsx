import Detail from "@pages/Detail";
import Main from "@pages/Main";
import Order from "@pages/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
