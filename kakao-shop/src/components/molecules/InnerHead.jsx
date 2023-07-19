import { NavLink } from 'react-router-dom';

import Divider from '../atoms/Divider';
import Link from '../atoms/Link';

import { SlMenu } from 'react-icons/sl';
import { IoSearchOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import Photo from '../atoms/Photo';

import { logout } from '../../utils/user';
import { getCookie } from '../../storage/Cookie';

/**
 * 선물하기 헤더의 내부 헤더 컴포넌트
 * 로고, GNB, 카테고리, 유틸 영역을 보여줌
 *
 * @returns {JSX.Element} - InnerHead 컴포넌트의 JSX 요소
 */
export default function InnerHead() {
  const userEmail = getCookie('email');
  return (
    <div className="innerhead flex justify-between items-center min-w-[740px]">
      <div className="innerhead-left flex gap-4 items-center h-14 font-bold mx-12">
        <Photo src="/logoGift.jpg" alt="kakao-shopping" className="w-20 mr-12 h-fit" />
        <nav className="gnb">
          <ul className="flex justify-between w-48">
            <li>
              <NavLink to="/" className="border-b-2 border-solid pb-1">
                홈
              </NavLink>
            </li>
            <li>
              <Link to="/">한정혜택</Link>
            </li>
            <li>
              <Link to="/">선물함</Link>
            </li>
          </ul>
        </nav>
        <div className="divider-container h-[14px] mx-4">
          <Divider type="vertical" />
        </div>
        {/* 카테고리 동작 구현 시 Link나 button으로 변경 */}
        <div className="category-container text-blue-500 flex items-center">
          <SlMenu size="20" />
          <span className="ml-2">카테고리</span>
        </div>
      </div>
      <div className="innerhead-right mr-12">
        <div className="util flex gap-4">
          <IoSearchOutline size="20" />
          <Link to="/cart">
            <GoGift size="20" />
          </Link>
          {userEmail ? (
            <div>
              <span className="mr-2 text-sm text-gray-500">{userEmail}님</span>
              <button className="" onClick={async () => logout()}>
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
