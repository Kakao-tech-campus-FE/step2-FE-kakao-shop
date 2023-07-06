import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Label from './components/atoms/Label';

function App() {
  return (
  <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}

        <Label>카카오스토어</Label>
        <Link to='/'>메인</Link>
        <Link to='/login'>로그인</Link>
        <Link to='/signup'>회원가입</Link>

        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<RegisterPage />} > </Route>
          {/* 공통 레이아웃 */}
          {/* <Route path='/main' element={<MainPage />} /></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;