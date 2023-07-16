/**
 * 버튼 컴포넌트
 *
 * @param {string} children - 버튼에 담길 내용
 * @param {function} onClick - 버튼 클릭 이벤트 핸들러
 * @param {React.ReactNode} className - 버튼에 추가할 클래스 (버튼에 담기는 요소마다 다른 스타일을 적용할 수 있도록 사용)
 * @param {string} type - 버튼의 타입 (예: "submit", "button" 등)
 * @returns {JSX.Element} - 버튼
 */

const Button = ({ onClick, children }) => {
  return (
    <button
      className="my-8 w-full rounded bg-yellow-300 px-4 py-3 font-semibold hover:bg-yellow-400"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
