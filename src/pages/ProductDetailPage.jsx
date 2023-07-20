import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "../components/atoms/Loader";
import ProductInformationColumn from "../components/molecules/ProductInformationColumn";

const ProductDetailPage = () => {
  // const id = useParams().id; // Params로 받은 코드는 항상 string 값
  const { id } = useParams(); //구조 분해 할당 코드

  const dispatch = useDispatch();
  // const parseId = parseInt(id, 10); //-> 전처리
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  ); //구분자, API 요청 함수

  return (
    <div>
      {isLoading && <Loading />}
      {error && <div>{error.message}</div>}
      {data && <ProductInformationColumn product={data?.data?.response} />}
    </div>
  );
};

export default ProductDetailPage;
