import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <header className='flex flex-col items-center'>
      <Link to='/' className='justify-center mt-10 w-36'>
        <img src='assets/logoKakaoText.png' alt='쇼핑하기' />
      </Link>
    </header>
  );
}
