import Card from '../atoms/Card';

/**
 * 스켈레톤 상품 카드
 *
 * @param {object} product 상품 정보
 * @returns {JSX.Element} 상품 카드
 */

const SkeletonCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`} className="rounded-md p-4">
      <div className="mb-4 h-40 w-60  rounded-md bg-gray-300"></div>
      <h3 className="mb-2 h-6 w-3/4 bg-gray-300"></h3>
      <p className="h-4 w-1/2 bg-gray-300"></p>
    </Card>
  );
};

export default SkeletonCard;
