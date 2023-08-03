// onClick = 버튼 눌렀을 때 실행할 함수, children = 버튼에 쓰일 내용
const Button = ({ onClick, disabled, children, className }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
