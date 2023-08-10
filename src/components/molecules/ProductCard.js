import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  return (
    <Card to={staticServerUri + `/product/${product.id}`}>
      <Photo src={staticServerUri + product.image} alt={product.productName} />
      {/* <h3>{product.productName}</h3>
      <p>{comma(product.price)}</p> */}
      <div className="product_name">{product.productName}</div>
      <div className="product_price">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
