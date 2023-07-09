import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getIdProduct } from "../apis/api";
import { useQuery } from "react-query";
import ProductDetail from "../components/organisms/ProductDetail";
import ProductOptions from "../components/organisms/ProductOptions";
import Button from "../components/atoms/Button";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useQuery("product", ()=>getIdProduct(id));

  if(isLoading) {
    return (
      // 로딩중
      <div>
        로딩중
      </div>
    )
  }
  if(isError) {
    return (
      // 에러
      <div>
        에러
      </div>
    )
  }
  const product = data.data.response;
  console.log(product)
  return (
    <div className="flex">
      <ProductDetail product={product} />
      <div className="h-200 border-l"/>
      <ProductOptions product={product} />
    </div>
  )
}

export default ProductPage;
  