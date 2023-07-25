import {useParams} from "react-router-dom";
import Loader from "../atoms/Loader";
import {getProductById} from "../../services/product";
import {useQuery} from "react-query";
import ProductDetailTemplate from "../templates/ProductDetailTemplate";
import ErrorSign from "../atoms/ErrorSign";
import Alert from "../atoms/Alert";
import {createContext, useEffect, useState} from "react";

export const AlertContext = createContext(null);



const ProductDetailPage = () => {
    const id = useParams().id;
    const {isLoading, error, data} = useQuery(`product${id}`, () => getProductById(id));

    const [isOpened, setIsOpened] = useState(false);

    useEffect(
        () => {
            console.log("isOpened", isOpened)
        }
        , [isOpened]
    )

    const RequireLoginModal = ({isOpen}) =>
        <Alert
            message={"상품 페이지입니다."}
            buttonText={"로그인"}
            onClickButton={() => {window.location.href = "/login"}}
            className={"require-login-alert"}
            isOpen={isOpen}
            onClose={() => {
                setIsOpened(false);
            }}
        />

    return (
        <AlertContext.Provider value={{isOpened, setIsOpened}}>
        <div className={"product-detail-page page flex flex-col"}>
            <RequireLoginModal isOpen={isOpened}/>
            {data && <div className={"h-28 flex justify-center items-center  w-full border-b-light-gray"}>
                <h1 className={"text-3xl font-bold bg-amber-200"}>상품 페이지</h1>
            </div>}
            <div className={"w-full flex flex-col items-center"}>
                {isLoading && <Loader/>}
                {error && <ErrorSign error={error}/>}
                {data && <ProductDetailTemplate product={data.data.response}/>}
            </div>
        </div>
        </AlertContext.Provider>
    )
}

export default ProductDetailPage;