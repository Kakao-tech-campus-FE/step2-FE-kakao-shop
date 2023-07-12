import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Loader from "../component/atoms/Loader";
import { getDetail } from "../store/slices/detailSlice";


const ProductDetailPage = () => {
    const { id } = useParams();  // string
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.detail.loading);
    const error = useSelector((state) => state.detail.error);
    const detail = useSelector((state) => state.detail.detail);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]) // 상품 id값이 변경될 때마다 새로운 페이지를 불러옴

    return (
        <div>
            {loading && <Loader />}
            {error && <div>{error.message}</div>}
            {detail && <div>{detail.productName}</div>}
        </div>
    )

}

export default ProductDetailPage