import { Suspense } from "react"
import { getCart } from "../services/addCart"
import { useQuery } from "react-query"

const OrderPage=()=>{
    const {data, error, isLoading} = useQuery("/cart", getCart);

    // 여기서 처리할때는 Suspense로
    return(
        <Suspense fallback>
            <OrderTemplate data={data} />


        </Suspense>
    )
}

export default OrderPage;