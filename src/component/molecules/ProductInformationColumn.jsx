import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";


const ProductInformationColumn = ({ product }) => {

    const { productName, price, image  } = product;    
    return (
        <div className="flex">
            <div className="h-80 w-80 m-8">
                <Photo src={image} alt={productName} />
            </div>
            <div className="p-8">
                <h1 className="text-3xl">{productName}</h1>
                <p className="text-3xl">{comma(price)}원</p>
            </div>
        </div>
    )
}

export default ProductInformationColumn;