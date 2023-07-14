import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])

    // loading & error state에 대한 처리 필요
    return (
        <>
            <h1>ProductDetailPage</h1>
        </>
    );
};

export default ProductDetailPage;