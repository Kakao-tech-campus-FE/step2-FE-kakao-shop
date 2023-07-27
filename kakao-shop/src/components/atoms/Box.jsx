/**
 * 작은 단위를 묶어주는 박스
 * 배경이 하얀색이며 테두리가 있는 박스
 *
 * @param {React.ReactNode} children - 박스에 담길 내용
 * @param {string} className - 박스에 추가할 클래스 (박스에 담기는 요소마다 다른 스타일을 적용할 수 있도록 사용)
 * @returns {JSX.Element} - 박스 컴포넌트의 JSX 요소
 */
const Box = ({ children, className = "" }) => {
  return (
    <div
      className={`box border border-solid border-gray-200 my-4 p-4 bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
