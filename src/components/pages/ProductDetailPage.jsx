import {useParams} from "react-router-dom";
import Loader from "../atoms/Loader";
import {getProductById} from "../../services/product";
import {useQuery} from "react-query";
import ProductDetailTemplate from "../templates/ProductDetailTemplate";
import {useEffect, useState} from "react";
import {addCart, getCart} from "../../services/cart";

const ProductDetailPage = () => {
    const id = useParams().id;
    const {isLoading, error, data} = useQuery(`product${id}`, () => getProductById(id));


    const [product, setProduct] = useState({})

    // useEffect(() => {
    //     console.log("data.data.response.options", data?.data?.response.options)
    //     if (!validate(data)) {
    //         return;
    //     }
    //     setProduct(data.data.response);
    // })
    //
    //
    // const validate = (target) => {
    //     if (!target) {
    //         return false;
    //     }
    //
    //     const requiredKeys = [
    //         "id",
    //         "productName",
    //     ];
    //
    //     const keys = Object.keys(target);
    //     for (const requiredKey of requiredKeys) {
    //         if (!keys.includes(requiredKey)) {
    //             alert(`${requiredKey}가 존재하지 않습니다.`)
    //             return false;
    //         }
    //     }
    //     return true
    // }

    return (

        <div className={"product-detail-page page flex flex-col"}>
            <div className={"h-28 flex justify-center items-center  w-full border-b-light-gray"}>
                <h1 className={"text-3xl font-bold"}>상품 페이지</h1>
            </div>
            <div className={"w-full flex flex-col items-center"}>
                {isLoading && <Loader/>}
                {error && <div>{error.message}</div>}
                {data && <ProductDetailTemplate product={data.data.response}/>}
                {}
            </div>
            <button
                onClick={() => {
                    addCart(
                        [
                            {
                                optionId: 1,
                                quantity: 1
                            },
                            {
                                optionId: 2,
                                quantity: 2
                            }
                        ]
                    ).then((res) => {
                        console.log("res", res)
                    })
                }
                }
            >add cart
            </button>

            <button onClick={
                () => getCart().then((res) => {
                    console.log("res", res)
                })
            }>
                getCarts
            </button>
        </div>
    )
}

export default ProductDetailPage;