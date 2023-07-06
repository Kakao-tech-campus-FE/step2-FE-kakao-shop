import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage"


function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>    
          <Route path="/signup" element={<RegisterPage/>}></Route> 
          {/* 공통 레이아웃 */}
          <Route path="/" element={<HomePage/>}></Route>   
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;


