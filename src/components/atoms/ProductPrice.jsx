const ProductPrice = ({price, className}) => {
  const priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <span className={className}>{priceString}</span>
  )
}

export default ProductPrice;