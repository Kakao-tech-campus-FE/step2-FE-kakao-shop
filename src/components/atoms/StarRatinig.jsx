import { BsStarFill, BsStar } from "react-icons/bs";

const StarRating = ({ starCount = 0, className = "", starClassName = "" }) => {
  const filledStars = Array.from({ length: starCount });
  const emptyStars = Array.from({ length: 5 - starCount });
  const initialStarClassName = "text-xl mx-[1px] text-sky-500";

  return (
    <div className={`flex ${className}`}>
      {filledStars.map((_, index) => (
        <BsStarFill
          className={`${initialStarClassName} ${starClassName}`}
          key={index}
        />
      ))}
      {emptyStars.map((_, index) => (
        <BsStar
          className={`${initialStarClassName} ${starClassName}`}
          key={index}
        />
      ))}
    </div>
  );
};
export default StarRating;
