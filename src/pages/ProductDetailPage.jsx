import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/atoms/Loader";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.detail.loading);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return <div>{loading && <Loader />}</div>;
};

export default ProductDetailPage;
