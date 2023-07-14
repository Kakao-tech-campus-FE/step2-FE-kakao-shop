import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../store/slices/ProductSlice";
import { getProductById } from "../services/product";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../component/atoms/Loader";
import { useQueries, useQuery } from "react-query";
import { isQueryKey } from "react-query/types/core/utils";

const ProductDetailPage = ()=>{
    const {id} = useParams();
    const dispatch=useDispatch();
    const {
        data, 
        error, 
        isLoading,
    }= useQuery(`product/${id}`, ()=> getProductById(id)); // 구분자, api 요청 함수

    useQueries([
        {}
    ])

    useEffect(()=>{
        dispatch(getDetail(id))
    },[dispatch,id]);

    return(
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {data && <div>{detail.productName}</div>}
            //loading state, error에 대한 처리
            <h1>Product Detail Page</h1>
        </div>
    );
};

export default ProductDetailPage;