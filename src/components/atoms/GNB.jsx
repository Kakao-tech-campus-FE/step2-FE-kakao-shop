import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../styles/atoms/GNB.css';
import { useSelector, useDispatch } from 'react-redux';

const staticServerUrl = process.env.REACT_APP_PATH || '';
function GNB() {
  const navigate = useNavigate();
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
    navigate(staticServerUrl + '/');
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
        <Link to={staticServerUrl + '/signup'}>회원가입</Link>
        <span> | </span>
        <Link to={staticServerUrl + '/login'}>로그인</Link>
      </>
    );
  };
  return (
    <header className="header">
      <div className="left-content">
        <Link to={staticServerUrl + '/'}>
          <img src={`${staticServerUrl}/logoKakao.png`} alt="logoKakao.png" />
        </Link>
      </div>
      <nav>
        <div className="right-content">
          <div className="navigation">
            <span>
              <Link to={staticServerUrl + '/cart'}>
                <img src={`${staticServerUrl}/cart.png`} alt="cart.png" />
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
