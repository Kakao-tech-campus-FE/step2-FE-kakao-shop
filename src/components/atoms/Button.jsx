// 버튼은 기본적으로 submit 요청을 보내므로 onClick 메소드를 관리해 줄 필요가 있다.

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault(); // 기본적으로 설정된 submit 요청 기능 해제
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
