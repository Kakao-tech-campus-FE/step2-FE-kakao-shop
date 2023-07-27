import React from "react";
import ProductInfoColumn from "../molecules/ProductInfoColumn";
import OptionColumn from "../molecules/OptionColumn";
import "../../styles/template/ProductDetailTemplate.css";

const ProductDetailTemplate = ({ product }) => {
  return (
    <div className="product-detail-innerwrap">
      <ProductInfoColumn product={product} />
      <OptionColumn product={product} />
    </div>
  );
};

export default ProductDetailTemplate;
