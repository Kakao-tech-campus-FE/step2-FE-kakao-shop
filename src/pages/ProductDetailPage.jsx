import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetail } from '../store/slices/detailSlice';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import { useQuery } from 'react-query';
import productInformationColumn from '../components/molecules/productInformationColumn';

const ProductDetailPage = () => {
    const { id } = useParams() //string
    const parseId = parseInt(id, 10);
    const dispatch = useDispatch();
    const {
        data,
        error,
        isLoading, } = useQuery(`product/${id}`, () => getProductById(id)) //구분자,API요청함수

    // const { loading, error, detail } = useSWR(`/products/${id}`, getProductById)

    // if (!!id) {
    //     return <div>잘못된 접근</div>;
    // }

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])

    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {data && <div>{data.productName}</div>}
            <productInformationColumn />
        </div>
    );
};

export default ProductDetailPage;