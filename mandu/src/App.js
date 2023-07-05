import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path='/*' element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>

            {/*<LoginPage  />*/}

        </div>
    );
}

export default App;
