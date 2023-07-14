import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import Loader from "../components/atoms/Loader";
import ProductCard from "../components/molecules/ProductCard";
import { getProductById } from "../services/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, data, error } = useQuery(`/product/${id}}`, () =>
    getProductById(id)
  );

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <ProductCard product={data.data.response} />}
    </div>
  );
};

export default ProductDetailPage;
