import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../styles/atoms/GNB.css';
import { useSelector, useDispatch } from 'react-redux';

function GNB() {
  const getUserToken = () => {
    const tokenString = localStorage.getItem('user');
    const tokenObject = JSON.parse(tokenString);
    return tokenObject?.expiration > Date.now() ? tokenString : null;
  };
  const [token, setToken] = useState(getUserToken());

  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

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
        <span> | </span>
        <Link to="/login">로그인</Link>
      </>
    );
  };
  return (
    <header className="header">
      <div className="left-content">
        <Link to="/">
          <img src="logoKaKao.png" alt="logoKakao.png" height={30} />
        </Link>
      </div>
      <nav>
        <div className="right-content">
          <div className="navigation">
            <span>
              <Link to="/cart">
                <img src="cart.png" alt="cart.png" height={30} />
              </Link>
            </span>
            <span> | </span>
            <span>{renderAuthButton()}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default GNB;
