import ProductCard from '../molecules/ProductCard';

/**
 * 상품 그리드
 * 상품 정보를 받아서 상품 카드를 그리드 형태로 보여주는 컴포넌트
 *
 * @param {object[]} products - 상품 정보
 * @returns {JSX.Element} 상품 그리드
 */

const ProductGrid = ({ products }) => {
  //loading state
  //error state
  //presentation state
  return (
    <div className="product-grid m-4 grid w-full max-w-full gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

// grid는 명시적으로 행과 열을 나눌때

// flex는 유동적으로 바뀌어야 할때

// fr 비율
