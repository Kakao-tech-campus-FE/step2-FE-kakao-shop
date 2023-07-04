import Divider from "../atoms/Divider";
import Link from "../atoms/Link";

export default function InnerHead() {
  return (
    <div className="flex gap-4 items-center h-14 font-bold mx-12">
      <img src="/logoKakao.png" alt="kakao-shopping" className="w-32 mr-12" />
      <nav className="gnb w-48">
        <ul className="flex justify-between">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/">한정혜택</Link>
          </li>
          <li>
            <Link to="/">선물함</Link>
          </li>
        </ul>
      </nav>
      <div className="text-blue-500 ml-10 flex">
        <Divider type="vertical" />
        <span className="ml-10">카테고리</span>
      </div>
      <div className="util flex ml-96">
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}
