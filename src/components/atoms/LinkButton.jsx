import { useNavigate } from "react-router-dom";
import staticServerUri from "../../utils/krampoline";

/** 라우터 네비게이트 버튼
 *
 * @param {function} onClick - 버튼 클릭 시 실행할 함수
 * @param {React.ReactNode} children - 버튼에 쓰일 내용
 * @param {string} to - 버튼을 눌렀을 때 이동할 경로
 * @param {string} className - 버튼에 적용할 스타일
 * @return {JSX.Element}
 */
const LinkButton = ({ onClick, children, to, className = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
        navigate(staticServerUri + to);
      }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default LinkButton;
