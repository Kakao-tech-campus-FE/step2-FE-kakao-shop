import Container from '../atoms/Container'
import OptionColumn from "../atoms/OptionColumn"
import ProductInformationColumn from '../atoms/ProductInformationColumn'

const ProductDetailTemplate = ({product}) => {
  return (
    <Container>
      <ProductInformationColumn product={product}/>
      <OptionColumn product={product}/>
    </Container>
  )
}

export default ProductDetailTemplate