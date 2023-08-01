import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-line no-unused-vars
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";   // eslint-disable-line no-unused-vars
import Photo from "../components/atoms/Photo"; // eslint-disable-line no-unused-vars
import ProductCard from "../components/molecules/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams(); // 언제나 string으로 받아옴
  const dispatch = useDispatch(); // eslint-disable-line no-unused-vars
  const { data, error, isLoading } = useQuery(`product/${id}`, () => getProductById(id)); // 따로 따로 관리하는 단일 비동기 요청
  return (
    <div>
      {isLoading && <Loader />}

      {error && <div>{error.message}</div>}
      {data && <ProductCard product={data.data.response} />}
      {data && <div>{data.data.response.productName}</div>}
      {data && <div>{data.data.response.price}</div>}
      {data && <div>평점: {data.data.response.starCount}점</div>}
    </div>
  );
};

export default ProductDetailPage;