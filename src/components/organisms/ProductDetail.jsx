import StarRating from "../atoms/StarRating.tsx"
import ProducePrice from "../atoms/ProductPrice"

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductDetail = ({product}) => {
  return (
    <div className="flex w-128">
      <img src={`${staticServerUrl}/assets${product.image}`}  alt={product.name} className="w-60 h-60 rounded-lg" />
      <div className="w-96">
        <StarRating starCount={product.starCount} />
        <div className="pb-1 text-xl">{product.productName}</div>
        <button className="bg-yellow-300 rounded-full flex flex-column align-center w-40 py-3 justify-center">
          <div className="flex font-bold text-xs">
            <span>톡딜가</span>
            <ProducePrice price={product.price} className='mx-1'/>
            <span> 원 ~</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductDetail;