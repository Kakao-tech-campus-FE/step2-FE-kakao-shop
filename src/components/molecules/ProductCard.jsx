import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        className={"product-photo"}
        src={product.image}
        alt={product.productName}
      />
      <div className={"text-md font-semibold line-clamp-2 text-left overflow-hidden"}>
        {product.productName || <Skeleton />}
      </div>
      <div className={"product-price text-sm font-semibold text-left w-full text-gray-500"}>
        {comma(product.price || <Skeleton />)}원
      </div>
    </Card>
  );
};

export default ProductCard;
