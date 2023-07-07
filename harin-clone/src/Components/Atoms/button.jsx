const Button = ({ onClick, children, className, disabled }) => {
  return (
    <div className="justify-center">
      <button
        className={className}
        onClick = {(e) => {
          e.preventDefault();
          onClick();
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;