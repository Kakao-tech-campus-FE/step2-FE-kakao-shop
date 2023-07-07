import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/mainpage';
import LoginPage from './Pages/loginpage';
import RegisterPage from './Pages/registerpage';
import PageNotFound from './Pages/pagenotfound';
import Navigation from "./Components/Molecules/navigation";
import Week1 from './Pages/Week1';
import { Navigate } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
          <Routes>   
            <Route exact path='/' Component={Navigation}>
              <Route path='/:mainpage' Component={MainPage} />
              <Route Component={PageNotFound} />
            </Route>
              <Route path='/loginpage' Component={LoginPage} />
              <Route path='/registerpage' Component={RegisterPage} />
              <Route path='/week1' Component={Week1} />
              <Route path="/loginpage" element={<Navigate replace to="/mainpage" />} />
          </Routes>
      </BrowserRouter>  

  );
};

export default App;
