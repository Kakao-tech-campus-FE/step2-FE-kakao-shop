import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";
import ProductDetail from "../components/templates/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams(); //string
  const dispatch = useDispatch();

  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`product/${id}`, () => getProductById(id)); //구분자, API 요청 함수
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  //console.log(detail.data.response);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <ProductDetail detail={detail.data.response} />}
    </div>
  );
};
export default ProductDetailPage;
