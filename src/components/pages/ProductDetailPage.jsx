import {useParams} from "react-router-dom";
import Loader from "../atoms/Loader";
import {getProductById} from "../../services/product";
import {useQuery} from "react-query";
import ProductDetailTemplate from "../templates/ProductDetailTemplate";
import {useEffect, useState} from "react";

const ProductDetailPage = () => {
    const id = useParams().id;
    const {isLoading, error, data} = useQuery(`product${id}`, () => getProductById(id));


    const [product, setProduct] = useState({})

    // useEffect(() => {
    //     console.log("data.data.response.options", data?.data?.response.options)
    //     if (!validate(data)) {
    //         return;
    //     }
    //     setProduct(data.data.response);
    // })
    //
    //
    // const validate = (target) => {
    //     if (!target) {
    //         return false;
    //     }
    //
    //     const requiredKeys = [
    //         "id",
    //         "productName",
    //     ];
    //
    //     const keys = Object.keys(target);
    //     for (const requiredKey of requiredKeys) {
    //         if (!keys.includes(requiredKey)) {
    //             alert(`${requiredKey}가 존재하지 않습니다.`)
    //             return false;
    //         }
    //     }
    //     return true
    // }

    return (
        <div>
            {isLoading && <Loader/>}
            {error && <div>{error.message}</div>}
            <button onClick={() => {
                console.log("data", data)
            }
            }>data
            </button>

            {data && data.data.response.productName}
            {data && <ProductDetailTemplate product={data.data.response}/>}
            {}
        </div>
    )
}

export default ProductDetailPage;