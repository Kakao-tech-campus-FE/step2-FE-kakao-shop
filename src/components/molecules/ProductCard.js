import { convertToPrice } from "utils/convert";

import Card from "components/atoms/Card";
import Photo from "components/atoms/Photo";

export default function ProductCard({ product }) {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        src={require("../../assets" + product.image)}
        alt={product.productName}
      />
      <h3>{product.productName}</h3>
      <p>{convertToPrice(product.price)}</p>
    </Card>
  );
}
