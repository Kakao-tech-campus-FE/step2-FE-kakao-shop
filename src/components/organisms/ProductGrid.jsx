import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";
import CardSkeleton from "../atoms/CardSkeleton";

// 로딩중일 때 제품목록카드 개수만큼 스켈레톤카드 보여주기
const ProductGrid = ({ products, loading }) => {
  if (loading) {
    // 제품 받아오는만큼 보여주고 싶은데.. length: products.length라고 넣으면 스켈레톤 카드 자체가 안보이고(?) 로딩만 됐다가 상품나타남
    const skeletonCards = Array.from({ length: 12 }).map((_, index) => (
      <CardSkeleton key={index} />
    ));
    return <div className="product-grid">{skeletonCards}</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
