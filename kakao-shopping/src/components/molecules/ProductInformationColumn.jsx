import { comma } from "../../utils/convert";
import Label from "../atoms/Label";
import Photo from "../atoms/Photo";
import Skeleton from "../atoms/Skeleton";

const ProductInformationColumn = ({
    product, // 상품 정보
    isLoading, // 로딩
    className = "", // class
    ...props
}) => {
    // if (!product) product = { productName: "", image: "", price: "" };
    return (
        <div
            className={`product-information-column d-flex flex-row align-items-center w-75 h-100 ${className}`}
            {...props}
        >
            <div className="col w-50">
                {!isLoading ? (
                    <Photo
                        src={process.env.REACT_APP_API_URL + product.image}
                        alt={product.productName}
                    />
                ) : (
                    <Skeleton type="thumbnail" />
                )}
            </div>
            <div className="col w-50 flex-grow-1 text-start d-flex flex-column h-100 p-2">
                {!isLoading ? (
                    <>
                        <div className="star ms-1 fs-4 fw-bold text-primary">
                            {`${"★".repeat(parseFloat(product.starCount))} ${
                                product.starCount
                            }점`}
                        </div>
                        <div className="name fs-4 fw-bold">
                            {product.productName}
                        </div>

                        <div className="description flex-grow-1 my-3">
                            <Label className="fs-5">설명</Label>
                            <br />
                            {product.description}
                        </div>
                        <div className="price text-center fs-3 fw-bold">
                            {comma(product.price)}원~
                        </div>
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
