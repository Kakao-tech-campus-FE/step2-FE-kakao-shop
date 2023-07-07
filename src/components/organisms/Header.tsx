import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-subGray h-[100px] flex items-center">
      <a href="login" className="absolute right-[10px]">
        로그인
      </a>
    </div>
  );
};

export default Header;
