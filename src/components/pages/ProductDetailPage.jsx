import {useParams} from "react-router-dom";
import Loader from "../atoms/Loader";
import {getProductById} from "../../services/product";
import {useQuery} from "react-query";
import ProductDetailTemplate from "../templates/ProductDetailTemplate";
import ErrorSign from "../atoms/ErrorSign";

const ProductDetailPage = () => {
    const id = useParams().id;
    const {isLoading, error, data} = useQuery(`product${id}`, () => getProductById(id));

    return (

        <div className={"product-detail-page page flex flex-col"}>
            {data && <div className={"h-28 flex justify-center items-center  w-full border-b-light-gray"}>
                <h1 className={"text-3xl font-bold"}>상품 페이지</h1>
            </div>}
            <div className={"w-full flex flex-col items-center"}>
                {isLoading && <Loader/>}
                {error && <ErrorSign error={error}/>}
                {data && <ProductDetailTemplate product={data.data.response}/>}
            </div>
            
        </div>
    )
}

export default ProductDetailPage;