import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../component/atoms/Loader";
import { useQuery } from "react-query";
import { getProducts } from "../services/product";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const{
        data: detail,
        error,
        isLoading,
    } = useQuery(`product/${id}`, () => getProducts(id));
    // react-query, useSWR
    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])

    return(
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {detail && <div>{detail.productName}</div>}
        </div>
        
        )
}

export default ProductDetailPage;