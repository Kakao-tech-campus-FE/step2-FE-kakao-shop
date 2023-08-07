const Button = ({ children, className, onClick = () => {} }) => (
  <button
    className={`button ${className}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </button>
);

export default Button;
