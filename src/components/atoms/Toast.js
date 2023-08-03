import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function Toast() {
  return (
    <div className="z-10 fixed bottom-12 left-[50%] translate-x-[-50%] w-[48rem] px-8 py-5 rounded bg-stone-800 flex justify-between">
      <span className="text-sm text-white">장바구니에 상품이 담겼습니다.</span>
      <Link className="text-sm text-yellow-300" to={staticServerUri + "/cart"}>
        바로가기
      </Link>
    </div>
  );
}
