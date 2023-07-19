import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import "./App.css"

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element ={<MainLayout/>} >
          <Route exact path = "/" element = {<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;