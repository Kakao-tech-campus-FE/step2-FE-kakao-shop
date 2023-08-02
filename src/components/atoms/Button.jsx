const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
