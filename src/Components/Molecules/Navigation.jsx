import { Link, useNavigate } from "react-router-dom";
import { setEmail } from "../../Store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsTruck, BsSearch, BsList } from "react-icons/bs";

const Navigation = () => {
  const staticServerUri = process.env.REACT_APP_PATH || "";

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // 로그아웃 시 토큰을 삭제함
    localStorage.removeItem("email");

    dispatch(setEmail(null));
    // 이메일 상태도 null로 바꾸기
    alert("정상적으로 로그아웃 되었습니다.");
  };

  return (
    <>
      <header className="flex items-center justify-between">
        {/* 로고 -> 메인 페이지 */}
        <div className="flex">
          <div className="my-6 ml-24 mr-10">
            <Link to="/">
              <picture height={15}>
                <img src={staticServerUri + "/logoKakao.png"} alt="logoKakao.png" width={100} />
              </picture>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="font-bold">홈</div>
            <div>브랜드데이</div>
            <div>베스트</div>
            <div>라이브</div>
            <div className="border-r pr-4">기획전</div>
            <div className="flex items-center font-bold text-blue-500">
              <BsList />
              카테고리
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-5 mr-24">
          <BsSearch className="h-[25px] w-[25px]" />
          <BsTruck className="h-[28px] w-[28px]" />
          {/* 장바구니 */}
          <Link
            to="/cart"
            className="content-center border-r-2 pr-4 border-stone-100"
            onClick={
              token === null
                ? (e) => {
                    e.preventDefault();
                    alert("로그인이 필요합니다");
                    navigate("/loginpage");
                    return;
                  }
                : null
            }
          >
            <picture height={30}>
              <img src={staticServerUri + "/cart.png"} alt="cart.png" width={35} />
            </picture>
          </Link>

          {/* 로그인 */}
          {token ? (
            <>
              <p className="pl-3">
                <b>{email}님</b>
              </p>
              <Link
                to="/loginpage"
                onClick={handleLogout}
                className="text-center text-xs p-1 rounded bg-stone-50 border-[1.5px]"
              >
                로그아웃
              </Link>
            </>
          ) : (
            <Link to="/loginpage" className="text-center text-sm my-2">
              로그인
            </Link>
          )}
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navigation;
