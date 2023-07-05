import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from './Pages/mainpage'
import LoginPage from './Pages/loginpage'
import RegisterPage from './Pages/registerpage'
import PageNotFound from './Pages/pagenotfound'
import Navigation from "./Components/Molecules/navigation";


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
          </Routes>
      </BrowserRouter>  

  )
}

export default App;
