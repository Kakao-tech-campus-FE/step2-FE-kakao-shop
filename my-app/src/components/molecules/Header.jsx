import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// children: GNB 영역에 있는 구성요소들
// onClick: 버튼의 클릭 핸들러
// text: 로그인, 로그아웃을 알려주는 버튼의 text
const Header = ({ onClick, text }) => {
  const navigate = useNavigate();
	const staticServerUrl = process.env.REACT_APP_PATH || "";
	const mainLogo = "https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230726/143041/assets/images/pc/pc_logo.png"
  return (
    <div className="py-4 border-b-2">
      <header className="header flex justify-between px-4">
        <div className="home-logo">
          <button
            className="kakao-logo-button border-0"
            onClick={() => {
              navigate(staticServerUrl + "/");
            }}
          >
            <img
              src=mainLogo
              alt="톡쇼핑하기"
              className=" w-32 border-0"
            />
          </button>
        </div>
        <div className="userInfo flex gap-6">
          <button
            className="cart-button border-0 text-gray-500"
            onClick={() => navigate(staticServerUrl + "/cart")}
          >
            <FiShoppingCart size="26" />
          </button>
          <button
            className="rounded-md border-0 text-gray-500"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            {text}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
