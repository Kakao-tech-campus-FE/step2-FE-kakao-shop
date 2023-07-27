import { useParams } from "react-router-dom"
import Loader from "../components/atoms/Loader"
import { getProductById } from "../services/product"
import Container from "../components/atoms/Container"
import { useQuery } from "react-query"
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate"

const ProductDetailPage = () => {
  const { id } = useParams()
  const {data, error, isLoading} = useQuery(`product/${id}`, () => 
    getProductById(id)
  )

  const product = data?.data?.response

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </Container>
    )
}

export default ProductDetailPage