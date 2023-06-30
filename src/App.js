import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ComponentsTest from "./pages/ComponentsTest";
import Main from "./pages/Main";
// import Breadcrumb from "./components/Breadcrumb";

import './styles/App.css';

function App() {
    return (
    <>
        <BrowserRouter>
            <Nav/>
            {/* <Breadcrumb/> 추후 헤더 파트로 따로 분리 - 현재는 임시로 컴포넌트 테스팅에 포함! */}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/ComponentsTest" element={<ComponentsTest/>}/>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
