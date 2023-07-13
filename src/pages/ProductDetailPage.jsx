import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components_2/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`product/${id}`, () => getProductById(id));

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.preductName}</div>}
    </div>
  );
};

export default ProductDetailPage;
