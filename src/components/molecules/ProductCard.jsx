import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <div className={"overflow-hidden"}>
        <Photo
          className={"product-photo hover:scale-[1.1] hover:shadow-xl transition-all duration-300 ease-in-out"}
          src={product.image}
          alt={product.productName}
        />
      </div>
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
