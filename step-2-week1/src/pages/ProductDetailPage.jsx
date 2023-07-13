import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  );
};

export default ProductDetailPage;