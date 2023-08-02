import { convertToPrice } from "utils/convert";

import Card from "components/atoms/Card";
import Image from "components/atoms/Image";

export default function ProductCard({ product }) {
  return (
    <Card
      className="w-[200px] text-left space-y-1"
      to={`/product/${product.id}`}
    >
      <Image
        className="w-full rounded border"
        src={process.env.REACT_APP_API_URL + product.image}
        alt={product.productName}
      />
      <h3 className="text-sm">
        {product.productName}
      </h3>
      <p className="text-[1.3rem] font-bold">
        {convertToPrice(product.price)}~
      </p>
    </Card>
  );
}
