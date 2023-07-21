import { NavLink } from 'react-router-dom';

import Divider from '../atoms/Divider';
import Link from '../atoms/Link';

import { SlMenu } from 'react-icons/sl';
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import Photo from '../atoms/Photo';

import { logout } from '../../utils/user';
import { getCookie } from '../../storage/Cookie';
import { useEffect, useState } from 'react';

import { getCart } from '../../apis/cart';
import { useQuery } from '@tanstack/react-query';
import CartBadge from '../atoms/CartBadge';

/**
 * 선물하기 헤더의 내부 헤더 컴포넌트
 * 로고, GNB, 카테고리, 유틸 영역을 보여줌
 *
 * @returns {JSX.Element} - InnerHead 컴포넌트의 JSX 요소
 */
export default function InnerHead() {
  const [count, setCount] = useState(0);

  const userEmail = getCookie('email');

  // 장바구니 아이콘에 담긴 아이템 수량 표시
  const { data } = useQuery(['cartNum'], getCart, { enabled: !!userEmail });

  useEffect(() => {
    let totalQuantity = 0;
    if (data?.data?.response?.products) {
      data.data.response.products.forEach((item) => {
        item.carts.forEach((cart) => {
          // 존재하는 옵션 개수를 센다(실제 수량이 아님)
          cart.quantity > 0 && (totalQuantity += 1);
        });
      });
      setCount(totalQuantity);
    }
  }, [data]);

  return (
    <div className="innerhead flex justify-between items-center min-w-[740px]">
      <div className="innerhead-left flex gap-4 items-center h-14 mx-12">
        <Photo src="/logoKakao.png" alt="kakao-shopping" className="w-28 mr-12 h-fit" />
        <nav className="gnb">
          <ul className="flex justify-between w-48">
            <li>
              <NavLink to="/" className="border-b-2 border-solid pb-1 font-bold">
                홈
              </NavLink>
            </li>
            <li>
              <Link to="/">브랜드데이</Link>
            </li>
            <li>
              <Link to="/">베스트</Link>
            </li>
          </ul>
        </nav>
        <div className="divider-container h-[14px] mx-4">
          <Divider type="vertical" />
        </div>
        {/* 카테고리 동작 구현 시 Link나 button으로 변경 */}
        <div className="category-container text-blue-500 flex items-center font-bold">
          <SlMenu size="15" />
          <span className="ml-2">카테고리</span>
        </div>
      </div>
      <div className="innerhead-right mr-12">
        <div className="util flex gap-4">
          <IoSearchOutline size="20" />
          <Link to="/cart" className="relative">
            {count > 0 && <CartBadge count={count} />}
            <BsCart2 size="20" />
          </Link>
          {userEmail ? (
            <div>
              <span className="mr-2 text-sm text-gray-500">{userEmail}님</span>
              <button className="" onClick={logout}>
                로그아웃
              </button>
            </div>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </div>
      </div>
    </div>
  );
}
