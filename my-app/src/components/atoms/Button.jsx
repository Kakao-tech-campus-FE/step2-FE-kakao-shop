// onClick: Click 시 작동할 handler
// children: Button에 감싸진 자식 요소
// style: css style 삽입
// className: style 삽입을 위한 구분자
const Button = ({ onClick, children, style, className }) => {
  return (
    <button
      style={style}
      className={className}
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
