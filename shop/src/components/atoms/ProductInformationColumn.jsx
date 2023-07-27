import { comma } from "../../utils/convert";
import Photo from "./Photo";


const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
    return (
      <div className="mt-20 flex space-x-10 ">
        <div className="col">
          <Photo src={image} alt={productName}/>
        </div>
        <div className="col">
          <h1 className="name text-4xl font-medium">{productName}</h1>
          <br/>
          <p className="price text-3xl font-black">{comma(price)}원</p>
        </div>
      </div>
  )
}

export default ProductInformationColumn