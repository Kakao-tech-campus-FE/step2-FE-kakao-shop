/**
 *  카드 컴포넌트
 *
 * @param {string} to - 링크 경로
 * @param {React.ReactNode} children - 카드에 담길 내용
 * @returns {JSX.Element} - 카드
 */

import { Link } from "react-router-dom";

const Card = ({ to, children, className = "" }) => {
  const combinedClassName = `card ${className}`;
  return (
    <Link to={to} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default Card;
