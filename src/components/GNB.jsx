import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmail } from '../store/slices/userSlice';
import { removeLocalStorageItem } from '../utils/localStorage';

export default function GNB() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    if (user) {
      dispatch(
        setEmail({
          user: null,
        })
      );
      removeLocalStorageItem('user');
      alert('정상적으로 로그아웃 되었습니다.');
      window.location.reload();
    }
  };

  return (
    <header className='flex justify-between items-centertext-s font-medium py-6 max-w-screen-xl m-auto'>
      <Link to='/' className='w-24'>
        <img src='assets/logoKakao.png' alt='쇼핑하기' />
      </Link>
      <nav className='flex items-center gap-4'>
        <Link to='/cart' className='w-9'>
          <img src={'assets/cart.png'} alt='장바구니' />
        </Link>
        <div className='border-r border-gray-300 h-6 mx-2'></div>
        {/* Todo: 동작되게 고쳐놓을 것 */}
        {!user && <Link to='/login'>Login</Link>}
        {user && (
          <Link to='/' onClick={handleLogout}>
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
}
