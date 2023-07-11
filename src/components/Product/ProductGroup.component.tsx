import { Product } from "@/dtos/product.dto";
import { FC } from "react";
import ProductCard from "./ProductCard.component";

interface ProductGroupProps {
  products: Product[] | undefined;
}

const ProductGroup: FC<ProductGroupProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {products
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : ""}
    </div>
  );
};

export default ProductGroup;
