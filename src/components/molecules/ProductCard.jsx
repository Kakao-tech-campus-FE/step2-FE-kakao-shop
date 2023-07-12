import React from 'react'
import Card from '../atoms/Card'
import Photo from '../atoms/Photo'
import { comma } from '../../utils/convert'


function ProductCard({ product }) {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <div>{product.productName}</div>
      <div>{comma(product.price)}원</div>
    </Card>
  )
}

export default ProductCard