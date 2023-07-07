import { useNavigate } from "react-router-dom";

const LinkButton = ({ onClick, children, to, className = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
        navigate(to);
      }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default LinkButton;
