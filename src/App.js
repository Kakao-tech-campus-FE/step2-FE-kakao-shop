import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      {/*단독 레이아웃 */}
      <Routes>
        <Route path="/login" element={<LoginPage />}> </Route>
        <Route path="/signup" element={<RegisterPage />}> </Route>
        <Route path="/" element={<MainPage />}> </Route>
        {/*공통 레이아웃*/}
        {/* <Route path="/" element={<HomePage />}> </Route> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
