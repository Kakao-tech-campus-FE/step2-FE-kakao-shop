// <form> 요소 내에서 <button> 태그의 type 속성을 지정하지 않고 사용할 경우, 기본적으로 type="submit"으로 동작합니다.
// 이 경우, 해당 버튼이 클릭되면 폼의 submit 이벤트가 발생하고, 폼은 서버로 제출됩니다.
// 이때, 브라우저는 페이지를 새로고침하거나 이벤트의 기본 동작을 수행할 수 있습니다.

/**
 * Atom 컴포넌트
 * @param onClick - 클릭 이벤트핸들러 함수
 * @param className - tailwind 적용
 * @param children
 * @param style - 개별 스타일 적용
 * @returns button Tag
 */
export default function Button({
  onClick,
  children,
  className = "",
  style = {},
}) {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={style}
    >
      {children}
    </button>
  );
}
