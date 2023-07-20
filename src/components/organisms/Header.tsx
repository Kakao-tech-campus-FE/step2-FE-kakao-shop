import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import { loginStore } from '@store/slices/userSlice';
import FilledButton from '@components/atoms/button/FilledButton';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    // localStorage.removeItem('token');
    dispatch(loginStore({ isLoggedIn: false, email: null }));
  };

  return (
    <div className="absolute w-screen bg-white ">
      <div className=" h-header flex items-center mx-[100px] float-right">
        {!isLoggedIn ? (
          <Link to="/login">
            <FilledButton>로그인</FilledButton>
          </Link>
        ) : (
          <button type="button" onClick={handleLogout} className="absolute right-[10px]">
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
