import { Link } from "react-router-dom";

/**
 * 링크 기능이 있는 카드 컴포넌트
 * @param {string} className className
 * @param {string} to 링크할 주소
 * @param {ReactNode} children 자식 노드
 * @returns
 */
export default function Card({ className = "", to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
