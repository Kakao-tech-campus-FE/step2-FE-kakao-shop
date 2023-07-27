import { useParams, useNavigate } from "react-router-dom"
import Loader from "../components/atoms/Loader"
import { getProductById } from "../services/product"
import { useQuery } from "react-query"
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate"

const ProductDetailPage = () => {
  const {id}= useParams() //string
  const navigate = useNavigate()
  const {
    data:detail, 
    error,
    isLoading
  } = useQuery(`product/${id}`, ()=> getProductById(id))

  const product = detail?.data?.response

  if (isLoading){
    return <Loader/>
  }

  if (error){
    navigate('/product/404')
    return null
  }

  return (
      <div>
        {detail && <ProductDetailTemplate product={product}/>}
      </div>
  )
}

export default ProductDetailPage