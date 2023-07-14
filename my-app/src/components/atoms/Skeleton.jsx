import "../../styles/atoms/Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="card-img skeleton" />
      <div className="card-body">
        <div className="card-title skeleton" />
        <div className="card-description skeleton" />
      </div>
    </div>
  );
};

export default Skeleton;
