// import "../../styles/molecules/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Photo from "../atoms/Photo"; // eslint-disable-line no-unused-vars

const Header = ({ onClick, text }) => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header flex justify-between px-4">
        <div className="home-logo">
          <button
            className="kakao-logo-button border-0"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230726/143041/assets/images/pc/pc_logo.png"
              alt="톡쇼핑하기"
              className=" w-32 border-0"
            />
          </button>
        </div>
        <div className="userInfo flex gap-6">
          <button
            className="cart-button border-0 text-gray-500"
            onClick={() => navigate("/cart")}
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