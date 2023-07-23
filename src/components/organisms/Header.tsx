import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import { loginStore } from '@store/slices/userSlice';
import FilledButton from '@components/atoms/button/FilledButton';
import { BsCart, BsPerson, BsBoxArrowInLeft } from 'react-icons/bs';
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
    <div className="absolute w-screen bg-white shadow-convexWhite">
      <div className="flex justify-end items-center space-x-10 h-header mx-[100px] text-pointPupple">
        <BsCart
          size="25"
          onClick={() => {
            navigate('/cart');
          }}
        />
        {!isLoggedIn ? (
          <BsPerson
            size="25"
            onClick={() => {
              navigate('/login');
            }}
          />
        ) : (
          <BsBoxArrowInLeft size="25" onClick={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default Header;
