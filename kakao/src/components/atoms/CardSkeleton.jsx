import "../../styles/atoms/CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="card-skeleton-img"></div>
      <div className="card-skeleton-info">
        <div className="card-skeleton-name"></div>
        <div className="card-skeleton-price"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
