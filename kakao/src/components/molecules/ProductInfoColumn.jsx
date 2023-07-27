import React from "react";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductInfoColumn.css";

const ProductInfoColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-info-column">
      <div className="col">
        <Photo src={image} alt={productName} className="product-info-img" />
      </div>
      <div className="col">
        <div className="stars">
          <span className="material-symbols-outlined">star_rate_half</span>
          <span className="material-symbols-outlined">star_rate_half</span>
          <span className="material-symbols-outlined">star_rate_half</span>
          <span className="material-symbols-outlined">star_rate_half</span>
          <span className="material-symbols-outlined">star_rate_half</span>
        </div>
        <p className="name">{productName}</p>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInfoColumn;
