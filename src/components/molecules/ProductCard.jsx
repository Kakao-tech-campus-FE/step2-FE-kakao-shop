import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <div className={"image-wrapper min-h-[210px] overflow-hidden"}>
        <Photo
          className={
            "product-photo transition-all duration-300 ease-in-out hover:scale-[1.1] hover:shadow-xl"
          }
          src={product.image}
          alt={product.productName}
        />
      </div>
      <div
        className={
          "text-md line-clamp-2 overflow-hidden text-left font-semibold"
        }
      >
        {product.productName || <Skeleton />}
      </div>
      <div
        className={
          "product-price w-full text-left text-sm font-semibold text-gray-500"
        }
      >
        {comma(product.price || <Skeleton />)}원
      </div>
    </Card>
  );
};

export default ProductCard;
