import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Label from './components/atoms/Label';
import Title from './components/atoms/Title';
import MainPage from './pages/MainPage'; // Import MainPage component
import { useSelector, useDispatch } from 'react-redux';
import { setEmailandPassword } from './store/slices/userSlice';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      dispatch(setEmailandPassword({ email: storedEmail, password: storedPassword }));
    }
  }, [dispatch]);

  const handleLogin = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    dispatch(setEmailandPassword({ email, password }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Title>Kakao Store</Title>
        <Label className="p-2 m-2 flex justify-center items-center text-3xl">
          <div className="flex justify-center">
            <Link to="/" className="mr-4">Main</Link>
            {isLoggedIn ? null : <Link to="/login" className="mr-4">Login</Link>}
            <Link to='/signup'>Sign up!</Link>
          </div>
        </Label>

        {isLoggedIn ? (
          <MainPage /> // Render MainPage component if logged in
        ) : null}

        <Routes>
          <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
          <Route path='/signup' element={<RegisterPage />} />
        </Routes>
        <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage />} />
        </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
