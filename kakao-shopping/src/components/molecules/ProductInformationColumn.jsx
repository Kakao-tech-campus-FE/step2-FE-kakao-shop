import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import Skeleton from "../atoms/Skeleton";

const ProductInformationColumn = ({ product, isLoading }) => {
    // if (!product) product = { productName: "", image: "", price: "" };
    return (
        <div className="product-information-column d-flex flex-row align-items-center">
            <div className="col w-50">
                {!isLoading ? (
                    <Photo
                        src={process.env.REACT_APP_API_URL + product.image}
                        alt={product.productName}
                        style={{ width: "300px", height: "300px" }}
                    />
                ) : (
                    <Skeleton type="thumbnail" />
                )}
            </div>
            <div className="col w-50 flex-grow-1">
                {!isLoading ? (
                    <>
                        <h1 className="name">{product.productName}</h1>
                        <p className="price">{comma(product.price)}원</p>
                    </>
                ) : (
                    <>
                        <Skeleton type="title" />
                        <Skeleton type="text" />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductInformationColumn;
