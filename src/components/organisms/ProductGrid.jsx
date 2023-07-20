import React from 'react'
import ProductCard from '../molecules/ProductCard'
import Containor from '../atoms/Containor'

function ProductGrid({products}) {
  return (
    <Containor style={{
      width: "1280px",
      margin: "0 auto",
      textAlign: "center"
    }}>{products.map((product)=>
      <ProductCard key={product.id} product={product}/>
    )}
    </Containor>
  )
}

export default ProductGrid