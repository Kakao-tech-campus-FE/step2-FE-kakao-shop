import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface StarIconProps {
  starCount: number;
}

const ProcutStars: FC<StarIconProps> = ({ starCount }) => {
  const starsArray = Array.from({ length: starCount }, (_, index) => {
    return <AiFillStar key={index} />;
  });

  return <div className="flex text-[#007bff]">{starsArray}</div>;
};

export default ProcutStars;
