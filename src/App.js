import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.login} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
