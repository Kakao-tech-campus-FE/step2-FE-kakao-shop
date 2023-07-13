import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/product/detailSlice";
import { useDispatch } from "react-redux";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../apis/product";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return <div>{isLoading && <Loader />}</div>;
};

export default ProductDetailPage;
