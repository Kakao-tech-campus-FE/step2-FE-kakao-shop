import Button from "../Components/Atoms/button"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Molecules/navbar";
import LoginPage from './loginpage'
import RegisterPage from './registerpage'
import PageNotFound from './pagenotfound'
import Navigation from "../Components/Molecules/navigation";

const MainPage = ( ) => {

  return (
    <div className="text-center p-3 mt-12 font-semibold text-yellow-600">
      메인 페이지에요...
    </div>    
  )

}

export default MainPage;