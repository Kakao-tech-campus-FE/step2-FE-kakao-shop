import React from 'react';
import KaKaoShopLogo from '../atoms/KaKaoShopLogo';
import LoginLink from '../atoms/LoginLink';

const GNB = () => {
  return (
    <div className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200'>
      <div className='m-auto flex max-w-[1280px] items-center justify-between py-4'>
        <KaKaoShopLogo />
        <LoginLink />
      </div>
    </div>
  );
};

export default GNB;
