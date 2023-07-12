import React from 'react'
import ProductCard from '../molecules/ProductCard'

function ProductGrid({products}) {
  return (
    <div>{products.map((product)=>
      <ProductCard key={product.id} product={product}/>
    )}
    </div>
  )
}

export default ProductGrid