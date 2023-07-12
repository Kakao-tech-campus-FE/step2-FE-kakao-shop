import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import routes from './routes';
import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { GlobalStyle } from "./css/globalStyles";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path={routes.logIn} element={<Login />} />
          <Route path={routes.signUp} element={<SignUp />} />
          {/*단독 레이아웃*/}

          <Route element></Route>
          <Route path={routes.home} element={<Home />} />


        </Routes></BrowserRouter>



    </>
  );
}

export default App;
