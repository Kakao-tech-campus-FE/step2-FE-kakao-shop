import { useParams, useNavigate } from "react-router-dom"
import Loader from "../components/atoms/Loader"
import { getProductById } from "../services/product"
import { useQuery } from "react-query"
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate"
import { useEffect } from "react"

const ProductDetailPage = () => {
  const {id}= useParams() //string
  const navigate = useNavigate()
  const {
    data:detail, 
    error,
    isLoading
  } = useQuery(`product/${id}`, ()=> getProductById(id))

  const product = detail?.data?.response

  
  useEffect(() => {
    if (error) {
      navigate('/404')
    }
  }, [error, navigate]);
  
  if (isLoading){
    return <Loader/>
  }
  
  return (
      <div>
        {detail && <ProductDetailTemplate product={product}/>}
      </div>
  )
}

export default ProductDetailPage