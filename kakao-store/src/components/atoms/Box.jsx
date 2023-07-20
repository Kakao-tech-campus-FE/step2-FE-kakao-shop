/**
 * 작은 단위를 묶어주는 박스
 *
 * @param {React.ReactNode} children - 박스에 담길 내용
 * @param {string} className - 박스에 추가할 클래스 (박스에 담기는 요소마다 다른 스타일을 적용할 수 있도록 사용)
 * @returns {JSX.Element} - 박스
 */

const Box = ({ children, className = "" }) => {
  return (
    <div className={`box mb-4 rounded-md  bg-white p-1 ${className}`}>
      {children}
    </div>
  );
};

export default Box;
