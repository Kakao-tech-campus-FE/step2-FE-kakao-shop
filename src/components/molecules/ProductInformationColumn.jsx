import Photo from "../atoms/Photo";

const ProductInformationColumn = ({product}) => {
    return (
        <div className="product-information-column">
            <h3>상품 정보</h3>
            <Photo className={"product-photo"} src={product.image}/>
            <div className="product-description">
                <div className="product-name">
                    {product.productName}
                </div>
                <div className="product-price">
                    {product.price}
                </div>
                <div className="product-description">
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ProductInformationColumn;