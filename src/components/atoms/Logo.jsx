import { Link } from "react-router-dom";

const Logo = ({ to = "/", className = "" }) => {
  return (
    <Link to={to} className={`logo ${className}`}>
      <img
        src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230705/152013/assets/images/pc/pc_logo.png"
        alt="카카오톡 쇼핑하기"
        className="block w-[90px] h-[20px]"
      />
    </Link>
  );
};

export default Logo;
