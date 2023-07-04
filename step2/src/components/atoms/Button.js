const Button = ({ children, onClick }) => {
  return (
    <button
      className="btn_g highlight"
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
