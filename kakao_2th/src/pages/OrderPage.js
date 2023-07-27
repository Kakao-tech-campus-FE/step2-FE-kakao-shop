import { useQuery } from "react-query"
import OrderTemplate from "../components/templates/OrderTemplate"
import { getCart } from "../services/cart"
import { Suspense } from "react"
import Loader from "../components/atoms/Loader"

const OrderPage = () => {
    const { data, error, isLoading } = useQuery("cart", getCart)

    return (
        <Suspense fallback={<Loader />}>
            <OrderTemplate data={data} />
        </Suspense>
    )
}

export default OrderPage