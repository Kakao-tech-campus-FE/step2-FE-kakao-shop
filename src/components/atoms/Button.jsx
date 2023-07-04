const Button = ({ onClick, chlidren }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {chlidren}
    </button>
  );
};

export default Button;
