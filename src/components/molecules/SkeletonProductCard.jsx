import Skeleton from "react-loading-skeleton";

const SkeletonProductCard = ({ cards = 1 }) => {
  return Array(cards)
    .fill()
    .map((_, index) => (
      <div
        className={"skeleton-product-card card border border-gray-300 p-3"}
        key={index}
      >
        <div className={"product-photo"}>
          <Skeleton className={"h-0 w-full pt-[100%]"} />
        </div>
        <div className={"product-name"}>
          <Skeleton height={"100%"} />
        </div>
        <div className={"product-price"}>
          <Skeleton height={"100%"} />
        </div>
      </div>
    ));
};

export default SkeletonProductCard;
