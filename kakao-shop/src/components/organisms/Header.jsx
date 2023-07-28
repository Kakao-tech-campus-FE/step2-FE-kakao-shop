import MainContainer from "../atoms/MainContainer";
import { NavLink } from "react-router-dom";

import Divider from "../atoms/Divider";
import Link from "../atoms/Link";

import { SlMenu } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { LiaTruckSolid } from "react-icons/lia";
import Photo from "../atoms/Photo";

import { logout } from "../../utils/user";
import CartBadge from "../atoms/CartBadge";
import useCartNum from "../../hooks/useCartNum";

/**
 * 헤더 컴포넌트
 *
 * @returns {JSX.Element} - 헤더 컴포넌트의 JSX 요소
 */
export default function Header() {
  const { userEmail, totalCounts } = useCartNum();

  return (
    <header>
      <MainContainer className="fixed top-0 border border-solid border-t-0 border-x-0 border-gray-100 bg-white z-50 w-screen">
        <div className="innerhead flex justify-between items-center">
          <div className="innerhead-left flex gap-4 items-center h-14 pl-10">
            <Photo
              src="/logoKakao.png"
              alt="kakao-shopping"
              className="w-28 mr-12 h-fit"
            />
            <nav className="gnb">
              <ul className="flex justify-between w-48">
                <li>
                  <NavLink
                    to="/"
                    className="border-b-2 border-solid pb-1 font-bold"
                  >
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
            <div className="divider-container h-[14px] mx-2">
              <Divider type="vertical" />
            </div>
            {/* 카테고리 동작 구현 시 Link나 button으로 변경 */}
            <div className="category-container text-blue-500 flex items-center font-bold">
              <SlMenu size="15" />
              <span className="ml-2">카테고리</span>
            </div>
          </div>
          <div className="innerhead-right w-1/5 min-w-max">
            <div className="util flex gap-4 items-center">
              <IoSearchOutline size="27" />
              <LiaTruckSolid size="25" />
              <Link to={userEmail ? "/cart" : "/login"} className="relative">
                {totalCounts > 0 && <CartBadge count={totalCounts} />}
                <BsCart2 size="20" />
              </Link>
              <div className="divider-container h-[14px] mx-0">
                <Divider type="vertical" />
              </div>
              {userEmail ? (
                <div>
                  <span className="mr-2 text-sm text-gray-500">
                    {userEmail.split("@")[0]}님
                  </span>
                  <button className="text-xs" onClick={logout}>
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </header>
  );
}
