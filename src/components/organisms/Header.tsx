import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <div className="fixed w-screen bg-subGray h-header flex items-center">
      {!isLoggedIn && (
        <Link to="/login" className="absolute right-[10px]">
          로그인
        </Link>
      )}
    </div>
  );
};

export default Header;
