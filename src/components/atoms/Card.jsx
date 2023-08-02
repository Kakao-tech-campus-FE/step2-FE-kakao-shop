import { Link, useNavigate } from "react-router-dom";

const Card = ({ to, children, className }) => {

  const navigate = useNavigate();

  return (
    <div className={`card cursor-pointer p-3 border border-gray-300 transform ease-linear hover:scale-[1.02] hover:shadow-xl duration-100 shadow-md ${className? className:""}`} onClick={
      () => {
        if (to) {
          navigate(to);
        }
      }
    }>
      {children}
    </div>
  );
};

export default Card;
