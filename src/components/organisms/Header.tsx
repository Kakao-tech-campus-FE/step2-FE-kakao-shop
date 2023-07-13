import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import { loginStore } from '@store/slices/userSlice';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(loginStore({ isLoggedIn: false, email: null }));
  };

  return (
    <div className="fixed w-screen bg-subGray h-header flex items-center">
      {!isLoggedIn ? (
        <Link to="/login" className="absolute right-[10px]">
          로그인
        </Link>
      ) : (
        <button type="button" onClick={handleLogout} className="absolute right-[10px]">
          로그아웃
        </button>
      )}
    </div>
  );
};

export default Header;
