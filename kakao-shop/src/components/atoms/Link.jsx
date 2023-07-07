import { Link as RouterLink } from "react-router-dom";

/**
 * 라우터 링크 컴포넌트
 * react-router-dom의 Link 컴포넌트를 사용
 *
 * @param {string} to - 이동할 경로
 * @param {React.ReactNode} children - 링크에 들어갈 내용
 * @param {string} className - 추가할 클래스 이름
 * @returns {JSX.Element} - 라우터 링크 컴포넌트의 JSX 요소
 */
export default function Link({ to, children, className = "" }) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}
