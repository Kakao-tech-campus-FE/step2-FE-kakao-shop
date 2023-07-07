import { Link } from "react-router-dom";
import logoKakao from "../assets/imgs/logoKakao.png";
import cart from "../assets/imgs/cart.png";

// 메인 페이지는 아직 아토믹 디자인 적용 안했습니다. 임시로 만들었습니다!
const MainPage = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 px-10">
        <Link className="my-7 w-[90px]" to="/" replace={true}>
          <img src={logoKakao} alt="" />
        </Link>
        <div className="relative flex">
          <Link className="w-[40px] after:absolute after:left-[56px] after:top-[7px] after:h-7 after:w-[1px] after:bg-gray-300 after:content-['']">
            <img src={cart} alt="" />
          </Link>
          <Link className="ml-10 mt-[7px] text-[14px]" to="/login">
            로그인
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
