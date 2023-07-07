import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KaKaoShopLogo from '../atoms/KaKaoShopLogo';
import LoginLink from '../atoms/LoginLink';
import { selectEmail, setEmail } from '../../store/slices/userSlices';
import Button from '../atoms/Button';

const GNB = () => {
  const currentEmail = useSelector(selectEmail);
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    dispatch(setEmail({ email: null }));
  };

  return (
    <div className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200'>
      <div className='m-auto flex max-w-[1280px] items-center justify-between py-4'>
        <KaKaoShopLogo />
        <div>{currentEmail ? <Button onClick={handleLogoutButtonClick}>로그아웃</Button> : <LoginLink />}</div>
      </div>
    </div>
  );
};

export default GNB;
