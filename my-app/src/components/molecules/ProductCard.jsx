import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const ProductCard = ({ product, loading }) => {
  return (
    <>
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <Card to={`product/${product.id}`}>
          {/* <Photo className="rounded-lg" src={"http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/" + product.image} alt={product.productName} />
          <div className="text-sm font-medium">{product.productName}</div>
          <div className="text-lg font-bold">{comma(product.price)}원~</div> */}
          <Photo src={"http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/".slice(0, -1) + product.image} alt={product.productName} />
          <div className="product-name">{product.productName}</div>
          <div className="product-price">{comma(product.price)}원</div>
        </Card>
      )}
    </>
  );
};

export default ProductCard;