const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={`btn-primary ${className}}`}
      disabled={disabled}
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
