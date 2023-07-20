import Skeleton from "react-loading-skeleton";

const SkeletonProductCard = ({cards = 1}) => {
    return Array(cards).fill().map((_, index) =>
        <div className={"skeleton-product-card card"} key={index}>
            <div className={"product-photo"}>
                <Skeleton height={"100%"}/>
            </div>
            <div className={"product-name"}>
                <Skeleton height={"100%"}/>
            </div>
            <div className={"product-price"}>
                <Skeleton height={"100%"}/>
            </div>
        </div>
    )

}

export default SkeletonProductCard;