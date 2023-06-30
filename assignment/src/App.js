import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sub from './subPage';
import Main from "./assignmentTest";

import './App.css';

function App() {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/subPage" element={<Sub/>}/>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;