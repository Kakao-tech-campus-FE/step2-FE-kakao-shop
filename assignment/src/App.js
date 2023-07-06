// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sub from './subPage';
// import Main from "./assignmentTest";

import './App.css';
import RegisterPage from './pages/RegisterPage';
function App() {
    return (
    <>
    {/* 과제 1을 위한 코드 */} 
        {/* <BrowserRouter><Routes><Route path="/" element={<Main/>}/><Route path="/subPage" element={<Sub/>}/></Routes></BrowserRouter> */} 
        <RegisterPage />;
    </>
    );
}

export default App;