import React from 'react';
import { Link } from 'react-router-dom';

export default function GNB() {
  return (
    <header>
      <Link to='/'>
        {/* 이미지 상대경로 모르겠음... */}
        <img src={'/logoKakao.png'} alt='쇼핑하기' height={30} />
      </Link>
      <nav>
        <Link to='/products'>홈</Link>
        <Link to='/carts'>
          <img src={'/cart.png'} alt='장바구니' height={30} />
        </Link>
        {/* TODO: 로그인-아웃 상태 토글 필요 */}
        <Link to='/login'>로그인</Link>
      </nav>
    </header>
  );
}
