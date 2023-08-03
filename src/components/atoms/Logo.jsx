import { Link } from "react-router-dom";
import staticServerUri from "../../utils/krampoline";

/** 로고 버튼
 *
 * @param {string} to - 이동할 경로 "/"
 * @param {string} className - 로고에 적용할 스타일
 * @param {string} imgSrc - 이미지 경로
 * @param {string} imgClassName - 이미지에 적용할 스타일
 * @return {JSX.Element}
 */
const Logo = ({
  to = "/",
  className = "",
  imgSrc = "https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230705/152013/assets/images/pc/pc_logo.png",
  imgClassName = "block w-[90px] h-[20px]",
}) => {
  return (
    <Link
      onClick={() => {
        window.location.replace(`${staticServerUri}/`);
      }}
      to={staticServerUri + to}
      className={`logo ${className}`}
    >
      <img src={imgSrc} alt="카카오톡 쇼핑하기" className={imgClassName} />
    </Link>
  );
};

export default Logo;
