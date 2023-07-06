import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";
function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/login" element = {<LoginPage/>}></Route>
          <Route path ="/signup" element = {<RegisterPage/>}></Route>
          <Route path ="/" element = {<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;

// import Sub from './subPage';
// import Main from "./assignmentTest";
// {/* 과제 1을 위한 코드 */} 
//         {/* <BrowserRouter><Routes><Route path="/" element={<Main/>}/><Route path="/subPage" element={<Sub/>}/></Routes></BrowserRouter> */} 