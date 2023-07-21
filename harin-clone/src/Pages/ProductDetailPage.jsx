import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../Servicies/product";
import { getDetail } from "../Store/Slices/detailSlice";
import Loader from "../Components/Atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import ProductDetailTemplate from "../Components/Templates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams(); //string
  // const parseId = parseInt(id, 10); => 10진수로 number
  const { status, error, data, isLoading } = useQuery([`product/${id}`], () => getProductById(id), {
    // onError: (error) => {
    //   if (error.status === 404) {
    //     navigate("/pagenotfound");
    //   }
    // },
  }); // 구분자, API 요청 함수
  // 단일 쿼리의 비동기는 useQuery, 복수 비동기 요청 관리는 useQueries

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (error?.response?.status === 404) {
    navigate("/pagenotfound");
  }

  // console.log(isError);
  // console.log(error.response.status);

  const product = data?.data?.response;

  const validate = () => {
    if (!product) {
      return false;
    }

    const requiredKeys = ["id", "productName"];

    const keys = Object.keys(product); //object의 key만 추출.

    for (let i = 0; i < requiredKeys.length; i++) {
      const requiredKey = requiredKeys[i];
      if (!keys.includes(requiredKey)) {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
