import { useParams } from "react-router-dom";
import { getIdProduct } from "../apis/api";
import { useQuery } from "react-query";
import ProductDetail from "../components/organisms/ProductDetail";
import ProductOptions from "../components/organisms/ProductOptions";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery("product", ()=>getIdProduct(id));

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div class="loader" />
      </div>
    )
  }
  if(isError) {
    return (
      <div>
        {error.message}
      </div>
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