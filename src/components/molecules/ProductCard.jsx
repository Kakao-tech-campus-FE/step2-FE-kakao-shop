import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product, loading }) => {
  return (
    <>
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <Card to={staticServerUri + `/product/${product.id}`}>
          <Photo
            className="rounded-lg"
            src={staticServerUri + product.image}
            alt={product.productName}
          />
          <div className="text-sm font-medium">{product.productName}</div>
          <div className="text-lg font-bold">{comma(product.price)}원~</div>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
