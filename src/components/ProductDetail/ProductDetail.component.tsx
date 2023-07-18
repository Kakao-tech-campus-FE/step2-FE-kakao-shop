import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { getProductDetail } from "@/store/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailDescription from "./ProductDetailDescription.component";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProductDetail(Number(productId)));
  }, []);
  return (
    <div className="flex">
      <ProductDetailDescription />
      <div className="flex-1"></div>
    </div>
  );
};

export default ProductDetail;
