import StarRating from "./StarRating"
import Button from "../atoms/Button"
import ProducePrice from "../atoms/ProductPrice"

const ProductDetail = ({product}) => {
  return (
    <div className="flex w-128">
      <img src={`/assets/${product.image}`}  alt={product.name} className="w-60 h-60 rounded-lg" />
      <div className="w-96">
        <StarRating starCount={product.starCount} />
        <div className="pb-1 text-xl">{product.productName}</div>
        <Button className="bg-yellow-300 rounded-full flex flex-column align-center w-32 py-3 justify-center">
          <div className="flex font-bold text-sm">
            <span>톡딜가</span>
            <ProducePrice price={product.price} className="mx-1" />
            <span> 원 ~</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail;