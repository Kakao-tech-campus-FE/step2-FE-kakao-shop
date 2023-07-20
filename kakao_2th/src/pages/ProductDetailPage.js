import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useQuery(`product/${id}`, () => {
        getProductById(id)
    })

    const product = data?.data?.response;

    return <div>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {data && <div>{product.porductName}</div>}
    </div>
}

export default ProductDetailPage