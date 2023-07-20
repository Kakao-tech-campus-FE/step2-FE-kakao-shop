import Photo from "../atoms/Photo";
import {comma} from "../../utils/convert";

const ProductInformationColumn = ({product}) => {
    return (
        <div className="product-information-column w-2/3 flex flex-row">
            <div className={"product-image w-1/2"}>
            <Photo className={"w-full p-2"} src={product.image}/>
            </div>
            <div className="product-description p-2 flex flex-col w-1/2 justify-between">
                <div className="detail-product-name text-2xl text-start">
                    {product.productName}
                </div>
                <div className="product-description">
                    {product.description}
                </div>
                <div className="product-information-price text-start">
                    {`${comma(product.price)}원`}
                </div>
            </div>
        </div>
    )
}

export default ProductInformationColumn;