import { Link } from "react-router-dom";

/** 로고 버튼
 *
 * @param {string} to - 이동할 경로 "/"
 * @param {string} className - 로고에 적용할 스타일
 * @return {JSX.Element}
 */
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
