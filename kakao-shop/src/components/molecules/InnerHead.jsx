import Divider from "../atoms/Divider";
import Link from "../atoms/Link";

import { SlMenu } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function InnerHead() {
  return (
    <div className="flex justify-between items-center min-w-[740px]">
      <div className="flex gap-4 items-center h-14 font-bold mx-12">
        <img src="/logoGift.png" alt="kakao-shopping" className="w-20 mr-12" />
        <nav className="gnb">
          <ul className="flex justify-between w-48">
            <li>
              <NavLink exact to="/" className="border-b-2 border-solid pb-1">
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
        <div className="h-[14px] mx-4">
          <Divider type="vertical" />
        </div>
        <div className="text-blue-500 flex items-center">
          <SlMenu size="20" />
          <span className="ml-2">카테고리</span>
        </div>
      </div>
      <div className="mr-12 w-32">
        <div className="util flex gap-4">
          <IoSearchOutline size="20" />
          <GoGift size="20" />
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
