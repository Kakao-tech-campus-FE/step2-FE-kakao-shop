import "../../styles/atoms/ProductCardSkeleton.css"

const ProductCardSkeleton = () => {
  return (
    <>
      <div className="image"></div>
      <div className="productName"></div>
      <div className="productPrice"></div>
    </>
  )
}

export default ProductCardSkeleton;