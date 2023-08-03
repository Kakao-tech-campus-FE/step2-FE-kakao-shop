import Card from "../Atoms/Card";
import { comma } from "../../Utils/convert";
import Photo from "../Atoms/Photo";
import { useSelector } from "react-redux";
import SkeletonItem from "./SkeletonItem";

const ProductCard = ({ product }) => {
  const staticServerUri = process.env.REACT_APP_PATH || "";

  return (
    <Card to={`${staticServerUri}/product/${product.id}`}>
      <Photo src={product.image} alt={product.productName} imgClass="p-4" />
      <div className="p-4 pt-7 font-bold">{product.productName}</div>
      <div className="p-4 pt-3 pb-7">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
