import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "../atoms/Skeleton";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="p-4 rounded-lg shadow-md">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg shadow-md">
      <Card to={staticServerUri + `/product/${product.id}`}>
        <Photo src={product.image} alt={product.productName} />
        <div className="pt-4 text-black">{product.productName}</div>
        <div className="flex flex-row pt-2 items-baseline">
          <p className="font-bold text-lg text-sky-600">톡딜가</p>
          <div className="pl-2 font-bold text-black">
            {comma(product.price)} 원
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
