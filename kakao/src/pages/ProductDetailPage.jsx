import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";

const ProductDetailPage = () => {
  const { id } = useParams(); //Params로 받은 값은 언제나 string
  const dispatch = useDispatch(); //reducer 호출하려면 dispatch필요!
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data.productName}</div>}
    </div>
  );
};
export default ProductDetailPage;
