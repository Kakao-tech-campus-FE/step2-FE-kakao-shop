import SkeletonCard from "../molecules/SkeletonCard";
import "../../styles/organisms/ProductGrid.css";
const SkeletonGrid = ({ arr }) => {
  return (
    <div className="product-grid">
      {arr.map((arr, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
