
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/product';
import { useQuery } from "@tanstack/react-query";
import ProductInformationColumn from '../components/molecules/ProductInformationColumn';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const ProductDetailPage = () => {
    const { id } = useParams() //string
    //const parseId = parseInt(id, 10);
    // const dispatch = useDispatch();

    const {
        data,
        error,
        isLoading, } = useQuery(['product', id], () => getProductById(id), { suspense: true }) //구분자,API요청함수
    console.log(data.data.response, error, isLoading)
    // const { loading, error, detail } = useSWR(`/products/${id}`, getProductById)

    if (!id) {
        return <div>잘못된 접근</div>;
    }


    return (
        <div>
            {/* {isLoading && <Loader />} */}
            {/* {error && <div>{error.message}</div>}
                {data.data.response && <div>{data.data.response.productName}</div>} */}
            {/* <Suspense fallback={< Loader />}> */}
            <Header />
            <ProductInformationColumn product={data.data.response} />
            <Footer />
            {/* </Suspense> */}
        </div>
    );
};

export default ProductDetailPage;