import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-[170px] font-bold">404</p>
      <p className="mb-2 text-[27px] font-semibold">
        찾으시는 페이지가 없습니다.
      </p>
      <p className="text-xs text-gray-500 md:text-sm">
        잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다.
      </p>
      <p className="text-xs text-gray-500 md:text-sm">
        검색하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <Link
        to="/"
        replace={true}
        className="mt-5 rounded-3xl bg-gray-200 px-10 py-3"
      >
        홈으로
      </Link>
    </div>
  );
};

export default NotFound;
