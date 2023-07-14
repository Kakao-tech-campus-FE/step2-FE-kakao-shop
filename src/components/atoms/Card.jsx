import { Link } from "react-router-dom";

/** 카드
 *
 * @param {React.ReactNode} children - 카드에 쓰일 내용
 * @param {string} to - 카드 클릭 시 이동할 경로
 * @param {string} className - 카드에 적용할 스타일
 * @return {JSX.Element}
 */
const Card = ({ children, to, className = "" }) => {
  return (
    <Link className={`card ${className}`} to={to}>
      {children}
    </Link>
  );
};

export default Card;
