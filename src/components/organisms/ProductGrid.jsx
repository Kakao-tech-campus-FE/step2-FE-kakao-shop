import React from 'react'
import ProductCard from '../molecules/ProductCard'
import Containor from '../atoms/Containor'

function ProductGrid({products}) {
  return (
    <Containor>{products.map((product)=>
      <ProductCard key={product.id} product={product}/>
    )}
    </Containor>
  )
}

export default ProductGrid