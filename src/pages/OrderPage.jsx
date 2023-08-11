import { Suspense } from "react"
import { getCart } from "../services/addCart"
import { useQuery } from "react-query"
import OrderTemplate from "../component/templates/OrderTemplate"
import Loader from "../component/atoms/Loader"

const staticServerUrl = process.env.REACT_APP_PATH || "";

const OrderPage=()=>{
    const {data, error, isLoading} = useQuery(['cart'], getCart);

    // 여기서 처리할때는 Suspense로
    return(
        <Suspense fallback={<Loader />}>
            <OrderTemplate data={data}></OrderTemplate>


        </Suspense>
    )
}

export default OrderPage;