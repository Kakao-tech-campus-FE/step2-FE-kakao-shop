import SkeletonElement from "../atoms/SkeletonElement";
const SkeletonProductCard = () => {
    return (
        <div className={"skeleton-wrapper"}>
            <div className={"skeleton-product-card card"}>
                <SkeletonElement type={"product-photo"} />
                <SkeletonElement type={"product-name"} />
                <SkeletonElement type={"product-price"} />
            </div>
        </div>
    )
}

export default SkeletonProductCard;