import SkeletonElement from '../atoms/SkeletonElement';

/**
 * 상품 카드 스켈레톤
 */
const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton border-none rounded-md">
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="title" className="mt-4" />

      <SkeletonElement type="title" className="mt-1 w-3/4" />
      <SkeletonElement type="price" className="mt-2" />
      <SkeletonElement type="icon" className="mt-3 mr-2 inline-block" />

      <SkeletonElement type="icon" className="mt-3 inline-block" />
    </div>
  );
};

export default ProductCardSkeleton;
