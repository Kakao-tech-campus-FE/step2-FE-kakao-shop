import { useParams } from "react-router-dom"
import Loader from "../components/atoms/Loader"
import { getProductById } from "../services/product"
import { useQuery } from "react-query"
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate"

const ProductDetailPage = () => {
  const {id}= useParams() //string
  const {
    data:detail, 
    error,
    isLoading
  } = useQuery(`product/${id}`, ()=> getProductById(id))

  const product = detail?.data?.response

  return (
      <div>
        {isLoading && <Loader/>}
        {error && <div>{error.message}</div>}
        {detail && <ProductDetailTemplate product={product}/>}
      </div>
  )
}

export default ProductDetailPage