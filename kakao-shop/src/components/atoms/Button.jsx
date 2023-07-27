/**
 * 배경색이 존재하는 버튼 컴포넌트
 *
 * @param {string} type - 버튼 타입
 * @param {function} onClick - 버튼 클릭 시 실행할 함수
 * @param {React.ReactNode} children - 버튼에 들어갈 내용
 * @param {"kakao" | "gray" | "white" | "black"} color - 버튼의 배경색 (현재는 kakao, gray만 존재하지만 추후 구현할 페이지에 따라 추가될 예정)
 * @param {string} className - 버튼에 추가할 클래스 이름. 버튼의 쓰임새에 따라 특별한 요소가 추가될 경우 사용
 * @returns {JSX.Element} - 버튼 컴포넌트의 JSX 요소
 */
const Button = ({ type, onClick, children, color, className }) => {
  const colorObj = {
    kakao: 'bg-kakao-yellow',
    gray: 'bg-gray-300 text-white',
    white: 'bg-white border border-solid border-gray-300',
    black: 'bg-black text-white',
  };

  return (
    <button
      className={`btn w-full h-12 rounded-md font-bold ${colorObj[color]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
