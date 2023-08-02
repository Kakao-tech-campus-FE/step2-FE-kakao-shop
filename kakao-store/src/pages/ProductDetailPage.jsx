import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../apis/product";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import Error404Page from "./Error404Page";

const ProductDetailPage = () => {
    const { id } = useParams(); // string

    const { data, error, isLoading } = useQuery(`product/${id}`, () => 
        getProductById(id)
    );

    const product = data?.data?.response;

    // typescript로 대체
    const isValidate = () => {
        if(!product) {
            return false;
        }

        const requiredKeys = [
            "id",
            "productName"
        ];

        const keys = Object.keys(product);

        for(let i=0; i<requiredKeys.length; i++) {
            const requiredKey = requiredKeys[i];
            if(!keys.includes(requiredKey)) {
                alert(`product 객체에 ${requiredKey}가 존재하지 않습니다`);
                return false;
            }
        }

        return true;
    }

    return (
        <div>
            {isLoading && <Loader />}
            {error &&  <Error404Page />}
            {isValidate === false && <Error404Page />  }
            {product && <ProductDetailTemplate product={product} />}
        </div>
    );
}

export default ProductDetailPage;