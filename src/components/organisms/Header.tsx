import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import { loginStore } from '@store/slices/userSlice';
import FilledButton from '@components/atoms/button/FilledButton';
import { BsCart } from 'react-icons/bs';
import TextButton from '@components/atoms/button/TextButton';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem('token');
    dispatch(loginStore({ isLoggedIn: false, email: null }));
  };

  return (
    <div className="absolute w-screen bg-white ">
      <div className="flex justify-end items-center space-x-5 h-header mx-[100px]">
        <BsCart
          onClick={() => {
            navigate('/cart');
          }}
        />
        {!isLoggedIn ? (
          <Link to="/login">
            <FilledButton>로그인</FilledButton>
          </Link>
        ) : (
          <TextButton onClick={handleLogout}>로그아웃</TextButton>
        )}
      </div>
    </div>
  );
};

export default Header;
