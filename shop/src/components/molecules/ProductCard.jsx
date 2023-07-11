import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductCard = ({product})=>{
  return (
    <Card to={`/product/${product.id}`}>
      <Photo src={product.image} alt={product.productName}/>
      <h3>{product.productName}</h3>
      <p>{comma(product.price)}원</p>
    </Card>
  )
}

export default ProductCard