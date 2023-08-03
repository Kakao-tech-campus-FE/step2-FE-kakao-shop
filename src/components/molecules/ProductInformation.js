import { convertToPrice } from "utils/convert.js";

import Image from "components/atoms/Image.js";
import Stars from "components/atoms/Stars.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function ProductInformation({ product }) {
  return (
    <div className="inline-flex p-6 border-r gap-8">
      <Image
        className="w-[25rem] h-[25rem] border"
        src={staticServerUri + product.image}
        alt={product.productName}
      />
      <div className="inline-block w-[25rem] text-left">
        <Stars starCount={product.starCount} />
        <h3 className="mt-1 mb-4 text-[1.6rem] leading-tight">
          {product.productName}
        </h3>
        <p className="inline-block py-2 px-5 rounded-3xl text-center bg-yellow-300 text-2xl">
          {convertToPrice(product.price)}~
        </p>
      </div>
    </div>
  );
}
