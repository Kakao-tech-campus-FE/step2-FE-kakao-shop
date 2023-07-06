const Button = ({ type, onClick, children, color, className }) => {
  const colorObj = {
    kakao: "bg-kakao-yellow",
    gray: "bg-gray-300",
  };

  return (
    <button
      className={`btn w-full h-12 rounded-md font-bold ${colorObj[color]} ${className}`}
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

export default Button;
