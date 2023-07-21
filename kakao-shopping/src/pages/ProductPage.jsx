import { useParams } from "react-router-dom";
import { getIdProduct } from "../apis/api";
import { useQuery } from "react-query";
import ProductDetail from "../components/organisms/ProductDetail";
import ProductOptions from "../components/organisms/ProductOptions";
import Error from "../components/molecules/Error";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["product", id], ()=>getIdProduct(id));

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    )
  } else if(isError && error.request.status === 404 ) {
    return (
      <Error errorStatus="해당 상품을 찾을 수 없습니다."/>
    )
  } else if(isError) {
    return (
      <Error errorStatus={error.message}/>
    )
  }

  const product = data?.data.response;

  return (
    <div className="flex justify-around h-280 mt-5">
      <ProductDetail product={product} />
      <div className="h-full border-l mx-5"/>
      <ProductOptions product={product} />
    </div>
  )
}

export default ProductPage;