import { useNavigate } from "react-router-dom";

const Card = ({ to, children, className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`card transform cursor-pointer border border-gray-300 p-3 shadow-md ease-linear ${
        className ? className : ""
      }`}
      onClick={() => {
        if (to) {
          navigate(to);
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;
