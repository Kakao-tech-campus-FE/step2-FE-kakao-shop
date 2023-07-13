import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/pages/Homepage.css';

const HomePage = () => {
  const tokenString = localStorage.getItem('user');
  const tokenObject = JSON.parse(tokenString);
  const expiration = tokenObject?.expiration;

  const [token, setToken] = useState(expiration > Date.now() ? tokenString : null);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setToken(null);
    window.location.reload();
  };

  useEffect(() => {
    if (expiration && expiration <= Date.now()) {
      localStorage.removeItem('user');
      setToken(null);
    }
  }, [expiration]);

  const renderAuthButton = () => {
    if (token) {
      return (
        <button onClick={handleLogout}>로그아웃</button>
      );
    } else {
      return (
        <>
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </>
      );
    }
  };

  return (
    <div className="link-container">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={'logoKaKao.png'} alt="로고" className="logo" />
        </Link>
      </div>
      <div className="link-wrapper">
        {renderAuthButton()}
      </div>
    </div>
  );
};

export default HomePage;
