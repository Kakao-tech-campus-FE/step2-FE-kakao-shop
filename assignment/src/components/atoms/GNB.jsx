import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../../styles/atoms/GNB.css';
import { useSelector, useDispatch } from 'react-redux';

function GNB() {
  const email = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setEmail(null));
    alert('정상적인 로그아웃');
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img src="logoKaKao.png" alt="logoKakao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              <Link to="/cart">
                <img src="cart.png" alt="cart.png" height={30} />
              </Link>
            </span>
            <span> | </span>
            <span>
              {email ? (
                <Link
                  to="/login"
                  onClick={handleLogout}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {' '}
                  로그아웃{' '}
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {' '}
                  로그인{' '}
                </Link>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
