import { useAppDispatch } from "@/hooks/useRedux";
import { getProductDetail } from "@/store/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailDescription from "./ProductDetailDescription.component";
import ProductOption from "../ProductOption/ProductOption.component";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductDetail(Number(productId)));
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-[2_0_0]">
        <ProductDetailDescription />
      </div>
      <div className="flex flex-col gap-4 flex-1 p-2">
        <ProductOption />
      </div>
    </div>
  );
};

export default ProductDetail;
