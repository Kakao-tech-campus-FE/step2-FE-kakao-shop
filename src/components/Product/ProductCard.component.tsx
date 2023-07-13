import { Product } from "@/dtos/product.dto";
import Badge from "@/components/common/Badge.component";
import Txt from "@/components/common/Txt.component";
import { pointByThree } from "@/functions/utils";
import LazyImage from "../common/LazyImage";

interface ProductCardProps {
  product: Product;
  cardRef: React.Ref<HTMLDivElement>;
}

const ProductCard = ({ product, cardRef }: ProductCardProps) => {
  return (
    <div className="h-full cursor-pointer flex flex-col gap-2" ref={cardRef}>
      <div className="w-full overflow-hidden flex-1">
        <LazyImage
          className="hover:scale-110 transition-all ease-out duration-500 h-full"
          src={product.image}
          alt={product.productName}
        />
      </div>
      <Badge color="secondary" className="w-fit">
        무료배송
      </Badge>
      <Txt className="line-clamp-2 h-12">{product.productName}</Txt>
      <div>
        <Txt color="primary" typograph="h5">
          특별가
        </Txt>
        <Txt typograph="h5"> {pointByThree(product.price)} </Txt>
        <Txt typograph="h5">원 부터~</Txt>
      </div>
    </div>
  );
};

export default ProductCard;
