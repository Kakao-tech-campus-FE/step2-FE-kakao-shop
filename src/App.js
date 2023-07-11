import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/layouts/MainLayout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;