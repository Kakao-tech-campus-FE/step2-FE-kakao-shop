import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/Homepage'
import NewHomePage from './pages/NewHomePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<RegisterPage />} />
          {/* 공통 레이아웃 : GNB , Footer */}
          {/* <Route path ="/" element = {<HomePage/>}></Route> */}
          <Route path='/' element={<NewHomePage />} />
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
