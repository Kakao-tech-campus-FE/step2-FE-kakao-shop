import { BsList } from "react-icons/bs";

/**
 * GNBMenuList 특정 카테고리로 이동할 수 있는 링크를 제공
 * 현재는 링크로의 이동 기능은 구현하지 않은 상태
 */
const GNBMenuList = () => {
  return (
    <ul className="flex min-w-fit">
      <li className="font-semibold px-3 pt-8 pb-5 hover:border-b-4 hover:border-neutral-700">
        홈
      </li>
      <li className="px-3 pt-8 pb-5 hover:border-b-4 hover:border-neutral-700 hover:font-semibold">
        브랜드데이
      </li>
      <li className="px-3 pt-8 pb-5 hover:border-b-4 hover:border-neutral-700 hover:font-semibold">
        베스트
      </li>
      <li className="px-3 pt-8 pb-5 hover:border-b-4 hover:border-neutral-700 hover:font-semibold">
        라이브
      </li>
      <li className="px-3 pt-8 pb-5 hover:border-b-4 hover:border-neutral-700 hover:font-semibold">
        기획전
      </li>
      <span className=" w-px h-4 bg-neutral-300 mx-3 mt-9 mb-auto" />
      <li className="flex items-center px-3 pt-7 pb-5 font-semibold text-blue-500">
        <BsList className="text-lg mx-1" />
        {" 카테고리"}
      </li>
    </ul>
  );
};
export default GNBMenuList;
