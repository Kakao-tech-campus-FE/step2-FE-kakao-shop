import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import Loader from "../component/atoms/Loader";
import { getProductById } from "../services/product";



const ProductDetailPage = () => {
    const { id } = useParams();  // string
    const {data: detail, error, isLoading, refetch } = useQuery(`product/${id}`, () => getProductById(id), { enabled: false }); // 구분자 , API 요청 함수
    // useQuery는 API 요청이 한 개일 때 , useQueries 는 여러 요청을 한 번에 보여주어야 할 때
    

    useEffect(() => {
        refetch() // id가 변경될 때마다 데이터를 다시 가져옵니다.
      }, [id, refetch]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {detail && <div>{detail.data.response.productName}</div>}
        </div>
    )

}

export default ProductDetailPage