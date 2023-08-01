import { convertToPrice } from "utils/convert";

import Card from "components/atoms/Card";
import Image from "components/atoms/Image";

import "styles/molecules/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Card className="product-card" to={`/product/${product.id}`}>
      <Image
        className="product-photo"
        src={process.env.REACT_APP_API_URL + product.image}
        alt={product.productName}
      />
      <h3 className="product-h3">{product.productName}</h3>
      <p className="product-p">{convertToPrice(product.price)}~</p>
    </Card>
  );
}
