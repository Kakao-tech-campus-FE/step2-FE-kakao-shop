import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import store from "./store";
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}


export default App;