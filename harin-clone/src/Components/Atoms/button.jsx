const Button = ({ onClick, children, className }) => {
  return (
    <div className="justify-center">
      <button
        className={className}
        onClick = {(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;