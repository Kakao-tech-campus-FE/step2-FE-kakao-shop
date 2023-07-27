import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <div className="flex flex-row py-5 ml-10 mr-5 border-r-2">
            <div className="mx-5 col w-[450px]">
                <Photo className="product" src={`${process.env.REACT_APP_API_URL}${image.slice(1)}`} alt={productName} />
            </div>
            <div className="mx-5 text-2xl w-[450px]">
                <h1 className="name">{productName}</h1>
                <p className="m-5 price">{comma(price)}원</p>
            </div>
        </div>
    )
}

export default ProductInformationColumn;