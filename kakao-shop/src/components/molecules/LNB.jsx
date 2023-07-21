/**
 * local navigation bar
 * 기능 미구현 상태, 디자인만 구현
 *
 * @returns
 */
const LNB = () => {
  return (
    <div className="lnb bg-gray-100">
      <ul className="flex items-center gap-6 h-12 text-sm text-gray-500">
        <li className="ml-12">
          <span className="lnb-text text-black font-bold">홈</span>
        </li>
        <li className="">
          <span className="lnb-text">랭킹</span>
        </li>
        <li className="">
          <span className="lnb-text">실버데이</span>
        </li>
        <li className="">
          <span className="lnb-text">패션특가</span>
        </li>
        <li className="">
          <span className="lnb-text">한정혜택</span>
        </li>
        <li className="">
          <span className="lnb-text">리빙신상</span>
        </li>
        <li className="">
          <span className="lnb-text">단독/에디션</span>
        </li>
      </ul>
    </div>
  );
};

export default LNB;
