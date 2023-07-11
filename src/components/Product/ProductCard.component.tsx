import { Product } from "@/dtos/product.dto";
import Badge from "@/components/common/Badge.component";
import Txt from "@/components/common/Txt.component";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <picture>
        <img src={product.image} alt="" />
      </picture>
      <Badge color="secondary">무료배송</Badge>
      <Txt>{product.productName}</Txt>
      <Txt>{product.price}</Txt>
    </div>
  );
};

export default ProductCard;
