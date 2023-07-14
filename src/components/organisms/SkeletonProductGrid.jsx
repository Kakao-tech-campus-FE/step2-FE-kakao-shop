import SkeletonProductCard from "../molecules/SkeletonProductCard";

const SkeletonProductGrid = ({skeletonAmount, ...props}) => {
    return (
        <div className="product-grid">
            {Array(skeletonAmount).fill().map((_, i) => <SkeletonProductCard key={i}/>)}
        </div>
    )
}

export default SkeletonProductGrid;