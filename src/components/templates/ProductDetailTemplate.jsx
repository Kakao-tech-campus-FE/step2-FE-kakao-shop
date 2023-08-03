import Container from '../atoms/Container'
import OptionColumn from "../atoms/OptionColumn"
import ProductInformationColumn from '../atoms/ProductInformationColumn'

const ProductDetailTemplate = ({product}) => {
  return (
    <Container className="flex mx-80 space-x-4">
      <ProductInformationColumn product={product}/>
      <OptionColumn product={product}/>
    </Container>
  )
}

export default ProductDetailTemplate