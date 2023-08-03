import React from 'react'
import Card from '../atoms/Card'
import Photo from '../atoms/Photo'
import { comma } from '../../utils/convert'

const staticServerUri = process.env.REACT_APP_PATH || "";

function ProductCard({ product }) {
  return (
    <Card to={`${staticServerUri}/product/${product.id}`}>
      <Photo src={`${product.image}`} alt={product.productName} size="284px"/>
      <div style={{
        width: "200px",
        height: "65px",
        marginTop: "50px",
        fontWeight: "bold",
      }}>{product.productName}</div>
      <div style={{
        marginTop: "10px",
      }}>{comma(product.price)}원</div>
    </Card>
  )
}

export default ProductCard