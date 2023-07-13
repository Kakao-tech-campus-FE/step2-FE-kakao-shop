import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const {
        data,
        error,
        isLoading,
    } = useQuery(`product/${id}`, () => getProductById(id))

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return <div>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {data && <div>{data.porductName}</div>}
    </div>
}

export default ProductDetailPage