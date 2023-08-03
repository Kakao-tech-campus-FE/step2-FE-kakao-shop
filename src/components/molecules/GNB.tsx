import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import KaKaoShopLogo from '../atoms/KaKaoShopLogo';
import LoginLink from '../atoms/LoginLink';
import { selectEmail, selectExpirationDate, logout } from '../../store/slices/userSlices';
import Button from '../atoms/Button';
import Container from '../atoms/Container';
import { staticUrl } from '../../utils/convert';

const GNB = () => {
  const currentEmail = useSelector(selectEmail);
  const expirationDate = useSelector(selectExpirationDate);
  const dispatch = useDispatch();

  const handleChartLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!localStorage.getItem('token')) {
      e.preventDefault();
      alert('로그인이 필요합니다.');
    }
  };

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!expirationDate) return;
    const today = new Date();
    if (today > new Date(expirationDate)) {
      handleLogoutButtonClick();
    }
  }, []);

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 h-14 border-b border-gray-200 bg-white'>
      <Container className='flex items-center justify-between py-4'>
        <KaKaoShopLogo />
        <div className='flex items-center space-x-6'>
          <Link to={staticUrl('cart')} onClick={handleChartLinkClick}>
            <HiOutlineShoppingCart size={25} />
          </Link>
          {currentEmail ? <Button onClick={handleLogoutButtonClick}>로그아웃</Button> : <LoginLink />}
        </div>
      </Container>
    </nav>
  );
};

export default GNB;
