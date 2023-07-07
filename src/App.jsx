import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import routes from './routes';
import Home from './pages/Home'
import Week1 from "./pages/Week1";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter><Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.week1} element={<Week1 />} />
        <Route path={routes.logIn} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes></BrowserRouter>



    </>
  );
}

export default App;
