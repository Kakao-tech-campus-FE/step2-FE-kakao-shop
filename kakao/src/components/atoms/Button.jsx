const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); //submit으로 인한 리렌더링 막기
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
