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
      <div>
        <Txt>{product.productName}</Txt>
      </div>
      <div>
        <Txt color="primary" typograph="h5">
          특별가
        </Txt>
        <Txt typograph="h5"> {product.price} </Txt>
        <Txt typograph="h5">원 부터~</Txt>
      </div>
    </div>
  );
};

export default ProductCard;
