// onClick: Click 시 작동할 handler
// children: Button에 감싸진 자식 요소
const Button = ({ onClick, children }) => {
  return (
    <button
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
