import { Product } from "@/dtos/product.dto";
import Badge from "@/components/common/Badge.component";
import Txt from "@/components/common/Txt.component";
import { pointByKo } from "@/functions/utils";
import LazyImage from "@/components/common/LazyImage.component";
import { PRODUCT } from "@/assets/product.ko";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="h-full cursor-pointer flex flex-col gap-2"
    >
      <div className="w-full overflow-hidden flex-1">
        <LazyImage
          className="hover:scale-110 transition-all ease-out duration-500 h-full"
          src={process.env.VITE_KAKAO_IMAGE_URL + product.image}
          alt={product.productName}
        />
      </div>
      <Badge color="secondary" className="w-fit">
        {PRODUCT.FREE_SHIPPING}
      </Badge>
      <Txt className="line-clamp-2 h-12">{product.productName}</Txt>
      <div>
        <Txt color="primary" typograph="h5">
          {PRODUCT.SPECIAL_PRICE}
        </Txt>
        <Txt typograph="h5"> {pointByKo(product.price)} </Txt>
        <Txt typograph="h5">{PRODUCT.FROM_PRICE}~</Txt>
      </div>
    </Link>
  );
};

export default ProductCard;
