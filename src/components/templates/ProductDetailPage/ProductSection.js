import ProductInfo from "../../organisms/ProductDetailPage/ProductInfo";

const ProductSection = ({ productDetail }) => {
  return (
    <div className="product-section">
      <ProductInfo productDetail={productDetail} />
    </div>
  );
};

export default ProductSection;
