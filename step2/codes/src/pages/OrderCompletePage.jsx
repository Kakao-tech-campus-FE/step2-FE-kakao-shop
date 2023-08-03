import { Suspense } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../component/atoms/Loader";
import OrderCompleteTemplate from "../component/templates/OrderCompleteTemplate";
import { getOrderFromId } from "../services/order";

const OrderCompletePage = () => {
    const { id } = useParams();
    const { data } = useQuery(`orders/${id}`, () => getOrderFromId(id) );

    return (
        <Suspense fallback={<Loader />}>
            <OrderCompleteTemplate data={data} />
        </Suspense>
    )
    
};

export default OrderCompletePage;