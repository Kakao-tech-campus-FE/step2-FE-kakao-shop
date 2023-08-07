import { convertToPrice } from "utils/convert.js";

import Card from "components/atoms/Card.js";
import Image from "components/atoms/Image.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function ProductCard({ product }) {
  return (
    <Card
      className="w-[200px] text-left space-y-1"
      to={staticServerUri + `/product/${product.id}`}
    >
      <Image
        className="w-full rounded border"
        src={staticServerUri + product.image}
        alt={product.productName}
      />
      <h3 className="text-sm">{product.productName}</h3>
      <p className="text-[1.3rem] font-bold">
        {convertToPrice(product.price)}~
      </p>
    </Card>
  );
}
