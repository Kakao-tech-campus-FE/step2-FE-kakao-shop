import "../../styles/molecules/SkeletonCard.css";

const SkeletonCard = () => {
    return (
      <div className="skeletonCard">
        <div className="skeletonImage" />
        <div className="skeletonTitle" />
        <div className="skeletonPrice" />
      </div>
    );
  };

  export default SkeletonCard;