const Button = ({ type, onClick, children }) => {
  return (
    <button
      className="btn"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      type={type}
    >
      {children}
    </button>
  );
};
