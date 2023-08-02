import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import Loader from "../component/atoms/Loader";
import ProductDetailTemplate from "../component/templates/ProductDetailTemplate";
import { getProductById } from "../services/product";


const ProductDetailPage = () => {
    const { id } = useParams();  // string
    const {data, error, isLoading, refetch } = useQuery(`product/${id}`, () => getProductById(id), { enabled: false }); // 구분자 , API 요청 함수
    // useQuery는 API 요청이 한 개일 때 , useQueries 는 여러 요청을 한 번에 보여주어야 할 때

    const product = data?.data?.response;

    useEffect(() => {
        refetch() // id가 변경될 때마다 데이터를 다시 가져오기.
      }, [id, refetch]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {product && <ProductDetailTemplate product = {product}/>}
        </div>
    )

}

export default ProductDetailPage