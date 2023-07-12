import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KaKaoShopLogo from '../atoms/KaKaoShopLogo';
import LoginLink from '../atoms/LoginLink';
import { selectEmail, selectExpirationDate, setEmail, setExpirationDate } from '../../store/slices/userSlices';
import Button from '../atoms/Button';
import Container from '../atoms/Container';

const GNB = () => {
  const currentEmail = useSelector(selectEmail);
  const expirationDate = useSelector(selectExpirationDate);
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    dispatch(setEmail({ email: null }));
    dispatch(setExpirationDate({ expirationDate: null }));
  };

  useEffect(() => {
    if (!expirationDate) return;
    const today = new Date();
    if (today > new Date(expirationDate)) {
      handleLogoutButtonClick();
    }
  }, []);

  return (
    <div className='fixed left-0 right-0 top-0 z-50 h-14 border-b border-gray-200 bg-white'>
      <Container className='flex items-center justify-between py-4'>
        <KaKaoShopLogo />
        <div>{currentEmail ? <Button onClick={handleLogoutButtonClick}>로그아웃</Button> : <LoginLink />}</div>
      </Container>
    </div>
  );
};

export default GNB;
