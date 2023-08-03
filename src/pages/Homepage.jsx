import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import '../styles/pages/Homepage.css';

const staticServerUrl = process.env.REACT_APP_PATH || '';
function HomePage() {
  const getUserToken = () => {
    const tokenString = localStorage.getItem('user');
    const tokenObject = JSON.parse(tokenString);
    return tokenObject?.expiration > Date.now() ? tokenString : null;
  };

  const [token, setToken] = useState(getUserToken());

  const handleLogout = () => {
    localStorage.removeItem('user');
    setToken(null);
    window.location.reload();
  };

  useEffect(() => {
    const tokenObject = JSON.parse(localStorage.getItem('user'));
    const expiration = tokenObject?.expiration;
    if (expiration && expiration <= Date.now()) {
      handleLogout();
    }
  }, []);

  const renderAuthButton = () => {
    if (token) {
      return <button onClick={handleLogout}>로그아웃</button>;
    }
    return (
      <>
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
      </>
    );
  };

  return (
    <div className="link-container">
      <div className="logo-wrapper">
        <Link to="/">
          <img
            src={`${staticServerUrl}/logoKaKao.png`}
            alt="로고"
            className="logo"
          />
        </Link>
      </div>
      <div className="link-wrapper">{renderAuthButton()}</div>
    </div>
  );
}

export default HomePage;
