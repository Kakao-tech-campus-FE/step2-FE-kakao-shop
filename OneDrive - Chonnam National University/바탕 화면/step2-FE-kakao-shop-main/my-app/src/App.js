import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* 단득 레이아웃: loginpage, registerpage */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element= {<RegisterPage />}></Route>

        {/* 공통 레이아웃: GNB, Footer */}
        <Route path="/" element= {<HomePage />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
