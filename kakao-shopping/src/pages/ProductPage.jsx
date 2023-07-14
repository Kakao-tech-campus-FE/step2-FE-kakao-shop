import { useParams } from "react-router-dom";
import { getIdProduct } from "../apis/api";
import { useQuery } from "react-query";
import ProductDetail from "../components/organisms/ProductDetail";
import ProductOptions from "../components/organisms/ProductOptions";
import Error from "../components/molecules/Error";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery("product", ()=>getIdProduct(id));

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    )
  } else if(isError) {
    return (
      <Error errorStatus={error.message}/>
    )
  }

  const product = data.data.response;
  console.log(product)
  return (
    <div className="flex justify-around h-280">
      <ProductDetail product={product} />
      <div className="h-full border-l"/>
      <ProductOptions product={product} />
    </div>
  )
}

export default ProductPage;