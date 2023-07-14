import React from "react";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInfoColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-info-column">
      <div className="col">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col">
        <h1 className="name">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInfoColumn;
