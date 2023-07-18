import LazyImage from "@components/common/LazyImage.component";
import ProcutStars from "@components/ProductDetail/ProductStars.component";
import Txt from "../common/Txt.component";
import { pointByThree } from "@/functions/utils";
import { PRODUCT } from "@/assets/product.ko";
import { useAppSelector } from "@/hooks/useRedux";

const ProductDetailDescription = () => {
  const { data } = useAppSelector((state) => state.productSlice);

  if (!data) return <div>로딩중...</div>;

  return (
    <div className="flex flex-[2_0_0]">
      <div className="flex-1">
        <LazyImage
          src={import.meta.env.VITE_KAKAO_IMAGE_URL + data.image}
          alt={data.productName}
        />
      </div>
      <div className="flex flex-col gap-2 flex-1 py-2 px-4">
        <ProcutStars starCount={data.starCount} />
        <Txt typograph="h4" className="font-normal">
          {data.productName}
        </Txt>
        <div>{data.description}</div>
        <div className="py-2 px-4 rounded-full bg-yellow-300 w-fit">
          <Txt typograph="h6" className="font-normal">
            {PRODUCT.TOC_PRICE} {pointByThree(data.price)}
            {PRODUCT.WON}
          </Txt>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
