import InnerHead from "../molecules/InnerHead";

/**
 * 헤더 컴포넌트
 * InnerHead와 LNB 컴포넌트를 포함 (LNB 컴포넌트는 미구현)
 *
 * @returns {JSX.Element} - 헤더 컴포넌트의 JSX 요소
 */
export default function Header() {
  return (
    <header>
      <InnerHead />
    </header>
  );
}
