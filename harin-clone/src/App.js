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
        <Navigation />
        <hr />
        <main>
          <Routes>          
              <Route exact path='/mainpage' Component={MainPage} />
              <Route Component={PageNotFound} />
              <Route path='/loginpage' Component={LoginPage} />
              <Route path='/registerpage' Component={RegisterPage} />
          </Routes>
        </main>
      </BrowserRouter>  

  )
}

export default App;
