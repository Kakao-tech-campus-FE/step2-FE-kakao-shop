import React from 'react';
import { useSelector } from 'react-redux';
import KaKaoShopLogo from '../atoms/KaKaoShopLogo';
import LoginLink from '../atoms/LoginLink';
import { selectEmail } from '../../store/slices/userSlices';

const GNB = () => {
  const currentEmail = useSelector(selectEmail);

  return (
    <div className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200'>
      <div className='m-auto flex max-w-[1280px] items-center justify-between py-4'>
        <KaKaoShopLogo />
        {!currentEmail && <LoginLink />}
      </div>
    </div>
  );
};

export default GNB;
