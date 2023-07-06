const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="btn_g highlight"
      onClick={() => { onClick(); }}
    >
      {children}
    </button>
  );
};

export default Button;
