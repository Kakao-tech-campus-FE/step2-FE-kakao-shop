/**
 * Atom 컴포넌트
 * @param children
 * @param className - tailwind 적용
 * @returns div Tag
 */
export default function Container({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
