const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // button은 기본적으로 submit이라는 요청을 보내게됨
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
