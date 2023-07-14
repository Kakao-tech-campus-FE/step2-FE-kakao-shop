import React from 'react';
import { Link } from 'react-router-dom';

export default function GNB() {
  return (
    <header>
      <Link to='/'>
        <img src={'/logoKakao.png'} alt='쇼핑하기' height={30} />
      </Link>
      <nav>
        <Link to='/'>홈</Link>
        <Link to='/carts'>
          <img src={'/cart.png'} alt='장바구니' height={30} />
        </Link>
        <Link to='/login'>로그인</Link>
      </nav>
    </header>
  );
}
