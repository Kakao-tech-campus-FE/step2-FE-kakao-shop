import Containor from '../atoms/Containor'
import ProductInformationColumn from '../molecules/ProductInformationColumn'
import OptionColumn from '../molecules/OptionColumn'

function ProductDetailTemplate( { product } ) {
  return (
    <Containor>
      <ProductInformationColumn product={product}/>
      <OptionColumn product={product}/>
    </Containor>
  )
}

export default ProductDetailTemplate