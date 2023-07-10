import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import {Provider} from "react-redux";
import store from "./store/index";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}


export default App;