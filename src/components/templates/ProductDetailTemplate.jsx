import Containor from '../atoms/Containor'
import ProductInformationColumn from '../molecules/ProductInformationColumn'
import OptionColumn from '../molecules/OptionColumn'
import { styled } from 'styled-components'

function ProductDetailTemplate( { product } ) {
  return (
    <div className='mx-auto my-0 w-[1280px] flex'>
      <ProductInformationColumn product={product}/>
      <OptionColumn product={product}/>
    </div>
  )
}

export default ProductDetailTemplate

