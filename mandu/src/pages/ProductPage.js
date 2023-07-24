import {useRef} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getDetailProduct} from "../services/apis";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import ProductInfo from "../components/organisms/ProductInfo";
import ProductImgInfo from "../components/organisms/ProductImgInfo";
import Dialog from "../components/atoms/Dialog";

const ProductPage = () => {
    const {productId} = useParams();
    const modalRef = useRef();
    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery(['product', productId], () => getDetailProduct(productId), {retry: 1});

    const showDialog = () => {
        modalRef.current.showModal();
    }

    const modalTitle = '장바구니에 추가되었습니다.';
    const modalSubTitle = '장바구니로 이동하시겠습니까?';


    if (isLoading) return <LoadingPage/>
    if (isError) return <ErrorPage error={error}/>

    const {image} = data;

    return (
        <div className="flex py-10 flex-wrap justify-center">
            <ProductImgInfo img={image}/>
            <ProductInfo product={data} showDialog={showDialog}/>
            <Dialog ref={modalRef} title={modalTitle} subTitle={modalSubTitle}
                    continueName="이동" link="/cart"/>
        </div>
    );
}

export default ProductPage;
